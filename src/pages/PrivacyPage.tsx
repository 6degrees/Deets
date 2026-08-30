export function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-5 py-32 md:px-10">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">Legal</p>
      <h1 className="mt-4 font-display text-5xl tracking-[-0.05em] lowercase">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-ink-soft">Last updated: July 2025</p>
      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">1. Introduction</h2>
          <p className="mt-3">
            Deets Pro ("we", "us") is committed to protecting your personal data
            in compliance with the Personal Data Protection Law (PDPL) of the
            Kingdom of Saudi Arabia (Royal Decree No. M/19, 1443H) and its
            implementing regulations.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">2. Data We Collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Account data: email address, username, password (encrypted).</li>
            <li>
              Profile data: name, job title, company, phone numbers, website,
              social links, and profile photo — as provided by you.
            </li>
            <li>
              Usage data: page views, vCard downloads, and profile visit counts
              (aggregated, no third-party tracking).
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            3. How We Use Your Data
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To operate and maintain your digital business card profile.</li>
            <li>To authenticate your account and secure the Service.</li>
            <li>To display your profile to people you share your link with.</li>
            <li>To send transactional emails (e.g., password reset, sign-in links).</li>
            <li>To generate anonymized analytics on profile performance.</li>
          </ul>
          <p className="mt-3">We do not sell your personal data to any third party.</p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            4. Legal Basis for Processing
          </h2>
          <p className="mt-3">
            We process your data based on: (a) your consent when you create an
            account; (b) contractual necessity to provide the Service; and (c)
            our legitimate interests in operating and improving the Service,
            where these do not override your rights.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">5. Data Sharing</h2>
          <p className="mt-3">
            Your profile data is publicly visible to anyone with your profile
            link. We do not share your private account data (email, password)
            with third parties except service providers strictly necessary to
            operate the Service, or when required by Saudi law or a valid court
            order.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">6. Data Retention</h2>
          <p className="mt-3">
            We retain your data for as long as your account is active. If you
            request account deletion, we will delete your personal data within
            30 days, except where retention is required by law.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            7. Your Rights Under PDPL
          </h2>
          <p className="mt-3">As a data subject under Saudi Arabia's PDPL, you have the right to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data (subject to legal retention requirements).</li>
            <li>Withdraw consent at any time, without affecting the lawfulness of prior processing.</li>
            <li>Object to processing in certain circumstances.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a className="underline underline-offset-4" href="mailto:contact@deets.pro">
              contact@deets.pro
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">8. Security</h2>
          <p className="mt-3">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            or loss. Passwords are stored using industry-standard one-way
            hashing.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">9. Cookies</h2>
          <p className="mt-3">
            We use a single session cookie strictly necessary to keep you logged
            in. We do not use advertising or tracking cookies.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            10. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy to reflect changes in law or our
            practices. We will post the updated version with a new "Last
            updated" date. Continued use of the Service constitutes acceptance.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl tracking-tight text-ink">
            11. Contact & Complaints
          </h2>
          <p className="mt-3">
            For privacy-related inquiries or complaints, contact us at{" "}
            <a className="underline underline-offset-4" href="mailto:contact@deets.pro">
              contact@deets.pro
            </a>
            . You also have the right to submit a complaint to the Saudi Data
            & Artificial Intelligence Authority (SDAIA) at sdaia.gov.sa.
          </p>
        </section>
      </div>
    </article>
  )
}
