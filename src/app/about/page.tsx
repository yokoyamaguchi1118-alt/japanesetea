import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About — Kissako",
  description:
    "Kissako tastes, researches, and writes about Japanese tea for people discovering it for the first time.",
};

export default function AboutPage() {
  return (
    <div className="kissako">
      <SiteNav />

      <article className="article">
        <div className="article-wrap">
          <h1 className="display">About Kissako</h1>
          <div className="article-body">
            <p>
              Kissako started with a simple obsession: Japanese tea, and the
              belief that it deserves better than a spec sheet.
            </p>
            <p>
              We taste, research, and write about sencha, matcha, hojicha,
              and gyokuro for people discovering Japanese tea for the first
              time — without talking down to the people who already know it
              well.
            </p>
            <p>
              This site is run independently. We&apos;re not affiliated with
              any tea brand, and every recommendation reflects our own
              research and genuine interest in the tea itself.
            </p>
            <p>
              Questions, corrections, or just want to talk tea? Reach us at{" "}
              <a href="mailto:yokoyamaguchi1118@gmail.com">
                yokoyamaguchi1118@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
