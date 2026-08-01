import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  date: string;
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

export function getAllArticleSlugs(): string[] {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllArticles(): ArticleMeta[] {
  return getAllArticleSlugs()
    .map((slug) => getArticleMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleMeta(slug: string): ArticleMeta {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title,
    tag: data.tag,
    description: data.description,
    date: data.date,
  };
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  return {
    slug,
    title: data.title,
    tag: data.tag,
    description: data.description,
    date: data.date,
    contentHtml: processed.toString(),
  };
}
