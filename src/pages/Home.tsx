import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

import Footer from "../components/Footer";
import ProgramComponents from "../components/ProgramComponents";
import Counter from "../components/Counter";
import Partnership from "../components/Partnership";
import News from "../components/News";
import Faqs from "../components/Faqs";
import BackToTop from "../components/BackToTop";
import NavBar from "../components/navbar/Navbar";
import heroImage from "../assets/images/heros/hero-hackathon.png";

const Home = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const supporters = [
    { label: "AfDB", full: "African Development Bank" },
    { label: "AFD", full: "Agence Française de Développement" },
    { label: "IsDB", full: "Islamic Development Bank" },
    { label: "BOI", full: "Bank of Industry" },
  ];

  const whoWeSupport = [
    { icon: "ri-code-s-slash-line", label: "Technology Startups" },
    { icon: "ri-film-line", label: "Creative Enterprises" },
    { icon: "ri-lightbulb-line", label: "Innovation Hubs" },
    { icon: "ri-team-line", label: "Enterprise Support Orgs" },
    { icon: "ri-funds-line", label: "Venture Builders & VCs" },
    { icon: "ri-graduation-cap-line", label: "Students & Youth" },
  ];

  return (
    <>
      <NavBar />

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 55%, #2d0a6b 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        {/* Decorative dots / network background */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(107,33,214,0.15)", pointerEvents: "none", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: -80, left: -60, width: 350, height: 350, borderRadius: "50%", background: "rgba(249,115,22,0.1)", pointerEvents: "none", zIndex: 1 }} />

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="align-items-center gy-5">
            <Col lg={6} data-aos="fade-right" data-aos-duration="800">
              {/* Badge */}
              <div
                className="d-inline-flex align-items-center gap-2 mb-4"
                style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 30, padding: "6px 18px" }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f97316", display: "inline-block" }}></span>
                <span style={{ color: "#fdba74", fontSize: 13, fontWeight: 600 }}>A Federal Government of Nigeria Initiative</span>
              </div>

              <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
                Investment in{" "}
                <span style={{ background: "linear-gradient(90deg, #f97316, #fcb924)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Digital
                </span>{" "}
                and{" "}
                <span style={{ background: "linear-gradient(90deg, #f97316, #fcb924)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Creative
                </span>{" "}
                Enterprises
              </h1>

              <p style={{ color: "#c4b5d0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.85, marginBottom: 14, maxWidth: 540 }}>
                iDICE is a flagship initiative of the Federal Government of Nigeria designed to unlock the economic potential of Nigeria's fast-growing technology and creative sectors.
              </p>
              <p style={{ color: "#9d8aaa", fontSize: 15, lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
                Explore opportunities. Build innovative businesses. Shape Nigeria's future.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="btn btn-lg fw-semibold"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff", border: "none", borderRadius: 10, padding: "13px 30px", boxShadow: "0 8px 24px rgba(249,115,22,0.4)", fontSize: 15 }}
                >
                  Learn About iDICE <i className="ri-arrow-right-line ms-1"></i>
                </Link>
                <Link
                  to="/opportunities"
                  className="btn btn-lg fw-semibold"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "13px 30px", fontSize: 15, backdropFilter: "blur(8px)" }}
                >
                  Explore Opportunities
                </Link>
              </div>

              {/* Partners strip */}
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ color: "#64748b", fontSize: 12, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Co-financed by</p>
                <div className="d-flex flex-wrap gap-3">
                  {supporters.map((s, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "7px 16px" }}>
                      <span style={{ color: "#e2d4f0", fontWeight: 700, fontSize: 13 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Right — hero image */}
            <Col lg={6} data-aos="fade-left" data-aos-duration="800" data-aos-delay="150" className="text-center">
              <img
                src={heroImage}
                alt="iDICE - Investment in Digital and Creative Enterprises"
                style={{ maxWidth: "100%", width: "90%", filter: "drop-shadow(0 20px 60px rgba(249,115,22,0.3))" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── WHAT IS IDICE ── */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 style={{ color: "#f97316", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>About the Programme</h6>
              <h2 className="title">What is iDICE?</h2>
            </Col>
          </Row>
          <Row className="align-items-center gy-5">
            <Col lg={6} data-aos="fade-right">
              <div style={{ borderRadius: 20, background: "linear-gradient(135deg, #fef3e2, #faf5ff)", padding: "40px", height: "100%", border: "1px solid #fde8c8" }}>
                <div style={{ width: 60, height: 60, borderRadius: 16, background: "linear-gradient(135deg, #f97316, #6b21d6)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <i className="ri-government-line" style={{ fontSize: 28, color: "#fff" }}></i>
                </div>
                <h3 className="fw-bold mb-3" style={{ fontSize: 22 }}>A National Initiative</h3>
                <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                  The Investment in Digital and Creative Enterprises (iDICE) programme is a national initiative designed to support the growth of Nigeria's digital technology and creative industries by strengthening entrepreneurship, innovation, and access to finance.
                </p>
                <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                  Launched in March 2023, the programme aims to address key challenges faced by entrepreneurs including limited access to capital, insufficient ecosystem support, and gaps in skills development.
                </p>
                <div style={{ background: "#fff", borderRadius: 12, padding: "16px 20px", border: "1px solid #fde8c8", display: "flex", alignItems: "center", gap: 16 }}>
                  <i className="ri-money-dollar-circle-fill" style={{ fontSize: 32, color: "#f97316" }}></i>
                  <div>
                    <h4 style={{ margin: 0, color: "#f97316", fontWeight: 800 }}>$618 Million</h4>
                    <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>Total investment in Nigeria's digital future</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} data-aos="fade-left">
              <h3 className="fw-bold mb-4">Who iDICE Supports</h3>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                iDICE is designed to support a broad ecosystem of innovators and entrepreneurs across Nigeria's digital and creative sectors.
              </p>
              <Row className="g-3">
                {whoWeSupport.map((item, i) => (
                  <Col xs={6} key={i}>
                    <div
                      style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px", display: "flex", alignItems: "center", gap: 12, transition: "all 0.2s" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                        (e.currentTarget as HTMLElement).style.background = "#fef3e2";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                        (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                      }}
                    >
                      <i className={item.icon} style={{ fontSize: 22, color: "#f97316", flexShrink: 0 }}></i>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "#334155" }}>{item.label}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="mt-4 pt-2">
                <Link to="/about" className="btn px-5 py-2 rounded-pill fw-semibold" style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff", border: "none", boxShadow: "0 4px 16px rgba(249,115,22,0.3)" }}>
                  Learn More About iDICE <i className="ri-arrow-right-line ms-1"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── PROGRAM COMPONENTS ── */}
      <ProgramComponents />

      {/* ── EXPECTED IMPACT COUNTER ── */}
      <Counter />

      {/* ── EXPLORE OPPORTUNITIES ── */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 style={{ color: "#f97316", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Get Involved</h6>
              <h2 className="title">Explore Opportunities</h2>
              <p className="text-muted">
                Through a series of programmes and initiatives, iDICE provides entrepreneurs and ecosystem actors with opportunities to build skills, grow businesses, and access funding.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              { icon: "ri-rocket-2-line", color: "#f97316", bg: "#fef3e2", title: "Startup Bridge", desc: "Capacity building programme for early-stage entrepreneurs moving from idea stage to investment readiness.", tag: "Applications Open", tagColor: "#10b981" },
              { icon: "ri-customer-service-2-line", color: "#6b21d6", bg: "#f5f3ff", title: "BPO Programme", desc: "Training for Nigerian youth in remote service delivery, digital customer support, and global freelancing.", tag: "Upcoming", tagColor: "#d97706" },
              { icon: "ri-code-box-line", color: "#0891b2", bg: "#f0f9ff", title: "Hackathons", desc: "Solve real-world problems using technology. Winners receive mentorship, incubation support, and funding.", tag: "Upcoming", tagColor: "#d97706" },
              { icon: "ri-palette-line", color: "#dc2626", bg: "#fff1f2", title: "Creathons", desc: "Innovation challenges for the creative industry — film, animation, music, gaming, design and visual arts.", tag: "Upcoming", tagColor: "#d97706" },
              { icon: "ri-building-2-line", color: "#3b82f6", bg: "#eff6ff", title: "ICE Centres", desc: "Innovation and Creativity Enterprise Centres in 33 universities and 33 polytechnics across Nigeria.", tag: "In Progress", tagColor: "#3b82f6" },
              { icon: "ri-funds-line", color: "#f97316", bg: "#fef3e2", title: "DICE Funds", desc: "Venture capital investments, equity financing, and startup funding programmes for growth-stage businesses.", tag: "Active", tagColor: "#10b981" },
            ].map((item, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div
                  style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, height: "100%", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(249,115,22,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={item.icon} style={{ fontSize: 24, color: item.color }}></i>
                    </div>
                    <span style={{ background: `${item.tagColor}18`, color: item.tagColor, fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, border: `1px solid ${item.tagColor}30` }}>
                      {item.tag}
                    </span>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: 17 }}>{item.title}</h5>
                  <p className="text-muted mb-0" style={{ fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Link to="/opportunities" className="btn px-5 py-2 rounded-pill fw-semibold" style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", color: "#fff", border: "none", boxShadow: "0 4px 16px rgba(249,115,22,0.3)" }}>
                View All Opportunities <i className="ri-arrow-right-line ms-1"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── NEWS ── */}
      <News />

      {/* ── PARTNERSHIP ── */}
      <Partnership />

      {/* ── FAQS PREVIEW ── */}
      <Faqs />

      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;