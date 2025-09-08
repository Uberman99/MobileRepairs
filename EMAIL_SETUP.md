This project can send quote request emails using Nodemailer and a Gmail account.

Steps to configure:

1. Enable 2-Step Verification on your Google account:
   - Go to https://myaccount.google.com -> Security -> 2-Step Verification

2. Create an App Password:
   - In Security, select "App passwords"
   - Select App: Mail, Device: Other (Custom name) -> name it "MobileRepairsApp"
   - Copy the 16-character password shown and keep it safe.

3. Create a local env file:
   - Copy `.env.local.example` to `.env.local` in the project root.
   - Replace values with your Gmail address and the generated app password.

4. Restart the dev server:
   - Stop the running server and run `npm run dev` to pick up the new vars.

Notes:
- For production deployment, configure environment variables in your hosting platform.
- If you prefer not to use Gmail, update the transporter configuration in `src/app/api/quotes/route.ts` to match your provider's SMTP settings.
