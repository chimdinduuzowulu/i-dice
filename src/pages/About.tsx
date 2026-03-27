import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const About = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const components = [
    {
      number: "01",
      icon: "ri-tools-line",
      color: "#f97316",
      bg: "#fef3e2",
      title: "Enterprise and Skills Development",
      desc: "This component focuses on building the capacity of entrepreneurs and innovators through:",
      items: [
        "Training programmes",
        "Incubation and acceleration initiatives",
        "Mentorship and ecosystem support",
        "Entrepreneurship development programmes"
      ],
      extra: "It supports collaboration between startups, universities, and industry to strengthen Nigeria's innovation pipeline.",
    },
    {
      number: "02",
      icon: "ri-funds-box-line",
      color: "#6b21d6",
      bg: "#f0fdf4",
      title: "Expanding Access to Finance",
      desc: "Access to capital remains one of the biggest barriers to startup growth. Through the DICE Funds, the programme provides financial support through:",
      items: [
        "Venture capital investments",
        "Equity and quasi-equity financing",
        "Startup funding programmes",
        "Grants and enterprise development support"
      ],
      extra: "The programme supports the creation of venture capital funds and investment vehicles to strengthen Nigeria's startup financing ecosystem. ",
      extraLink: {
        text: "Visit African Development Bank for more details",
        url: "https://www.afdb.org/"
      },
    },
    {
      number: "03",
      icon: "ri-shield-check-line",
      color: "#7c3aed",
      bg: "#f5f3ff",
      title: "Enabling Environment and Ecosystem Support",
      desc: "This component focuses on strengthening the broader innovation ecosystem through:",
      items: [
        "Partnerships with universities and research institutions",
        "Support for innovation hubs and accelerators",
        "Investment promotion for digital and creative industries",
        "Collaboration with government agencies and regulators"
      ],
      extra: "The programme contributes to the implementation of Nigeria's Startup Act and innovation policy framework.",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Page Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
          paddingTop: 130,
          paddingBottom: 80,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(249,115,22,0.1)", pointerEvents: "none" }} />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h1 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 20 }}>
                About the <span style={{ background: "linear-gradient(90deg, #fdba74, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>iDICE Programme</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Overview */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="align-items-stretch gy-5">
            <Col lg={6} data-aos="fade-right">
              <h2 className="title mb-4">About the Programme</h2>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8, fontSize: 16 }}>
                The Investment in Digital and Creative Enterprises (iDICE) programme is a national initiative of the Federal Government of Nigeria aimed at strengthening the country's technology and creative ecosystems.
              </p>
              <p className="text-muted mb-3" style={{ lineHeight: 1.8 }}>
                The programme supports entrepreneurs, innovators, and creators by providing:
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4" style={{ marginTop: 8 }}>
                {["Skills development and capacity building", "Access to financing and investment opportunities", "Ecosystem development support", "Partnerships with universities, innovation hubs, and private sector actors"].map((item, idx) => (
                  <span key={idx} style={{ background: "#fef3e2", color: "#f97316", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 500 }}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
                The goal is to create a thriving environment where innovative Nigerian businesses can grow, scale globally, and create sustainable employment.
              </p>
            </Col>

            <Col lg={6} data-aos="fade-left">
              <div
                style={{
                  background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 55%, #2d0a6b 100%)",
                  borderRadius: 24,
                  padding: "40px",
                  color: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h4 className="fw-bold mb-4" style={{ color: "#fff" }}>Why iDICE Matters</h4>
                <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 24 }}>
                  Nigeria is home to one of the largest youth populations in the world and a rapidly growing digital economy. At the same time, entrepreneurs in the technology and creative sectors often face barriers including:
                </p>
                <div style={{ marginBottom: 24 }}>
                  {[
                    { text: "Limited access to early-stage capital" },
                    { text: "Insufficient ecosystem infrastructure" },
                    { text: "Gaps in entrepreneurial skills and business development support" },
                  ].map((item, i) => (
                    <div key={i} className="d-flex align-items-start gap-3 mb-3">
                      <p style={{ color: "#94a3b8", margin: 0, fontSize: 15, lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, marginTop: "auto" }}>
                  <p style={{ color: "#fdba74", fontWeight: 600, fontSize: 15, margin: 0 }}>
                    {/* <i className="ri-check-double-line me-2"></i> */}
                    iDICE was designed to address these constraints and unlock the full potential of Nigeria's digital and creative economy.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Programme Components */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">How We Work</h6>
              <h2 className="title">Programme Components</h2>
              <p className="text-muted">
                The iDICE programme operates through three major intervention areas designed to create a complete ecosystem for digital and creative entrepreneurship.
              </p>
            </Col>
          </Row>
          <Row className="g-5">
            {components.map((comp, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 20,
                    padding: 32,
                    position: "relative",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = comp.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <span style={{ position: "absolute", top: 24, right: 24, fontSize: 42, fontWeight: 900, color: `${comp.color}30`, opacity: 0.7 }}>{comp.number}</span>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: comp.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <i className={comp.icon} style={{ fontSize: 26, color: comp.color }}></i>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ fontSize: 18 }}>{comp.title}</h4>
                  <p className="text-muted mb-3" style={{ fontSize: 14, lineHeight: 1.8 }}>{comp.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {comp.items.map((item, j) => (
                      <li key={j} className="d-flex align-items-center gap-2 mb-2">
                        <i className="ri-check-line" style={{ color: comp.color, fontSize: 16 }}></i>
                        <span style={{ fontSize: 13, color: "#475569" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {comp.extra && (
                    <p className="text-muted mt-3" style={{ fontSize: 13, lineHeight: 1.7 }}>
                      {comp.extra}
                      {comp.extraLink && (
                        <a 
                          href={comp.extraLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: comp.color, fontWeight: 600, textDecoration: "underline", textDecorationThickness: "1px" }}
                          onMouseEnter={(e) => (e.currentTarget.style.textDecorationThickness = "2px")}
                          onMouseLeave={(e) => (e.currentTarget.style.textDecorationThickness = "1px")}
                        >
                          {comp.extraLink.text}
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Implementation */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6} data-aos="fade-right">
              <h2 className="title mb-4">Implementation Structure</h2>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                The Bank of Industry (BOI) serves as the implementing agency responsible for programme execution, coordination, and oversight.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8, fontSize: 15 }}>
                A multi-stakeholder governance structure ensures transparency, accountability, and effective programme delivery.
              </p>
            </Col>
            <Col lg={5} className="offset-lg-1" data-aos="fade-left">
              {[
                { icon: "ri-shield-check-line", title: "Transparency", desc: "Regular reporting and public accountability mechanisms" },
                { icon: "ri-team-line", title: "Multi-stakeholder Governance", desc: "Inclusive oversight involving government, development partners, and private sector" },
                { icon: "ri-line-chart-line", title: "Results-Based Management", desc: "Clear milestones and measurable outcomes tracked throughout implementation" },
              ].map((item, i) => (
                <div key={i} className="d-flex gap-4 mb-4" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fef3e2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={item.icon} style={{ fontSize: 22, color: "#f97316" }}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: 16 }}>{item.title}</h5>
                    <p className="text-muted mb-0" style={{ fontSize: 14 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default About;