export default function Technologies({ navigate, siteData }) {
  const tech   = siteData?.technologies ?? {};
  const hero   = tech.hero   ?? { heading: "Modern Technologies.\nExpert Developers.", subtext: "" };
  const stacks = tech.stacks ?? [];

  return (
    <>
      <section className="tech-hero">
        <div style={{ position:"relative", zIndex:1 }}>
          <span className="sec-label sec-label-light">Technologies</span>
          <h1>{hero.heading.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>)}</h1>
          <p>{hero.subtext}</p>
        </div>
      </section>

      <section className="tech-page">
        {stacks.map(({ name, techs }) => (
          <div key={name} className="tech-section">
            <div className="tech-section-header">
              <div className="tech-section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>{name}</h3>
            </div>
            <div className="tech-cards">
              {(techs ?? []).map(({ name: tname, color, desc }) => (
                <div key={tname} className="tech-card">
                  <div className="tech-card-dot" style={{ background: color }} />
                  <h4>{tname}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="cta">
        <div className="cta-inner">
          <div style={{ position:"relative", zIndex:1 }}>
            <span className="sec-label" style={{ color:"#38bdf8" }}>Need a Specialist?</span>
            <h2>Find the Right Tech Expert<br />for Your Stack</h2>
            <p>Whatever technology you're building with, we have vetted developers who specialize in it.</p>
          </div>
          <div className="cta-btns" style={{ position:"relative", zIndex:1 }}>
            <button className="btn-white"         onClick={() => navigate("contact")}>Get Started</button>
            <button className="btn-outline-white"  onClick={() => navigate("contact")}>Talk to Us</button>
          </div>
        </div>
      </section>
    </>
  );
}
