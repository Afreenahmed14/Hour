import { useState } from "react";

export default function HowItWorks({ navigate, siteData }) {
  const [openFaq, setOpenFaq] = useState(null);
  const hw    = siteData?.howItWorks ?? {};
  const hero  = hw.hero  ?? { heading: "From Brief to Build in 5 Simple Steps", subtext: "" };
  const steps = hw.steps ?? [];
  const faqs  = hw.faqs  ?? [];

  return (
    <>
      <section className="how-hero">
        <div style={{ position:"relative", zIndex:1 }}>
          <span className="sec-label sec-label-light">Process</span>
          <h1>{hero.heading}</h1>
          <p>{hero.subtext}</p>
        </div>
      </section>

      <section className="how-page">
        <div className="sec-head" style={{ marginBottom:48 }}>
          <span className="sec-label">The Process</span>
          <h2 className="sec-title">How HourlyRecruit Works</h2>
          <p className="sec-sub">Everything is handled for you — from matching to contracts to payments.</p>
        </div>
        <div className="how-steps-full">
          {steps.map(({ n, title, desc, tips }) => (
            <div key={n} className="how-step-row">
              <div className="how-step-num-wrap"><div className="how-step-num">{n}</div></div>
              <div className="how-step-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                {tips && tips.length > 0 && (
                  <div className="how-step-tips">
                    {tips.map(t => <div key={t} className="how-tip">✓ {t}</div>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section style={{ padding:"80px 5%", background:"var(--off)" }}>
        <div className="sec-head" style={{ marginBottom:48 }}>
          <span className="sec-label">Engagement Models</span>
          <h2 className="sec-title">Choose How You Work With Us</h2>
        </div>
        <div className="engage-grid">
          {[
            { title:"Hourly Hiring", featured:false, desc:"Pay only for productive hours logged. Ideal for ongoing feature development, bug fixes, or ad-hoc technical support.", perks:["Pay for actual hours logged","Weekly billing & timesheets","Start & pause anytime","No minimum commitment"] },
            { title:"Dedicated Developer", featured:true, desc:"A full-time developer embedded into your team — attending standups, working your timezone, and owning deliverables just like an in-house hire.", perks:["Exclusive to your project","Full timezone alignment","Monthly fixed pricing","7-day replacement guarantee"] },
            { title:"Project-Based Team", featured:false, desc:"Assemble a complete team scoped to deliver a defined product milestone from design to deployment.", perks:["Fixed scope & deliverables","Dedicated project manager","Milestone-based billing","End-to-end ownership"] },
          ].map((m) => (
            <div key={m.title} className={`eng-card${m.featured ? " featured" : ""}`}>
              {m.featured && <span className="eng-badge">Popular</span>}
              <div className={`eng-icon${m.featured ? " inv" : ""}`}>
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="eng-perks">
                {m.perks.map(p => <div key={p} className="eng-perk">{p}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="faq">
          <div className="sec-head" style={{ marginBottom:0 }}>
            <span className="sec-label">FAQ</span>
            <h2 className="sec-title">Frequently Asked Questions</h2>
            <p className="sec-sub">Everything you need to know about working with HourlyRecruit.</p>
          </div>
          <div className="faq-list">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="faq-item">
                <button className={`faq-q${openFaq === i ? " open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {q}
                  <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {openFaq === i && <div className="faq-a">{a}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div style={{ position:"relative", zIndex:1 }}>
            <span className="sec-label" style={{ color:"#38bdf8" }}>Ready?</span>
            <h2>Start Your Project<br />in 48 Hours</h2>
            <p>Share your requirements today. We'll have matched candidates in your inbox by tomorrow.</p>
          </div>
          <div className="cta-btns" style={{ position:"relative", zIndex:1 }}>
            <button className="btn-white"        onClick={() => navigate("contact")}>Get Started</button>
            <button className="btn-outline-white" onClick={() => navigate("contact")}>Book Free Consultation</button>
          </div>
        </div>
      </section>
    </>
  );
}
