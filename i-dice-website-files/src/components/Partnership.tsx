import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Partnership = () => {
  const benefits = [
    { icon: "ri-global-line", color: "#f97316", title: "Global Reach", text: "Connect with international development partners and global tech leaders invested in African growth." },
    { icon: "ri-lightbulb-flash-line", color: "#6b21d6", title: "Innovation Pipeline", text: "Gain early access to high-potential Nigerian startups and creative talent across all sectors." },
    { icon: "ri-user-heart-line", color: "#3b82f6", title: "Ecosystem Impact", text: "Directly contribute to job creation and economic growth in Nigeria's digital and creative economy." },
  ];

  return (
    <section className="section" style={{ background: "#f8fafc" }} id="partnership">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center" data-aos="fade-up">
            <h6 style={{ color: "#f97316", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Collaboration</h6>
            <h2 className="title mb-3">Shape the Future with iDICE</h2>
            <p className="text-muted" style={{ fontSize: 16 }}>
              Join our growing community of enablers as we redefine the tech and creative landscape in Nigeria through expertise, innovation, and strategic investment.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center gy-5">
          <Col lg={6} data-aos="fade-right">
            <div className="pe-lg-4">
              <h3 className="fw-bold mb-4">Why Partner with Us?</h3>
              <p className="text-muted mb-5" style={{ lineHeight: 1.8 }}>
                iDICE is more than just a programme; it's a movement to position Nigeria as Africa's leading innovation hub. We seek partners who share our vision for a digitally empowered Nigeria.
              </p>
              <div className="d-flex flex-column gap-4">
                {benefits.map((item, idx) => (
                  <div className="d-flex align-items-start gap-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={item.icon} style={{ fontSize: 22, color: item.color }}></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1" style={{ fontSize: 16, color: "#1a0a3c" }}>{item.title}</h5>
                      <p className="text-muted mb-0" style={{ fontSize: 14, lineHeight: 1.7 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6} data-aos="fade-left">
            <div style={{ background: "linear-gradient(135deg, #0f0520, #1a0a3c)", borderRadius: 24, padding: "44px 40px", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #f97316, #ea580c)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <i className="ri-mail-send-line" style={{ fontSize: 30, color: "#fff" }}></i>
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#fff" }}>Ready to Start?</h4>
              <p style={{ color: "#9d8aaa", marginBottom: 28, lineHeight: 1.7, fontSize: 15 }}>
                Whether you're a corporate organisation, development agency, or venture builder — we would love to hear from you.
              </p>
              <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: "16px 20px", marginBottom: 28 }}>
                <p style={{ color: "#64748b", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 700, marginBottom: 4 }}>Email us at</p>
                <a href="mailto:partnerships@idice.ng" style={{ color: "#fdba74", fontSize: 17, fontWeight: 700, textDecoration: "none" }}>
                  partnerships@idice.ng
                </a>
              </div>
              <Link
                to="/contact"
                style={{ display: "block", background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", borderRadius: 12, padding: "14px 20px", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 24px rgba(249,115,22,0.4)" }}
              >
                Get Partnership Prospectus <i className="ri-arrow-right-line ms-1"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partnership;