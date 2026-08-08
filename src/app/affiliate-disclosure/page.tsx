import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Kissako",
  description: "How Kissako's affiliate relationships work.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="kissako">
      <SiteNav />

      <article className="article">
        <div className="article-wrap">
          <h1 className="display">Affiliate Disclosure</h1>
          <div className="article-body">
            <p>
              Kissako participates in affiliate programs, including Amazon
              Associates and other retailer programs. This means we may earn
              a commission when you click a link and make a purchase, at no
              additional cost to you.
            </p>
            <p>
              This never changes what we recommend. Every tea, brand, or
              product on this site is chosen because we believe it&apos;s
              worth your time — the affiliate relationship only affects how
              we keep the site running.
            </p>
            <p>
              As required by the FTC, this disclosure is provided on every
              page that contains affiliate links.
            </p>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
