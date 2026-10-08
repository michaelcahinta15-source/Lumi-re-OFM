'use client';

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FileCheck2, UploadCloud } from "lucide-react";
import { siteContent } from "@/data/content";

interface ApplicationDetails {
  name: string;
  email: string;
  socialHandle: string;
  platform: string;
  contentLinks: string;
  contentOverview: string;
  goals: string;
  experience: string;
  meetingDate: string;
  meetingTime: string;
  meetingTimeZone: string;
}

const initialDetails: ApplicationDetails = {
  name: "",
  email: "",
  socialHandle: "",
  platform: "",
  contentLinks: "",
  contentOverview: "",
  goals: "",
  experience: "",
  meetingDate: "",
  meetingTime: "",
  meetingTimeZone: "",
};

const fieldClassName =
  "mt-2 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ApplySection() {
  const { headline, subheadline } = siteContent.hero;
  const [details, setDetails] = useState<ApplicationDetails>(initialDetails);
  const [isAdult, setIsAdult] = useState(false);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofConsent, setProofConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof ApplicationDetails,
    value: string,
  ) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const form = new FormData(event.currentTarget);
      form.set("isAdult", String(isAdult));
      form.set("proofConsent", String(proofConsent));

      const response = await fetch("/api/apply", {
        method: "POST",
        body: form,
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setSubmissionError(result.error ?? "We couldn't send your application. Please try again.");
        return;
      }

      setSubmitted(true);
      setDetails(initialDetails);
      setIsAdult(false);
      setProofConsent(false);
      setProofFile(null);
    } catch {
      setSubmissionError("We couldn't send your application. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="apply-section bg-background pt-24 pb-16">
      <div className="interactive-card mb-12 p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">{headline}</h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          {subheadline}
        </p>
        <a
          href="#application-form"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start Your Application
        </a>
      </div>

      <div id="application-form" className="interactive-card scroll-mt-24 p-6 sm:p-8">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-serif text-foreground">
            Creator Application
          </h2>
          <p className="text-muted-foreground">
            Tell us a little about yourself, your content, and what you want to
            achieve. Your application will be sent securely to our team.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Please do not include passwords, payment details, or other sensitive
            information. Your proof-of-age document will be emailed to our team
            as an attachment; only include the minimum information needed to
            verify your age.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-primary/40 bg-primary/10 p-6" role="status" aria-live="polite">
            <h3 className="text-xl font-semibold text-foreground">
              Application sent successfully
            </h3>
            <p className="mt-2 text-muted-foreground">
              Thank you for applying. Our team will review your information and
              get back to you. If you requested a meeting, we&apos;ll confirm the
              appointment with you.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-5 inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form onSubmit={submitApplication} className="space-y-8">
            <fieldset className="grid gap-5 sm:grid-cols-2">
              <legend className="mb-4 text-xl font-semibold text-foreground">
                Basic information
              </legend>
              <div>
                <label htmlFor="application-name" className="text-sm font-medium text-foreground">
                  Name or preferred alias <span aria-hidden="true">*</span>
                </label>
                <input
                  id="application-name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={details.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={fieldClassName}
                  placeholder="How should we address you?"
                />
              </div>
              <div>
                <label htmlFor="application-email" className="text-sm font-medium text-foreground">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="application-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={details.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={fieldClassName}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="application-social" className="text-sm font-medium text-foreground">
                  Social handle <span aria-hidden="true">*</span>
                </label>
                <input
                  id="application-social"
                  name="socialHandle"
                  required
                  maxLength={100}
                  value={details.socialHandle}
                  onChange={(event) => updateField("socialHandle", event.target.value)}
                  className={fieldClassName}
                  placeholder="@yourhandle"
                />
              </div>
              <div>
                <label htmlFor="application-platform" className="text-sm font-medium text-foreground">
                  Platform <span aria-hidden="true">*</span>
                </label>
                <select
                  id="application-platform"
                  name="platform"
                  required
                  value={details.platform}
                  onChange={(event) => updateField("platform", event.target.value)}
                  className={fieldClassName}
                >
                  <option value="" disabled>Select a platform</option>
                  <option>OnlyFans</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>YouTube</option>
                  <option>Other subscription platform</option>
                  <option>Preparing to launch</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-semibold text-foreground">
                Content overview
              </legend>
              <div>
                <label htmlFor="application-links" className="text-sm font-medium text-foreground">
                  Links to your profile or work
                </label>
                <textarea
                  id="application-links"
                  name="contentLinks"
                  rows={2}
                  maxLength={2000}
                  value={details.contentLinks}
                  onChange={(event) => updateField("contentLinks", event.target.value)}
                  className={fieldClassName}
                  placeholder="Add any public profile or sample links (optional)"
                />
              </div>
              <div>
                <label htmlFor="application-overview" className="text-sm font-medium text-foreground">
                  Tell us about your content <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="application-overview"
                  name="contentOverview"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={4}
                  value={details.contentOverview}
                  onChange={(event) => updateField("contentOverview", event.target.value)}
                  className={fieldClassName}
                  placeholder="What kind of content do you create?"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-4 text-xl font-semibold text-foreground">
                Goals and expectations
              </legend>
              <div>
                <label htmlFor="application-goals" className="text-sm font-medium text-foreground">
                  What would you like help with? <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="application-goals"
                  name="goals"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={4}
                  value={details.goals}
                  onChange={(event) => updateField("goals", event.target.value)}
                  className={fieldClassName}
                  placeholder="Share your goals and what you expect from a management team"
                />
              </div>
              <div>
                <label htmlFor="application-experience" className="text-sm font-medium text-foreground">
                  Creator experience
                </label>
                <select
                  id="application-experience"
                  name="experience"
                  value={details.experience}
                  onChange={(event) => updateField("experience", event.target.value)}
                  className={fieldClassName}
                >
                  <option value="">Select an option (optional)</option>
                  <option>I&apos;m already creating</option>
                  <option>I&apos;m new to creating</option>
                  <option>I&apos;d prefer to discuss this</option>
                </select>
              </div>
            </fieldset>

            <fieldset className="space-y-5">
              <legend className="mb-2 text-xl font-semibold text-foreground">
                Request an intro meeting
              </legend>
              <p className="text-sm text-muted-foreground">
                Share a preferred date and time if you would like to meet. This is a request, not a confirmed appointment; our team will contact you to confirm availability.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="application-meeting-date" className="text-sm font-medium text-foreground">
                    Preferred date (optional)
                  </label>
                  <input
                    id="application-meeting-date"
                    name="meetingDate"
                    type="date"
                    value={details.meetingDate}
                    onChange={(event) => updateField("meetingDate", event.target.value)}
                    className={fieldClassName}
                  />
                </div>
                <div>
                  <label htmlFor="application-meeting-time" className="text-sm font-medium text-foreground">
                    Preferred time (optional)
                  </label>
                  <input
                    id="application-meeting-time"
                    name="meetingTime"
                    type="time"
                    value={details.meetingTime}
                    onChange={(event) => updateField("meetingTime", event.target.value)}
                    className={fieldClassName}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="application-meeting-time-zone" className="text-sm font-medium text-foreground">
                  Time zone (optional)
                </label>
                <input
                  id="application-meeting-time-zone"
                  name="meetingTimeZone"
                  maxLength={100}
                  value={details.meetingTimeZone}
                  onChange={(event) => updateField("meetingTimeZone", event.target.value)}
                  className={fieldClassName}
                  placeholder="e.g. America/New_York or UTC−4"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="mb-3 text-xl font-semibold text-foreground">
                Proof of age
              </legend>
              <p className="text-sm text-muted-foreground">
                Attach a clear image or PDF showing your date of birth. Accepted
                formats: JPG, PNG, or PDF (up to 5 MB). For your privacy, cover
                document numbers, address, and other details that are not needed
                to verify your age.
              </p>
              <div>
                <label htmlFor="application-proof" className="text-sm font-medium text-foreground">
                  Proof-of-age file <span aria-hidden="true">*</span>
                </label>
                <label
                  htmlFor="application-proof"
                  className="proof-upload group mt-2 flex min-h-28 cursor-pointer items-center gap-4 px-5 py-4"
                >
                  <input
                    id="application-proof"
                    name="proofOfAge"
                    type="file"
                    required
                    accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
                    onChange={(event) => {
                      const selectedFile = event.target.files?.[0] ?? null;
                      setProofFile(selectedFile);
                      setSubmissionError("");
                      if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
                        setSubmissionError("Proof-of-age files must be 5 MB or smaller.");
                        event.target.value = "";
                        setProofFile(null);
                      }
                    }}
                    className="sr-only"
                  />
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    {proofFile ? (
                      <FileCheck2 className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <UploadCloud className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-foreground">
                      {proofFile ? proofFile.name : "Choose a proof-of-age file"}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {proofFile
                        ? `${(proofFile.size / (1024 * 1024)).toFixed(2)} MB · Click to change file`
                        : "Click to browse · PDF, JPG, or PNG · Up to 5 MB"}
                    </span>
                  </span>
                  <span className="inline-flex h-10 flex-none items-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                    Browse
                  </span>
                </label>
              </div>
            </fieldset>

            <div className="rounded-xl border border-border p-4">
              <div className="flex items-start gap-3">
                <input
                  id="application-adult"
                  name="adultConfirmation"
                  type="checkbox"
                  required
                  checked={isAdult}
                  onChange={(event) => setIsAdult(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <label htmlFor="application-adult" className="text-sm text-muted-foreground">
                  I confirm that I am 18 years of age or older.{" "}
                  <span aria-hidden="true">*</span>
                </label>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                By continuing, you agree that the information above can be
                sent to our team for the purpose of reviewing your application.
              </p>
              <div className="mt-4 flex items-start gap-3 border-t border-border pt-4">
                <input
                  id="application-proof-consent"
                  name="proofConsent"
                  type="checkbox"
                  required
                  checked={proofConsent}
                  onChange={(event) => setProofConsent(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <label htmlFor="application-proof-consent" className="text-sm text-muted-foreground">
                  I understand that my proof-of-age file will be emailed to the
                  agency and may remain in its email inbox. <span aria-hidden="true">*</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-application-button inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary/60 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-md sm:w-auto"
              >
                {isSubmitting ? "Sending application..." : "Submit application"}
              </button>
              <p className="text-sm text-muted-foreground">
                Your application is sent directly to our team; you will stay on this page.
              </p>
            </div>
            {submissionError && (
              <p className="text-sm text-destructive" role="alert">
                {submissionError}
              </p>
            )}
          </form>
        )}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Questions before applying?{" "}
        <Link className="text-primary underline underline-offset-4 hover:text-primary/80" href="/#contact">
          Contact us
        </Link>
      </p>
    </section>
  );
}
