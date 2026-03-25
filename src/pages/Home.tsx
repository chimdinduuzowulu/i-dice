import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import Footer from "../components/Footer";
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

  const expectedOutcomes = [
    { number: "175,000+", label: "young Nigerians trained in digital and creative skills" },
    { number: "Hundreds", label: "of startups and creative enterprises supported" },
    { number: "6 million+", label: "jobs created, both directly and indirectly" },
    { number: "$6.4 billion", label: "in economic value unlocked" },
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
          <Row className="align-items-stretch gy-5">
            <Col lg={6} data-aos="fade-right" data-aos-duration="800">
              {/* Badge */}
              <div
                className="d-inline-flex align-items-center gap-2 mb-4"
                style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 30, padding: "6px 18px" }}
              >
                <span style={{ color: "#fdba74", fontSize: 13, fontWeight: 600 }}>Explore opportunities. Build innovative businesses. Shape Nigeria's future.</span>
              </div>

              <h1 style={{ color: "#fff", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24 }}>
                Empowering Nigeria's{" "}
                <span style={{ background: "linear-gradient(90deg, #f97316, #fcb924)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Digital
                </span>{" "}
                and{" "}
                <span style={{ background: "linear-gradient(90deg, #f97316, #fcb924)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Creative
                </span>{" "}
                Economy
              </h1>

              <p style={{ color: "#c4b5d0", fontSize: "clamp(14px, 1.8vw, 16px)", lineHeight: 1.85, marginBottom: 14, maxWidth: 540 }}>
                Investment in Digital and Creative Enterprises (iDICE) is a flagship initiative of the Federal Government of Nigeria designed to unlock the economic potential of Nigeria's fast-growing technology and creative sectors.
              </p>
              <p style={{ color: "#c4b5d0", fontSize: 15, lineHeight: 1.85, marginBottom: 14, maxWidth: 560 }}>
                Through targeted programmes, ecosystem development, skills training, and access to investment capital, iDICE is enabling Nigerian entrepreneurs, innovators, and creators to build globally competitive businesses and create sustainable jobs.
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
            <Col lg={6} data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 24,
                  padding: 24,
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 18px 60px rgba(15,5,32,0.45)",
                }}
              >
                <img
                  src={heroImage}
                  alt="iDICE - Investment in Digital and Creative Enterprises"
                  style={{
                    width: "100%",
                    maxWidth: 520,
                    display: "block",
                    margin: "0 auto",
                    filter: "drop-shadow(0 22px 60px rgba(249,115,22,0.3))",
                  }}
                />
                <div
                  style={{
                    marginTop: 20,
                    background: "rgba(15,5,32,0.45)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    borderRadius: 16,
                    padding: "16px 18px",
                  }}
                >
                  <p style={{ color: "#e6d7f2", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                    Nigeria's digital and creative industries represent one of the country's greatest opportunities for economic transformation. iDICE is designed to harness this potential and position Nigeria as a leading hub for innovation, technology, and creative enterprise in Africa.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── WHAT IS iDICE ── */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6} data-aos="fade-right">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-3">The Programme</h6>
              <h2 className="title mb-4">About the Programme</h2>
              <p className="text-muted" style={{ fontSize: 16 }}>
                The Investment in Digital and Creative Enterprises (iDICE) programme is a national initiative designed to support the growth of Nigeria’s digital technology and creative industries by strengthening entrepreneurial ecosystems, expanding access to finance, and developing the capacity of young innovators.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Launched in March 2023, the programme aims to address key challenges faced by entrepreneurs including limited access to capital, insufficient ecosystem support, and gaps in skills development.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                The programme is also designed to leverage additional private sector investment, potentially mobilizing hundreds of millions of dollars into Nigeria’s startup ecosystem.
              </p>
              <Link to="/opportunities" className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
                Explore Opportunities <i className="ri-arrow-right-line ms-1"></i>
              </Link>
            </Col>

            <Col lg={6} data-aos="fade-left">
              <div
                style={{
                  background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 55%, #2d0a6b 100%)",
                  borderRadius: 24,
                  padding: "30px",
                  color: "#fff",
                }}
              >
                <h4 className="fw-bold" style={{ color: "#fff" }}>A $618 Million Investment in Nigeria’s Future</h4>
                <p style={{ color: "#94a3b8", lineHeight: 1.8}}>
                  The iDICE programme represents one of the largest coordinated investments in Nigeria’s digital and creative sectors.
                </p>
                {[
                  { icon: "ri-check-double-line", text: "African Development Bank (AfDB)", color: "#fdba74" },
                  { icon: "ri-check-double-line", text: "Agence Française de Développement (AFD)", color: "#fdba74" },
                  { icon: "ri-check-double-line", text: "Islamic Development Bank (IsDB)", color: "#fdba74" },
                  { icon: "ri-check-double-line", text: "Bank of Industry (BOI) as the implementing agency", color: "#fdba74" },
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-start gap-3">
                    <i className={item.icon} style={{ color: item.color, fontSize: 20, flexShrink: 0}}></i>
                    <p style={{ color: "#94a3b8", margin: 0, fontSize: 15 }}>{item.text}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 10, marginTop: 5 }}>
                  <p style={{ color: "#fdba74", fontWeight: 600, fontSize: 15, margin: 0 }}>
                    AfDB is providing approximately $170 million, AFD €100 million, and IsDB $70 million, while the Bank of Industry provides counterpart financing and implementation support.{" "}
                    <a href="https://www.afdb.org" target="_blank" rel="noopener noreferrer" style={{ color: "#fdba74", fontWeight: 600, textDecoration: "underline" }}>
                      African Development Bank
                    </a>
                  </p>
                </div>
                <p className="mt-3" style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
                  The programme is also designed to leverage additional private sector investment, potentially mobilizing hundreds of millions of dollars into Nigeria's startup ecosystem.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── EXPECTED IMPACT COUNTER ── */}
      <Counter />

    

      {/* ── WHO iDICE SUPPORTS ── */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 style={{ color: "#f97316", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                Who iDICE Supports
              </h6>
              <h2 className="title">Who iDICE Supports</h2>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                iDICE is designed to support a broad ecosystem of innovators and entrepreneurs, including:
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              { icon: "ri-code-s-slash-line", title: "Technology Startups", desc: "Technology startups and digital businesses." },
              { icon: "ri-film-line", title: "Creative Sector Enterprises", desc: "Film, music, animation, gaming, fashion, design, and digital media." },
              { icon: "ri-lightbulb-line", title: "Innovation Hubs", desc: "Innovation hubs and accelerators." },
              { icon: "ri-team-line", title: "Enterprise Support Organisations", desc: "Enterprise Support Organisations (ESOs)." },
              { icon: "ri-funds-line", title: "Venture Builders & VCs", desc: "Venture builders and venture capital firms." },
              { icon: "ri-user-3-line", title: "Students & Young Entrepreneurs", desc: "Students and young entrepreneurs." },
              { icon: "ri-building-2-line", title: "Universities & Polytechnics", desc: "Universities and polytechnics participating in innovation programmes." },
            ].map((item, i) => (
              <Col md={6} lg={4} key={item.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: 24,
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(249,115,22,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "#fef3e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <i className={item.icon} style={{ fontSize: 24, color: "#f97316" }}></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: 17 }}>
                    {item.title}
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: 14, lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── EXPLORE OPPORTUNITIES ── */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 style={{ color: "#f97316", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Get Involved</h6>
              <h2 className="title">Explore Opportunities</h2>
              <p className="text-muted">
                Through a series of programmes and initiatives, iDICE provides entrepreneurs and ecosystem actors with opportunities to build skills, grow businesses, and access funding.
              </p>
              <p className="text-muted mt-2">
                Explore current opportunities including:
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {[
              { icon: "ri-rocket-2-line", color: "#f97316", bg: "#fef3e2", title: "Startup Capacity Building", desc: "Programmes for early-stage entrepreneurs moving from idea stage to investment readiness." },
              { icon: "ri-code-box-line", color: "#0891b2", bg: "#f0f9ff", title: "Innovation Challenges", desc: "Hackathons and innovation challenges to solve real-world problems." },
              { icon: "ri-palette-line", color: "#dc2626", bg: "#fff1f2", title: "Creative Industry Programmes", desc: "Creathons and support for film, animation, music, gaming, and design." },
              { icon: "ri-customer-service-2-line", color: "#6b21d6", bg: "#f5f3ff", title: "BPO Training", desc: "Business Process Outsourcing training for global freelancing opportunities." },
              { icon: "ri-building-2-line", color: "#3b82f6", bg: "#eff6ff", title: "ICE Centres", desc: "Innovation centres in 33 universities and 33 polytechnics across Nigeria." },
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
                Visit Opportunities Page <i className="ri-arrow-right-line ms-1"></i>
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