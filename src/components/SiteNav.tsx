import Link from "next/link";

export default function SiteNav() {
  return (
    <nav>
      <div className="brand">
        <Link href="/" className="display" style={{ textDecoration: "none", color: "inherit" }}>
          Kissako
        </Link>
        <span className="jp">喫茶去</span>
      </div>
      <div className="navlinks">
        <Link href="/#sencha">Sencha</Link>
        <Link href="/#matcha">Matcha</Link>
        <Link href="/#hojicha">Hojicha</Link>
        <Link href="/#guides">Guides</Link>
        <Link href="/#about">About</Link>
      </div>
      <div className="lang">EN ▾</div>
    </nav>
  );
}
