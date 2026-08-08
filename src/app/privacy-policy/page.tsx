import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Kissako",
  description: "How Kissako collects, uses, and protects your data.",
};

function formattedToday(): string {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function PrivacyPolicyPage() {
  return (
    <div className="kissako">
      <SiteNav />

      <article className="article">
        <div className="article-wrap">
          <h1 className="display">Privacy Policy</h1>
          <p className="article-date mono">Last updated: {formattedToday()}</p>
          <div className="article-body">
            <p>
              Kissako (&quot;we&quot;, &quot;us&quot;) respects your privacy.
              This page explains what data we collect and how we use it.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                <strong>Analytics:</strong> We use Google Analytics to
                understand how visitors use this site (pages viewed, time on
                site, general location). This data is anonymized and does
                not identify you personally.
              </li>
              <li>
                <strong>Cookies:</strong> This site uses cookies for
                analytics and to support affiliate tracking (see our{" "}
                <a href="/affiliate-disclosure">Affiliate Disclosure</a>).
                You can disable cookies in your browser settings.
              </li>
              <li>
                <strong>Contact Information:</strong> If you email us, we
                retain that information only to respond to you.
              </li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              This site contains links to third-party retailers and
              services. We are not responsible for the privacy practices of
              those sites.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request that we delete any personal information
              you&apos;ve shared with us by contacting{" "}
              <a href="mailto:yokoyamaguchi1118@gmail.com">
                yokoyamaguchi1118@gmail.com
              </a>
              .
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page.
            </p>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
