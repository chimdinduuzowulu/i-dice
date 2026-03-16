import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/NavBar";
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
    {
      tag: "Upcoming",
      tagColor: "#d97706",
      tagBg: "#fffbeb",
      icon: "ri-customer-service-2-line",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
      title: "Business Process Outsourcing (BPO) Programme",
      date: "Coming Soon",
      desc: "The BPO programme is designed to prepare Nigerian youth for employment opportunities in the global digital services economy. The programme aims to position Nigeria as a leading destination for global digital services and outsourcing talent.",
      provides: [
        "Remote service delivery training",
        "Digital customer support",
        "Business process outsourcing operations",
        "Global freelancing opportunities",
      ],
      cta: "Learn More",
      ctaLink: "/contact",
      external: false,
    },
    {
      tag: "Upcoming",
      tagColor: "#d97706",
      tagBg: "#fffbeb",
      icon: "ri-code-box-line",
      iconColor: "#6b21d6",
      iconBg: "#f0fdf4",
      title: "iDICE Hackathons",
      date: "Dates to be Announced",
      desc: "Hackathons under the iDICE programme bring together developers, designers, entrepreneurs, and innovators to solve real-world problems using technology. Winning teams may receive mentorship, incubation support, and opportunities to scale their solutions.",
      provides: [
        "Digital services & AI challenges",
        "Fintech innovation tracks",
        "Public sector innovation",
        "Mentorship and incubation for winners",
      ],
      cta: "Stay Updated",
      ctaLink: "/contact",
      external: false,
    },
    {
      tag: "Upcoming",
      tagColor: "#d97706",
      tagBg: "#fffbeb",
      icon: "ri-palette-line",
      iconColor: "#dc2626",
      iconBg: "#fff1f2",
      title: "iDICE Creathons",
      date: "Dates to be Announced",
      desc: "Creathons are innovation challenges designed specifically for the creative industry. These programmes provide a platform for collaboration, innovation, and creative entrepreneurship, bringing together Nigeria's most talented creatives.",
      provides: [
        "Film and storytelling challenges",
        "Animation and gaming tracks",
        "Music and digital media",
        "Design and visual arts",
      ],
      cta: "Stay Updated",
      ctaLink: "/contact",
      external: false,
    },
    {
      tag: "In Progress",
      tagColor: "#f97316",
      tagBg: "#fef3e2",
      icon: "ri-building-2-line",
      iconColor: "#0891b2",
      iconBg: "#f0f9ff",
      title: "Innovation and Creativity Centres (ICE Centres)",
      date: "Nationwide Rollout Underway",
      desc: "iDICE is establishing Innovation and Creativity Enterprise (ICE) Centres across Nigeria in 33 universities and 33 polytechnics. These centres serve as hubs for student innovation, startup incubation, digital skills training, and collaboration between academia and industry.",
      provides: [
        "Located in 33 universities",
        "Located in 33 polytechnics",
        "Startup incubation support",
        "Digital skills training facilities",
      ],
      cta: "Learn More",
      ctaLink: "/about",
      external: false,
    },
    {
      tag: "Active",
      tagColor: "#6b21d6",
      tagBg: "#f0fdf4",
      icon: "ri-funds-line",
      iconColor: "#b45309",
      iconBg: "#fffbeb",
      title: "DICE Funds",
      date: "Ongoing Investment Programme",
      desc: "The DICE Funds provide financial support to high-growth technology startups and investment funds operating within Nigeria's innovation ecosystem. The programme also supports the creation of venture capital funds and investment vehicles to strengthen Nigeria's startup financing ecosystem.",
      provides: [
        "Venture capital investments",
        "Equity and quasi-equity financing",
        "Startup funding programmes",
        "Enterprise development support",
      ],
      cta: "Learn More",
      ctaLink: "/contact",
      external: false,
    },
  ];

  const howToApply = [
    { step: "01", icon: "ri-search-eye-line", title: "Review Eligibility", desc: "Check the eligibility requirements for the specific programme you are interested in applying for." },
    { step: "02", icon: "ri-edit-2-line", title: "Complete Application", desc: "Fill in the online application form with accurate information about yourself and your venture." },
    { step: "03", icon: "ri-file-upload-line", title: "Submit Documents", desc: "Upload all required supporting documentation as specified in the application guidelines." },
    { step: "04", icon: "ri-mail-check-line", title: "Await Confirmation", desc: "After submission, await confirmation and next steps from the iDICE programme team." },
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
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb justify-content-center" style={{ background: "transparent" }}>
                  <li className="breadcrumb-item"><Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</Link></li>
                  <li className="breadcrumb-item active" style={{ color: "#fdba74" }}>Opportunities</li>
                </ol>
              </nav>
              <h1 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 20 }}>
                Opportunities Under{" "}
                <span style={{ background: "linear-gradient(90deg, #fdba74, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  the iDICE Programme
                </span>
              </h1>
              <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.8, maxWidth: 620, margin: "0 auto 32px" }}>
                iDICE delivers a range of initiatives designed to support entrepreneurs, innovators, and ecosystem actors across Nigeria's digital and creative sectors.
              </p>
              <div
                style={{
                  background: "rgba(14,159,110,0.15)",
                  border: "1px solid rgba(14,159,110,0.3)",
                  borderRadius: 12,
                  padding: "16px 24px",
                  display: "inline-block",
                }}
              >
                <p style={{ color: "#fb923c", margin: 0, fontWeight: 600 }}>
                  <i className="ri-information-line me-2"></i>
                  Applications for programmes are announced periodically and will be published on this page.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Opportunities List */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Apply Now</h6>
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
                        <p className="text-muted mb-0" style={{ lineHeight: 1.8, fontSize: 15 }}>{opp.desc}</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div style={{ background: "#f8fafc", borderRadius: 12, padding: 20 }}>
                      <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", color: "#64748b", letterSpacing: 0.5, marginBottom: 12 }}>Programme Provides:</p>
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
                            style={{ fontSize: 14 }}
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

      {/* How to Apply */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Application Process</h6>
              <h2 className="title">How to Apply</h2>
              <p className="text-muted">
                Applications for each initiative are conducted through designated application portals. All official calls for applications will be published on this page.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {howToApply.map((step, i) => (
              <Col lg={3} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    background: "#f8fafc",
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
                    (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <span style={{ position: "absolute", top: 16, right: 20, fontSize: 36, fontWeight: 900, color: "#f9731615" }}>{step.step}</span>
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