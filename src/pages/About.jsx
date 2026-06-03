export default function About({ navigate, siteData }) {
  const ab    = siteData?.about      ?? {};
  const hero  = ab.hero              ?? { heading: "", subtext: "" };
  const stats = ab.stats             ?? [];
  const team  = ab.team              ?? [];
  const mission = ab.content?.mission ?? "";

  return (
    <>
      {/* ── HERO ── */}
      <section className="about-hero">
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="sec-label sec-label-light">About Us</span>
          <h1>{hero.heading || "We Connect Great Companies With World-Class Developers"}</h1>
          <p>{hero.subtext || ""}</p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats">
        <div className="about-stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <span className="sec-label">Our Mission</span>
            <h2>Why We Built HourlyRecruit</h2>
            <p>{mission}</p>
            <p style={{ marginTop: 14 }}>
              We believe every company — from a two-person startup to a Fortune 500 — deserves access
              to world-class engineering talent. Our platform removes the friction, cost, and risk from
              technical hiring so you can focus on building great products.
            </p>
          </div>
          <div className="about-features">
            {[
              { emoji: "🎯", title: "Precision Matching",    desc: "We hand-pick developers based on your exact stack, timezone, and team culture." },
              { emoji: "🔒", title: "Vetted Talent Only",    desc: "Every developer passes a rigorous multi-stage technical and communication assessment." },
              { emoji: "⚡", title: "Speed to Hire",         desc: "From requirement to first commit in 48 hours — not weeks." },
              { emoji: "🤝", title: "Ongoing Partnership",   desc: "A dedicated account manager supports you throughout the entire engagement." },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="about-feat">
                <div className="about-feat-icon">{emoji}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      {team.length > 0 && (
        <section style={{ padding: "72px 5%", background: "white" }}>
          <div className="sec-head" style={{ marginBottom: 44 }}>
            <span className="sec-label">Our Team</span>
            <h2 className="sec-title">The People Behind HourlyRecruit</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
            {team.map((m) => (
              <div key={m.name} style={{ background: "var(--off)", border: "1px solid var(--gray-100)", borderRadius: "var(--radius-xl)", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 800, color: "#fff", margin: "0 auto 14px", boxShadow: "0 4px 16px rgba(0,0,0,.15)" }}>
                  {m.initials}
                </div>
                <h4 style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 15, color: "var(--navy)", marginBottom: 4 }}>{m.name}</h4>
                <span style={{ fontSize: 12, color: "var(--gray-400)" }}>{m.role}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="cta">
        <div className="cta-inner">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="sec-label" style={{ color: "#38bdf8" }}>Join Our Clients</span>
            <h2>Ready to Build With<br />World-Class Talent?</h2>
            <p>Hire developers on flexible hourly terms and scale your product faster than ever.</p>
          </div>
          <div className="cta-btns" style={{ position: "relative", zIndex: 1 }}>
            <button className="btn-white"         onClick={() => navigate("contact")}>Get Started</button>
            <button className="btn-outline-white"  onClick={() => navigate("how")}>How It Works</button>
          </div>
        </div>
      </section>
    </>
  );
}
