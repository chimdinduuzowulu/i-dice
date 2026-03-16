import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo-light.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
        color: "#cbd5e1",
        paddingTop: 64,
        paddingBottom: 24,
      }}
    >
      <Container>
        <Row className="gy-5 mb-5">
          {/* Brand Column */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <img src={logoLight} alt="iDICE" style={{ height: 48, width: "auto" }} />
            </div>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 14, maxWidth: 320 }}>
              Investment in Digital and Creative Enterprises — a Federal Government of Nigeria
              initiative unlocking the economic potential of Nigeria's technology and creative industries.
            </p>
            <div className="d-flex gap-3 mt-4">
              {[
                { icon: "ri-twitter-fill", href: "#" },
                { icon: "ri-linkedin-fill", href: "#" },
                { icon: "ri-facebook-fill", href: "#" },
                { icon: "ri-instagram-fill", href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    fontSize: 16,
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#f97316";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  }}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} sm={6}>
            <h6 style={{ color: "#fff", fontWeight: 700, marginBottom: 20, textTransform: "uppercase", fontSize: 12, letterSpacing: 1 }}>
              Quick Links
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", to: "/" },
                { label: "About iDICE", to: "/about" },
                { label: "Opportunities", to: "/opportunities" },
                { label: "News & Updates", to: "/news" },
                { label: "Gallery", to: "/gallery" },
                { label: "Blog", to: "/blog" },
                { label: "FAQs", to: "/faqs" },
              ].map((link, i) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  <Link
                    to={link.to}
                    style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f97316")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
                  >
                    <i className="ri-arrow-right-s-line me-1"></i>{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Programmes */}
          <Col lg={2} md={6} sm={6}>
            <h6 style={{ color: "#fff", fontWeight: 700, marginBottom: 20, textTransform: "uppercase", fontSize: 12, letterSpacing: 1 }}>
              Programmes
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Startup Bridge", "BPO Programme", "Hackathons", "Creathons", "ICE Centres", "DICE Funds"].map((item, i) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  <Link
                    to="/opportunities"
                    style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f97316")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
                  >
                    <i className="ri-arrow-right-s-line me-1"></i>{item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col lg={4} md={6}>
            <h6 style={{ color: "#fff", fontWeight: 700, marginBottom: 20, textTransform: "uppercase", fontSize: 12, letterSpacing: 1 }}>
              Get In Touch
            </h6>
            <div className="d-flex flex-column gap-3">
              {[
                { icon: "ri-mail-line", label: "General Enquiries", value: "info@idice.ng", href: "mailto:info@idice.ng" },
                { icon: "ri-newspaper-line", label: "Media Enquiries", value: "media@idice.ng", href: "mailto:media@idice.ng" },
                { icon: "ri-team-line", label: "Partnerships", value: "partnerships@idice.ng", href: "mailto:partnerships@idice.ng" },
              ].map((c, i) => (
                <div key={i} className="d-flex align-items-start gap-3">
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(249,115,22,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={c.icon} style={{ color: "#fb923c", fontSize: 16 }}></i>
                  </div>
                  <div>
                    <p style={{ color: "#64748b", fontSize: 11, margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.label}</p>
                    <a href={c.href} style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none" }}>{c.value}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner logos */}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Funded By</p>
              <div className="d-flex gap-3 align-items-center flex-wrap">
                {["AfDB", "AFD", "IsDB", "BOI"].map((p, i) => (
                  <span key={i} style={{ background: "rgba(255,255,255,0.07)", color: "#94a3b8", padding: "4px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#475569", fontSize: 13, margin: 0 }}>
            &copy; {year} iDICE — Investment in Digital and Creative Enterprises. All rights reserved.
          </p>
          <p style={{ color: "#475569", fontSize: 13, margin: 0 }}>
            Implemented by{" "}
            <a href="https://boi.ng" target="_blank" rel="noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>
              Bank of Industry (BOI)
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;