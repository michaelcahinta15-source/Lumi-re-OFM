import { NextResponse } from "next/server";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  socialHandle: z.string().trim().min(1).max(100),
  platform: z.enum([
    "OnlyFans",
    "Instagram",
    "TikTok",
    "YouTube",
    "Other subscription platform",
    "Preparing to launch",
  ]),
  contentLinks: z.string().trim().max(2000),
  contentOverview: z.string().trim().min(10).max(3000),
  goals: z.string().trim().min(10).max(3000),
  experience: z.string().max(100),
  meetingDate: z.string().refine((value) => {
    if (!value) return true;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const parsedDate = new Date(`${value}T00:00:00.000Z`);
    return !Number.isNaN(parsedDate.getTime()) && parsedDate.toISOString().slice(0, 10) === value;
  }),
  meetingTime: z.string().refine((value) => {
    if (!value) return true;
    const match = /^(\d{2}):(\d{2})$/.exec(value);
    return match !== null && Number(match[1]) < 24 && Number(match[2]) < 60;
  }),
  meetingTimeZone: z.string().trim().max(100),
  isAdult: z.enum(["true"]),
  proofConsent: z.enum(["true"]),
});

const MAX_PROOF_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_PROOF_SIZE + 64 * 1024) {
    return NextResponse.json({ error: "Application or proof file is too large." }, { status: 413 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.APPLICATION_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Application email is not configured.");
    return NextResponse.json(
      { error: "Applications are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const senderAddress = fromEmail.match(/<([^<>]+)>$/)?.[1] ?? fromEmail;
  if (!z.string().email().safeParse(senderAddress).success) {
    console.error("Application sender address is invalid.");
    return NextResponse.json(
      {
        error:
          "The application email sender is misconfigured. Set APPLICATION_FROM_EMAIL to an email address on a domain verified in Resend.",
      },
      { status: 503 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid application data." }, { status: 400 });
  }

  const payload = Object.fromEntries(
    [
      "name",
      "email",
      "socialHandle",
      "platform",
      "contentLinks",
      "contentOverview",
      "goals",
      "experience",
      "meetingDate",
      "meetingTime",
      "meetingTimeZone",
      "isAdult",
      "proofConsent",
    ].map((key) => [key, form.get(key)]),
  );
  const parsed = applicationSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 },
    );
  }

  const proofValue = form.get("proofOfAge");
  if (!(proofValue instanceof File) || proofValue.size === 0) {
    return NextResponse.json(
      { error: "Please attach a proof-of-age file." },
      { status: 400 },
    );
  }

  if (proofValue.size > MAX_PROOF_SIZE) {
    return NextResponse.json(
      { error: "Proof-of-age files must be 5 MB or smaller." },
      { status: 413 },
    );
  }

  const proofBytes = new Uint8Array(await proofValue.arrayBuffer());
  let proofExtension: "pdf" | "jpg" | "png";
  let proofMimeType: "application/pdf" | "image/jpeg" | "image/png";

  if (
    proofBytes.length >= 5 &&
    proofBytes[0] === 0x25 &&
    proofBytes[1] === 0x50 &&
    proofBytes[2] === 0x44 &&
    proofBytes[3] === 0x46 &&
    proofBytes[4] === 0x2d
  ) {
    proofExtension = "pdf";
    proofMimeType = "application/pdf";
  } else if (
    proofBytes.length >= 3 &&
    proofBytes[0] === 0xff &&
    proofBytes[1] === 0xd8 &&
    proofBytes[2] === 0xff
  ) {
    proofExtension = "jpg";
    proofMimeType = "image/jpeg";
  } else if (
    proofBytes.length >= 8 &&
    proofBytes[0] === 0x89 &&
    proofBytes[1] === 0x50 &&
    proofBytes[2] === 0x4e &&
    proofBytes[3] === 0x47 &&
    proofBytes[4] === 0x0d &&
    proofBytes[5] === 0x0a &&
    proofBytes[6] === 0x1a &&
    proofBytes[7] === 0x0a
  ) {
    proofExtension = "png";
    proofMimeType = "image/png";
  } else {
    return NextResponse.json(
      { error: "Upload a valid PDF, JPG, or PNG proof-of-age file." },
      { status: 400 },
    );
  }

  const application = parsed.data;
  const text = [
    "CREATOR MANAGEMENT APPLICATION",
    "",
    `Name or alias: ${application.name}`,
    `Email: ${application.email}`,
    `Social handle: ${application.socialHandle}`,
    `Platform: ${application.platform}`,
    `Content links: ${application.contentLinks || "Not provided"}`,
    "",
    "Content overview:",
    application.contentOverview,
    "",
    "Goals:",
    application.goals,
    "",
    `Creator experience: ${application.experience || "Not provided"}`,
    "",
    `Preferred meeting date: ${application.meetingDate || "Not requested"}`,
    `Preferred meeting time: ${application.meetingTime || "Not requested"}`,
    `Meeting time zone: ${application.meetingTimeZone || "Not provided"}`,
    "Meeting preferences are requests only; the appointment must be confirmed with the applicant.",
    "",
    "Applicant confirmed they are 18 years of age or older.",
  ].join("\n");

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: ["lumiereofm@gmail.com"],
        reply_to: application.email,
        subject: `Creator management application - ${application.name}`,
        text,
        attachments: [
          {
            filename: `proof-of-age.${proofExtension}`,
            content: Buffer.from(proofBytes).toString("base64"),
            content_type: proofMimeType,
          },
        ],
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!emailResponse.ok) {
      console.error("Application email provider rejected the request.", {
        status: emailResponse.status,
      });
      if (emailResponse.status === 422) {
        return NextResponse.json(
          {
            error:
              "Resend rejected the sender address. Set APPLICATION_FROM_EMAIL to an email address on a domain verified in your Resend account.",
          },
          { status: 422 },
        );
      }

      if (emailResponse.status === 401 || emailResponse.status === 403) {
        return NextResponse.json(
          { error: "The email service API key is invalid or does not have sending permission." },
          { status: 503 },
        );
      }

      return NextResponse.json(
        { error: "We couldn't send your application. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application email provider request failed.", error);
    return NextResponse.json(
      { error: "We couldn't send your application. Please try again shortly." },
      { status: 502 },
    );
  }
}
