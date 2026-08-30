export function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-32 md:px-10">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">Legal</p>
      <h1 className="mt-4 font-display text-5xl tracking-[-0.05em] lowercase">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated: August 2026</p>
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">1. Acceptance</h2>
          <p className="mt-3">
            By accessing or using Deets Pro ("Service"), you agree to be bound by
            these Terms. If you do not agree, do not use the Service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            2. Service Description
          </h2>
          <p className="mt-3">
            Deets Pro provides digital business card profiles that can be shared
            via URL, NFC, or QR code. The Service allows users to store and
            display professional contact information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">3. Eligibility</h2>
          <p className="mt-3">
            You must be at least 18 years old and legally capable of entering
            into a binding agreement under the laws of the Kingdom of Saudi
            Arabia to use this Service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">4. User Accounts</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>You must notify us immediately of any unauthorized access.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            5. Dormant and inactive accounts
          </h2>
          <p className="mt-3">
            We want to keep the Service reliable and fairly priced for active
            users. Accounts that are not on an active paid subscription and show
            little or no meaningful use may be reviewed and marked as dormant.
          </p>
          <p className="mt-3">
            An account may be considered for dormancy if, for example, it has
            not been used in more than twelve (12) months — including no
            sign-in, no updates to profile content, and no engagement with the
            profile through the Service. Dormancy is applied at the account
            level. When an account is marked dormant, associated profiles are
            typically removed from our public directory and may lose other
            inactive-account privileges, while we retain the data for a limited
            period in accordance with our retention practices.
          </p>
          <p className="mt-3">
            Dormant accounts that remain unused may eventually be permanently
            deleted, along with their profile content and related data. We may
            delete dormant accounts without further notice once our internal
            retention period has passed. Active subscribers and accounts in good
            standing with ongoing use are not subject to this process.
          </p>
          <p className="mt-3">
            If you believe your account was marked dormant in error, or you wish
            to restore access, please contact us through our Help page. Tell us
            the email or username associated with the account and briefly
            describe your situation.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">6. Acceptable Use</h2>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Use the Service for any unlawful purpose or in violation of Saudi regulations.</li>
            <li>Upload false, misleading, or impersonating content.</li>
            <li>Attempt to gain unauthorized access to other accounts or systems.</li>
            <li>Use automated tools to scrape or abuse the Service.</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            7. Intellectual Property
          </h2>
          <p className="mt-3">
            Deets Pro and its underlying technology are owned by 6 Degrees
            Technologies. You retain ownership of the content you upload. By
            uploading content, you grant us a limited license to display it as
            part of the Service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">8. Termination</h2>
          <p className="mt-3">
            We reserve the right to suspend or terminate accounts that violate
            these Terms or applicable law, without prior notice. You may delete
            your account at any time by contacting support.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            9. Limitation of Liability
          </h2>
          <p className="mt-3">
            The Service is provided "as is" without warranties of any kind. To
            the maximum extent permitted by applicable law, 6 Degrees
            Technologies shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the Service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            10. Changes to Terms
          </h2>
          <p className="mt-3">
            We may update these Terms from time to time. Continued use of the
            Service after changes are posted constitutes acceptance of the
            updated Terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">11. Governing Law</h2>
          <p className="mt-3">
            These Terms are governed by the laws of the Kingdom of Saudi Arabia.
            Any disputes shall be subject to the jurisdiction of the competent
            courts in the Kingdom of Saudi Arabia.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">12. Contact</h2>
          <p className="mt-3">
            For questions regarding these Terms, contact us at{" "}
            <a className="underline underline-offset-4" href="mailto:contact@deets.pro">
              contact@deets.pro
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  )
}
