This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Application email setup

Application submissions, including the required proof-of-age attachment, are sent from the server through [Resend](https://resend.com), directly to `michaelcahinta15@gmail.com`. Proof files are limited to 5 MB and accepted as PDF, JPG, or PNG. Applicants are instructed to obscure information not needed to verify age and must consent to email delivery. Email can retain attachments in inboxes and backups; use a dedicated age-verification provider instead if you need stricter document-retention controls. To enable sending:

1. Create a Resend API key.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` to your secret API key. For testing, set `APPLICATION_FROM_EMAIL=onboarding@resend.dev`; Resend only allows this test sender to deliver to the verified email address on your Resend account. For production, verify a sending domain and use a sender address on that domain (for example, `Lumière OFM <applications@yourdomain.com>`).
4. Add both environment variables to your production hosting provider before deployment.

Keep the API key private; do not commit `.env.local` or expose the key in client-side code. Without these settings, the form returns an error rather than claiming an application was sent.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
