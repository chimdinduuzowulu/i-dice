import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Opportunities = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const opportunities = [
    {
      tag: "Applications Open",
      tagColor: "#6b21d6",
      tagBg: "#f0fdf4",
      icon: "ri-rocket-2-line",
      iconColor: "#f97316",
      iconBg: "#fef3e2",
      title: "iDICE Startup Bridge – Capacity Building Programme",
      date: "Applications Open: March 16",
      desc: "The Startup Bridge Capacity Building Programme is designed to support early-stage entrepreneurs and innovators in Nigeria's digital economy. Startup Bridge helps founders move from idea stage to investment readiness, equipping them with the tools and networks needed to build scalable businesses.",
      provides: [
        "Structured entrepreneurial training",
        "Mentorship and ecosystem support",
        "Access to startup development resources",
        "Pathways to investment opportunities",
      ],
      cta: "Apply Now",
      ctaLink: "https://startupbridge.ng/",
      external: true,
    },
  ];

  const upcomingInitiatives = [
    {
      icon: "ri-customer-service-2-line",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
      title: "Business Process Outsourcing (BPO) Programme",
      desc: "The BPO programme is designed to prepare Nigerian youth for employment opportunities in the global digital services economy.",
      sectionHeader: "Participants will receive training in areas such as:",
      provides: [
        "Remote service delivery",
        "Digital customer support",
        "Business process outsourcing operations",
        "Global freelancing opportunities"
      ],
      extra: "The programme aims to position Nigeria as a leading destination for global digital services and outsourcing talent.",
    },
    {
      icon: "ri-code-box-line",
      iconColor: "#6b21d6",
      iconBg: "#f0fdf4",
      title: "iDICE Hackathons",
      desc: "Hackathons under the iDICE programme bring together developers, designers, entrepreneurs, and innovators to solve real-world problems using technology. Participants collaborate to develop innovative solutions.",
      sectionHeader: "Participants collaborate to develop innovative solutions in areas such as:",
      provides: [
        "Digital services",
        "Artificial intelligence",
        "Fintech",
        "Public sector innovation"
      ],
      extra: "Winning teams may receive mentorship, incubation support, and opportunities to scale their solutions.",
    },
    {
      icon: "ri-palette-line",
      iconColor: "#6b21d6",
      iconBg: "#f0fdf4",
      title: "iDICE Creathons",
      desc: "Creathons are innovation challenges designed specifically for the creative industry. These programmes bring together creatives and provide a platform for collaboration, innovation, and creative entrepreneurship.",
      sectionHeader: "These programmes bring together creatives across fields such as:",
      provides: [
        "Film and storytelling",
        "Animation and gaming",
        "Music and digital media",
        "Design and visual arts"
      ],
      extra: "Creathons provide a platform for collaboration, innovation, and creative entrepreneurship.",
    },
    {
      icon: "ri-building-2-line",
      iconColor: "#0891b2",
      iconBg: "#f0f9ff",
      title: "Innovation and Creativity Centres (ICE Centres)",
      desc: "iDICE is establishing Innovation and Creativity Enterprise (ICE) Centres across Nigeria. These centres will play a critical role in strengthening Nigeria's innovation pipeline and supporting the next generation of entrepreneurs.",
      sectionHeader: "These centres will be located in:",
      provides: [
        "33 Universities",
        "33 Polytechnics"
      ],
      secondSectionHeader: "The centres will serve as hubs for:",
      secondProvides: [
        "Student innovation",
        "Startup incubation",
        "Digital skills training",
        "Collaboration between academia and industry"
      ],
      extra: "ICE Centres will play a critical role in strengthening Nigeria's innovation pipeline and supporting the next generation of entrepreneurs.",
    },
  ];

  const howToApply = [
    { step: "01", icon: "ri-search-eye-line", title: "Review Eligibility", desc: "Review eligibility requirements for the programme" },
    { step: "02", icon: "ri-edit-2-line", title: "Complete Application", desc: "Complete the online application form" },
    { step: "03", icon: "ri-file-upload-line", title: "Submit Documents", desc: "Submit all required documentation" },
    { step: "04", icon: "ri-mail-check-line", title: "Await Confirmation", desc: "Await confirmation and next steps" },
  ];

  return (
    <>
      <NavBar />

      {/* Hero */}
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
                Opportunities Under{" "}
                <span style={{ background: "linear-gradient(90deg, #fdba74, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  the iDICE Programme
                </span>
              </h1>
              <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.8, maxWidth: 620, margin: "0 auto 24px" }}>
                The iDICE programme delivers a range of initiatives designed to support entrepreneurs, innovators, and ecosystem actors across Nigeria's digital and creative sectors.
              </p>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: "24px 32px",
                  maxWidth: 800,
                  margin: "0 auto",
                }}
              >
                <p style={{ color: "#fff", marginBottom: 12, fontWeight: 600, fontSize: 14 }}>
                  These initiatives provide opportunities for:
                </p>
                <div className="d-flex flex-wrap gap-2 justify-content-center" style={{ marginTop: 8 }}>
                  {["Skills development", "Entrepreneurship training", "Business development support", "Ecosystem participation", "Investment readiness"].map((item, idx) => (
                    <span key={idx} style={{ background: "rgba(249,115,22,0.2)", color: "#fdba74", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500 }}>
                      {item}
                    </span>
                  ))}
                </div>
                <p style={{ color: "#fb923c", marginTop: 16, fontSize: 13, marginBottom: 0 }}>
                  Applications for programmes are announced periodically and will be published on this page.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Current Opportunities */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h2 className="title">Current Opportunities</h2>
            </Col>
          </Row>

          <div className="d-flex flex-column gap-4">
            {opportunities.map((opp, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  border: "1px solid #e2e8f0",
                  padding: "36px 40px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = opp.iconColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                }}
              >
                <Row className="align-items-start gy-4">
                  <Col lg={8}>
                    <div className="d-flex align-items-start gap-4">
                      <div style={{ width: 60, height: 60, borderRadius: 16, background: opp.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={opp.icon} style={{ fontSize: 28, color: opp.iconColor }}></i>
                      </div>
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <span style={{ background: opp.tagBg, color: opp.tagColor, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: `1px solid ${opp.tagColor}30` }}>
                            {opp.tag}
                          </span>
                          <span style={{ color: "#94a3b8", fontSize: 13 }}>
                            <i className="ri-calendar-line me-1"></i>{opp.date}
                          </span>
                        </div>
                        <h3 className="fw-bold mb-3" style={{ fontSize: 20 }}>{opp.title}</h3>
                        <p className="text-muted mb-3" style={{ lineHeight: 1.8, fontSize: 15 }}>{opp.desc}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ background: "#f8fafc", borderRadius: 12, padding: 20 }}>
                      <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#64748b", letterSpacing: 0.5, marginBottom: 12 }}>The programme provides:</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {opp.provides.map((p, j) => (
                          <li key={j} className="d-flex align-items-center gap-2 mb-2">
                            <i className="ri-check-line" style={{ color: opp.iconColor, fontSize: 14, flexShrink: 0 }}></i>
                            <span style={{ fontSize: 13, color: "#475569" }}>{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        {opp.external ? (
                          <a
                            href={opp.ctaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary w-100 py-2 rounded-pill fw-semibold"
                            style={{ fontSize: 14, background: "linear-gradient(135deg, #f97316, #ea580c)", border: "none" }}
                          >
                            {opp.cta} <i className="ri-external-link-line ms-1"></i>
                          </a>
                        ) : (
                          <Link
                            to={opp.ctaLink}
                            className="btn btn-outline-primary w-100 py-2 rounded-pill fw-semibold"
                            style={{ fontSize: 14 }}
                          >
                            {opp.cta} <i className="ri-arrow-right-line ms-1"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Upcoming and Ongoing Initiatives */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h2 className="title">Upcoming and Ongoing Initiatives</h2>
              <p className="text-muted">
                Explore the various programmes being rolled out under the iDICE initiative.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {upcomingInitiatives.map((initiative, i) => (
              <Col lg={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: 20,
                    padding: "32px",
                    height: "100%",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = initiative.iconColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: initiative.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={initiative.icon} style={{ fontSize: 24, color: initiative.iconColor }}></i>
                    </div>
                    <h3 className="fw-bold mb-0" style={{ fontSize: 18, lineHeight: 1.4 }}>{initiative.title}</h3>
                  </div>
                  <p className="text-muted mb-3" style={{ fontSize: 14, lineHeight: 1.7 }}>{initiative.desc}</p>
                  
                  {/* First section header and items */}
                  {initiative.sectionHeader && (
                    <p style={{ fontSize: 12, fontWeight: 700, color: initiative.iconColor, marginBottom: 8 }}>
                      {initiative.sectionHeader}
                    </p>
                  )}
                  {initiative.provides && (
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {initiative.provides.map((item, idx) => (
                        <span key={idx} style={{ background: initiative.iconBg, color: initiative.iconColor, padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Second section header and items (for ICE Centres) */}
                  {initiative.secondSectionHeader && (
                    <p style={{ fontSize: 12, fontWeight: 700, color: initiative.iconColor, marginBottom: 8, marginTop: 12 }}>
                      {initiative.secondSectionHeader}
                    </p>
                  )}
                  {initiative.secondProvides && (
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {initiative.secondProvides.map((item, idx) => (
                        <span key={idx} style={{ background: initiative.iconBg, color: initiative.iconColor, padding: "4px 12px", borderRadius: 20, fontSize: 12 }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {initiative.extra && (
                    <p className="text-muted mt-2" style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>
                      {initiative.extra}
                    </p>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How to Apply */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Application Process</h6>
              <h2 className="title">How to Apply</h2>
              <p className="text-muted">
                Applications for each initiative are conducted through designated application portals. All official calls for applications will be published on this page and through iDICE communication channels.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {howToApply.map((step, i) => (
              <Col lg={3} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: 32,
                    textAlign: "center",
                    height: "100%",
                    border: "1px solid #e2e8f0",
                    position: "relative",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#fef3e2";
                    (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <span style={{ position: "absolute", top: 16, right: 20, fontSize: 38, fontWeight: 900, color: "#f97316", opacity: 0.35 }}>{step.step}</span>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#fef3e2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <i className={step.icon} style={{ fontSize: 26, color: "#f97316" }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-muted mb-0" style={{ fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Opportunities;