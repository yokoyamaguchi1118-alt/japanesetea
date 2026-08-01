import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="kissako">
      <SiteNav />

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow mono">A GUIDE TO JAPAN, ONE CUP AT A TIME</div>
            <h1 className="display">
              Come, <em>have some tea.</em>
              <br />
              Then decide what&apos;s worth buying.
            </h1>
            <p className="lede">
              Kissako means &quot;go, have some tea&quot; — a Zen answer to the
              question of what to do next. We taste, source, and explain
              Japanese tea before we ever recommend it, so you can shop like
              someone who already knows the country.
            </p>
            <div className="cta-row">
              <button className="btn">Start with Sencha</button>
            </div>
          </div>
          <div className="cup-wrap">
            <svg viewBox="0 0 300 300" fill="none">
              <path
                className="steam s1"
                d="M120 90 C110 70, 130 55, 120 35"
                stroke="#37493a"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <path
                className="steam s2"
                d="M150 90 C140 68, 160 50, 150 28"
                stroke="#37493a"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <path
                className="steam s3"
                d="M180 90 C170 70, 190 55, 180 35"
                stroke="#37493a"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <ellipse cx={150} cy={210} rx={95} ry={18} fill="#dfe3d2" />
              <path
                d="M65 120 L235 120 L215 205 C213 216 205 222 190 222 L110 222 C95 222 87 216 85 205 Z"
                fill="#eeead9"
                stroke="#23201a"
                strokeWidth={2.5}
              />
              <ellipse cx={150} cy={120} rx={85} ry={14} fill="#8f9b74" stroke="#23201a" strokeWidth={2.5} />
              <ellipse cx={150} cy={118} rx={70} ry={9} fill="#5c6e46" />
              <path
                d="M225 130 C258 130 262 172 228 178"
                stroke="#23201a"
                strokeWidth={2.5}
                fill="none"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="trust-grid">
          <div className="trust-item">
            <span className="mono">CURATED, NOT AUTO-GENERATED</span>
            <h3>Chosen by someone who genuinely loves tea</h3>
            <p>
              Every recommendation here comes from real research and a real
              interest in the tea itself.
            </p>
          </div>
          <div className="trust-item">
            <span className="mono">AS SPECIFIC AS THE INFORMATION ALLOWS</span>
            <h3>Named, not just categorized</h3>
            <p>
              Where we can find it, we share the prefecture, the farm, and
              the harvest — Uji isn&apos;t a flavor category, it&apos;s a
              place.
            </p>
          </div>
          <div className="trust-item">
            <span className="mono">BEGINNER-FRIENDLY, NOT BEGINNER-ONLY</span>
            <h3>Made for a first cup, useful for a hundredth</h3>
            <p>
              Approachable enough to start with zero background knowledge —
              detailed enough that people who already know Japanese tea well
              still find something worth reading.
            </p>
          </div>
        </div>
      </section>

      <section className="cats" id="sencha">
        <div className="section-head">
          <h2 className="display">Start by taste</h2>
          <div className="sub">
            Five tea families, sorted by how they actually taste in the cup —
            not by price.
          </div>
        </div>
        <div className="cat-row">
          <div className="cat-card">
            <div className="swatch" style={{ background: "#8fae52" }} />
            <p className="jp">煎茶</p>
            <p className="romaji">SENCHA</p>
            <p className="desc">Grassy, a little sweet. The everyday cup of Japan.</p>
            <span className="link">Explore →</span>
          </div>
          <div className="cat-card" id="matcha">
            <div className="swatch" style={{ background: "#5c7a34" }} />
            <p className="jp">抹茶</p>
            <p className="romaji">MATCHA</p>
            <p className="desc">Whole leaf, whisked. Rich, ceremonial, occasionally bitter.</p>
            <span className="link">Explore →</span>
          </div>
          <div className="cat-card" id="hojicha">
            <div className="swatch" style={{ background: "#c78a3e" }} />
            <p className="jp">ほうじ茶</p>
            <p className="romaji">HOJICHA</p>
            <p className="desc">Roasted, low in caffeine. Tastes like a quiet evening.</p>
            <span className="link">Explore →</span>
          </div>
          <div className="cat-card">
            <div className="swatch" style={{ background: "#3d5c2e" }} />
            <p className="jp">玉露</p>
            <p className="romaji">GYOKURO</p>
            <p className="desc">Shade-grown, umami-heavy. The one worth saving for.</p>
            <span className="link">Explore →</span>
          </div>
        </div>
      </section>

      <section className="articles" id="guides">
        <div className="section-head">
          <h2 className="display">Latest from the journal</h2>
          <div className="sub" />
        </div>
        <div className="art-grid">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="art-card"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <span className="tag mono">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
