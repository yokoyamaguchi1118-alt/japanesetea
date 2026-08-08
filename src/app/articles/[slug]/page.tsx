import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { getAllArticleSlugs, getArticleBySlug, getArticleMeta } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const meta = getArticleMeta(slug);
    return {
      title: `${meta.title} — Kissako`,
      description: meta.description,
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getAllArticleSlugs().includes(slug)) {
    notFound();
  }

  const article = await getArticleBySlug(slug);

  return (
    <div className="kissako">
      <SiteNav />

      <article className="article">
        <div className="article-wrap">
          <Link href="/#guides" className="article-back mono">
            ← Back to journal
          </Link>
          <span className="tag mono">{article.tag}</span>
          <h1 className="display">{article.title}</h1>
          <p className="article-date mono">{article.date}</p>
          <p className="article-disclosure">
            This post may contain affiliate links. If you make a purchase
            through one of these links, we may earn a small commission at no
            extra cost to you. See our{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>{" "}
            for details.
          </p>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
