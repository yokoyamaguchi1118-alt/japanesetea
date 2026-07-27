import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kissako — A guide to Japan, one cup at a time",
  description:
    "Kissako tastes, sources, and explains Japanese tea before recommending it — sencha, matcha, hojicha, and gyokuro guides for people discovering Japan for the first time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500;800&family=Work+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
