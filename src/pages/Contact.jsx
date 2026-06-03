import { useState } from "react";

export default function Contact({ navigate, siteData }) {
  const ct = siteData?.contact ?? {};
  const heading  = ct.heading  || "Have a Project in Mind?";
  const subtext  = ct.subtext  || "Let's discuss how we can help you build your product.";
  const phone    = ct.phone    || "+91 888 444 6677";
  const email    = ct.email    || "hr@hourlyrecruit.com";
  const location = ct.location || "Bangalore, India";
  const website  = ct.website  || "www.hourlyrecruit.com";

  const [form, setForm]       = useState({ name:"", email:"", phone:"", company:"", role:"", budget:"", message:"" });
  const [submitted, setSub]   = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSub(true); };

  const infoCards = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:"Location", val: location },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:"Email", val: email },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label:"Phone", val: phone },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label:"Website", val: website },
  ];

  return (
    <>
      <section className="contact-hero">
        <div style={{ position:"relative", zIndex:1 }}>
          <span className="sec-label sec-label-light">Get In Touch</span>
          <h1>{heading}</h1>
          <p>{subtext}</p>
        </div>
      </section>

      {/* Info cards */}
      <section style={{ padding:"60px 5%", background:"white" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
          {infoCards.map(({ icon, label, val }) => (
            <div key={label} style={{ background:"var(--off)", borderRadius:"var(--radius-lg)", padding:"24px 20px", display:"flex", alignItems:"center", gap:14, border:"1px solid var(--gray-100)" }}>
              <div style={{ width:44, height:44, borderRadius:12, background:"var(--blue-glow)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:".06em", color:"var(--gray-400)", marginBottom:3 }}>{label}</div>
                <div style={{ fontSize:14, fontWeight:600, color:"var(--navy)" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="contact" style={{ paddingTop:0 }}>
        <div className="contact-grid" style={{ marginTop:0 }}>
          <div>
            <span className="sec-label">Let's Build Together</span>
            <h2 className="sec-title">Ready to Start<br />Your Next Project?</h2>
            <p className="sec-sub" style={{ marginBottom:36 }}>
              Hire expert developers on hourly basis and accelerate your product development. We respond within 2 hours on business days.
            </p>
            <div className="contact-items">
              {[
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title:"Fast Response", desc:"We respond within 2 hours on business days" },
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>, title:"Dedicated Account Manager", desc:"A personal point of contact throughout your engagement" },
                { svg:<svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:"48-Hour Matching", desc:"Get matched with vetted developers within 48 hours" },
              ].map(({ svg, title, desc }) => (
                <div key={title} className="contact-item">
                  <div className="contact-item-icon">{svg}</div>
                  <div><h4>{title}</h4><p>{desc}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:40, background:"var(--off)", borderRadius:"var(--radius-lg)", padding:"28px", border:"1px solid var(--gray-100)" }}>
              <h4 style={{ fontFamily:"var(--font-head)", fontSize:15, fontWeight:700, color:"var(--navy)", marginBottom:16 }}>What happens after you submit?</h4>
              {["We review your requirements within 2 hours","A team member schedules a quick 30-min call","We share 3–5 matched developer profiles","You interview and choose — hire in 48 hours"].map((s,i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12, marginBottom:12 }}>
                  <div style={{ width:22, height:22, borderRadius:"50%", background:"var(--blue)", color:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, flexShrink:0, marginTop:1 }}>{i+1}</div>
                  <p style={{ fontSize:13, color:"var(--gray-600)", lineHeight:1.6 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div style={{ textAlign:"center", padding:"40px 20px" }}>
                <div style={{ fontSize:56, marginBottom:20 }}>🎉</div>
                <h3 style={{ fontFamily:"var(--font-head)", fontSize:22, fontWeight:800, color:"var(--navy)", marginBottom:12 }}>Message Sent!</h3>
                <p style={{ color:"var(--gray-600)", marginBottom:28, lineHeight:1.7 }}>Thank you! We'll get back to you within 2 hours on business days.</p>
                <button className="btn-primary" style={{ width:"100%", justifyContent:"center" }} onClick={() => navigate("how")}>How It Works</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontFamily:"var(--font-head)", fontSize:20, fontWeight:800, color:"var(--navy)", marginBottom:24 }}>Send Us a Message</h3>
                <div className="form-row">
                  <div className="form-group"><input type="text" name="name" placeholder="Your Name *" value={form.name} onChange={handle} required /></div>
                  <div className="form-group"><input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handle} required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handle} /></div>
                  <div className="form-group"><input type="text" name="company" placeholder="Company / Startup" value={form.company} onChange={handle} /></div>
                </div>
                <div className="form-group">
                  <select name="role" value={form.role} onChange={handle} style={{ background:"white", border:"1.5px solid var(--gray-100)", borderRadius:9, padding:"12px 16px", width:"100%", fontFamily:"var(--font-body)", fontSize:14, color:form.role?"var(--navy)":"var(--gray-200)", outline:"none" }}>
                    <option value="">I'm looking for... *</option>
                    {["Frontend Developer","Backend Developer","Full Stack Developer","Mobile Developer","DevOps Engineer","UI/UX Designer","QA Engineer","Complete Project Team"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <select name="budget" value={form.budget} onChange={handle} style={{ background:"white", border:"1.5px solid var(--gray-100)", borderRadius:9, padding:"12px 16px", width:"100%", fontFamily:"var(--font-body)", fontSize:14, color:form.budget?"var(--navy)":"var(--gray-200)", outline:"none" }}>
                    <option value="">Monthly Budget Range</option>
                    {["Under $1,000","$1,000 – $3,000","$3,000 – $6,000","$6,000 – $12,000","$12,000+"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Tell us about your project..." value={form.message} onChange={handle} rows={4} />
                </div>
                <button type="submit" className="btn-submit">Send Message →</button>
                <p style={{ fontSize:12, color:"var(--gray-400)", marginTop:12, textAlign:"center" }}>We'll respond within 2 business hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
