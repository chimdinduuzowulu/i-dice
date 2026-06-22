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
//

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

  return (
    <>
      <NavBar />

     {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f0520 0%, #1a0a3c 55%, #2d0a6b 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        {/* Decorative dots / network background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(107,33,214,0.15)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.1)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="align-items-center gy-5">
            <Col lg={7} xl={7} data-aos="fade-right" data-aos-duration="800">
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: 28,
                }}
              >
                Empowering Nigeria's{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #f97316, #fcb924)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Digital
                </span>{" "}
                and{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #f97316, #fcb924)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Creative
                </span>{" "}
                Economy
              </h1>

              <div style={{ maxWidth: 700 }}>
                <p
                  style={{
                    color: "#c4b5d0",
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    lineHeight: 1.9,
                    marginBottom: 20,
                  }}
                >
                  Investment in Digital and Creative Enterprises (iDICE) is a
                  flagship initiative of the Federal Government of Nigeria
                  designed to unlock the economic potential of Nigeria's
                  fast-growing technology and creative sectors.
                </p>

                <p
                  style={{
                    color: "#c4b5d0",
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    lineHeight: 1.9,
                    marginBottom: 20,
                  }}
                >
                  Through targeted programmes, ecosystem development, skills
                  training, and access to investment capital, iDICE is enabling
                  Nigerian entrepreneurs, innovators, and creators to build
                  globally competitive businesses and create sustainable jobs.
                </p>

                <p
                  style={{
                    color: "#c4b5d0",
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    lineHeight: 1.9,
                    marginBottom: 28,
                  }}
                >
                  Nigeria's digital and creative industries represent one of the
                  country's greatest opportunities for economic transformation.
                  iDICE is designed to harness this potential and position
                  Nigeria as a leading hub for innovation, technology, and
                  creative enterprise in Africa.
                </p>
              </div>
              {/* Badge */}
              <div
                className="d-inline-flex align-items-center gap-2 mb-4"
                style={{
                  background: "rgba(249,115,22,0.15)",
                  border: "1px solid rgba(249,115,22,0.35)",
                  borderRadius: 30,
                  padding: "6px 18px",
                }}
              >
                <span
                  style={{ color: "#fdba74", fontSize: 13, fontWeight: 600 }}
                >
                  Explore opportunities. Build innovative businesses. Shape
                  Nigeria's future.
                </span>
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="btn btn-lg fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "13px 32px",
                    boxShadow: "0 8px 24px rgba(249,115,22,0.4)",
                    fontSize: 15,
                  }}
                >
                  Learn About iDICE <i className="ri-arrow-right-line ms-1"></i>
                </Link>
                <Link
                  to="/opportunities"
                  className="btn btn-lg fw-semibold"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 10,
                    padding: "13px 32px",
                    fontSize: 15,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Explore Opportunities
                </Link>
              </div>

              {/* Partners strip */}
              <div
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 14,
                  }}
                >
                  Co-financed by
                </p>
                <div className="d-flex flex-wrap gap-3">
                  {supporters.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8,
                        padding: "7px 16px",
                      }}
                    >
                      <span
                        style={{
                          color: "#e2d4f0",
                          fontWeight: 700,
                          fontSize: 13,
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Right — hero image with fade effect - ENLARGED */}
            <Col
              lg={5}
              xl={5}
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img
                  src={heroImage}
                  alt="iDICE - Investment in Digital and Creative Enterprises"
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    minHeight: "380px",
                    objectFit: "cover",
                    display: "block",
                    margin: "0 auto",
                    filter: "drop-shadow(0 22px 60px rgba(249,115,22,0.3))",
                    opacity: 0.85,
                    transition: "opacity 0.5s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                    (e.currentTarget as HTMLElement).style.opacity = "0.95";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                  }}
                />
                {/* Optional gradient overlay for smoother fade */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(15,5,32,0.2) 0%, rgba(45,10,107,0.3) 100%)",
                    borderRadius: 24,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── WHAT IS iDICE (UPDATED) ── */}
      <section className="section px-4" style={{ background: "#fff" }}>
        <Container>
          <Row className="align-items-center gy-5">
            {/* Left column: Main text content (white background) */}
            <Col lg={6} data-aos="fade-right">
              <h2 className="title mb-4">What is iDICE ?</h2>
              <p
                className="text-muted"
                style={{ fontSize: 16, lineHeight: 1.8 }}
              >
                iDICE is the Investment in Digital and Creative Enterprises
                (iDICE) programme. It represents one of the most ambitious
                investments ever made in Nigeria's digital and creative sectors.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                With a total programme value of approximately{" "}
                <strong style={{ color: "#f97316", fontWeight: 700 }}>
                  $618 million
                </strong>
                , iDICE is mobilizing significant resources to unlock the
                potential of Nigerian entrepreneurs, innovators, creators, and
                startups. The programme is designed to address one of the
                biggest challenges facing high-growth enterprises—access to the
                capital, skills, infrastructure, and ecosystem support needed to
                scale.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                At its core, iDICE is a strategic partnership between the{" "}
                <strong style={{ color: "#f97316", fontWeight: 700 }}>
                  Federal Government of Nigeria
                </strong>{" "}
                and leading international development finance institutions
                committed to fostering innovation, enterprise development, and
                job creation.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                <strong style={{ color: "#f97316", fontWeight: 700 }}>
                  Catalysing Greater Investment
                </strong>
                <br />
                Beyond direct programme funding, iDICE is designed to crowd in
                additional private-sector investment into Nigeria's innovation
                ecosystem. By strengthening the pipeline of investible
                businesses and supporting the development of financing
                mechanisms for startups and creative enterprises, the programme
                aims to unlock significantly greater capital flows into
                high-potential sectors of the economy.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                <strong style={{ color: "#f97316", fontWeight: 700 }}>
                  Building a Stronger Future
                </strong>
                <br />
                Through targeted investments in people, enterprises, and
                institutions, iDICE is laying the foundation for a more
                innovative, competitive, and inclusive economy; one where
                Nigerian digital entrepreneurs and creators can build globally
                relevant businesses, create jobs, and drive sustainable economic
                growth.
              </p>
              <Link
                to="/opportunities"
                className="btn btn-primary px-4 py-2 rounded-pill fw-semibold mt-2"
              >
                Explore Opportunities{" "}
                <i className="ri-arrow-right-line ms-1"></i>
              </Link>
            </Col>

            {/* Right column: Programme details in purple gradient box */}
            <Col lg={6} data-aos="fade-left">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #0f0520 0%, #1a0a3c 55%, #2d0a6b 100%)",
                  borderRadius: 24,
                  padding: "30px",
                  color: "#fff",
                }}
              >
                <h4
                  className="fw-bold"
                  style={{ color: "#fff", marginBottom: 20 }}
                >
                  <strong style={{ color: "#fdba74" }}>
                    Programme Partners
                  </strong>
                </h4>
                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  The programme is supported by:
                </p>
                <div style={{ marginBottom: 20 }}>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 8,
                    }}
                  >
                    <a
                      href="https://www.afdb.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#fdba74";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                    >
                      African Development Bank (AfDB){" "}
                      <i
                        className="ri-external-link-line"
                        style={{ fontSize: 12, marginLeft: 4 }}
                      ></i>
                    </a>
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 8,
                    }}
                  >
                    <a
                      href="https://www.afd.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#fdba74";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                    >
                      Agence Française de Développement (AFD){" "}
                      <i
                        className="ri-external-link-line"
                        style={{ fontSize: 12, marginLeft: 4 }}
                      ></i>
                    </a>
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 8,
                    }}
                  >
                    <a
                      href="https://www.isdb.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#fdba74";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                    >
                      Islamic Development Bank (IsDB){" "}
                      <i
                        className="ri-external-link-line"
                        style={{ fontSize: 12, marginLeft: 4 }}
                      ></i>
                    </a>
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 0,
                    }}
                  >
                    <a
                      href="https://www.boi.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "#fdba74";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                      }}
                    >
                      Bank of Industry (BOI) as the implementing agency{" "}
                      <i
                        className="ri-external-link-line"
                        style={{ fontSize: 12, marginLeft: 4 }}
                      ></i>
                    </a>
                  </p>
                </div>
                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  Together, these institutions are providing the financial
                  resources, technical expertise, and implementation support
                  required to strengthen Nigeria's digital and creative economy.
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: 16,
                    marginTop: 8,
                  }}
                >
                  <h4
                    className="fw-bold"
                    style={{
                      color: "#fff",
                      marginBottom: 12,
                      fontSize: "1.2rem",
                    }}
                  >
                    <strong style={{ color: "#fdba74" }}>
                      Financing the Future
                    </strong>
                  </h4>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginBottom: 12,
                    }}
                  >
                    The programme's funding structure includes:
                  </p>
                  <div style={{ marginBottom: 12 }}>
                    <p
                      style={{
                        color: "#fdba74",
                        fontWeight: 600,
                        fontSize: 14,
                        marginBottom: 4,
                      }}
                    >
                      • Approximately $170 million from the African Development
                      Bank (AfDB)
                    </p>
                    <p
                      style={{
                        color: "#fdba74",
                        fontWeight: 600,
                        fontSize: 14,
                        marginBottom: 4,
                      }}
                    >
                      • Approximately €100 million from Agence Française de
                      Développement (AFD)
                    </p>
                    <p
                      style={{
                        color: "#fdba74",
                        fontWeight: 600,
                        fontSize: 14,
                        marginBottom: 4,
                      }}
                    >
                      • Approximately $70 million from the Islamic Development
                      Bank (IsDB)
                    </p>
                    <p
                      style={{
                        color: "#fdba74",
                        fontWeight: 600,
                        fontSize: 14,
                        marginBottom: 0,
                      }}
                    >
                      • Counterpart financing of about $45 million and programme
                      implementation support from the Bank of Industry (BOI)
                    </p>
                  </div>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    These resources are being deployed across a range of
                    interventions, including enterprise development, startup
                    financing, skills and capacity-building programmes,
                    innovation infrastructure, and ecosystem strengthening
                    initiatives.
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: 16,
                    marginTop: 16,
                  }}
                >
                  <p
                    style={{
                      color: "#fdba74",
                      fontWeight: 600,
                      fontSize: 14,
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.afdb.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fdba74",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Learn more about AfDB's role →
                    </a>
                  </p>
                </div>
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
              <h6
                style={{
                  color: "#f97316",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 8,
                }}
              >
                Who iDICE Supports
              </h6>
              <h2 className="title">Who iDICE Supports</h2>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                iDICE is designed to support a broad ecosystem of innovators and
                entrepreneurs, including:
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {[
              {
                icon: "ri-code-s-slash-line",
                title: "Technology Startups",
                desc: "Technology startups and digital businesses.",
              },
              {
                icon: "ri-film-line",
                title: "Creative Sector Enterprises",
                desc: "Film, music, animation, gaming, fashion, design, and digital media.",
              },
              {
                icon: "ri-lightbulb-line",
                title: "Innovation Hubs",
                desc: "Innovation hubs and accelerators.",
              },
              {
                icon: "ri-team-line",
                title: "Enterprise Support Organisations",
                desc: "Enterprise Support Organisations (ESOs).",
              },
              {
                icon: "ri-funds-line",
                title: "Venture Builders & VCs",
                desc: "Venture builders and venture capital firms.",
              },
              {
                icon: "ri-user-3-line",
                title: "Students & Young Entrepreneurs",
                desc: "Students and young entrepreneurs.",
              },
              {
                icon: "ri-building-2-line",
                title: "Universities & Polytechnics",
                desc: "Universities and polytechnics participating in innovation programmes.",
              },
            ].map((item, i) => (
              <Col
                md={6}
                lg={4}
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
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
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#f97316";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 16px 40px rgba(249,115,22,0.12)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
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
                    <i
                      className={item.icon}
                      style={{ fontSize: 24, color: "#f97316" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: 17 }}>
                    {item.title}
                  </h5>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: 14, lineHeight: 1.7 }}
                  >
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
              <h6
                style={{
                  color: "#f97316",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 8,
                }}
              >
                Get Involved
              </h6>
              <h2 className="title">Explore Opportunities</h2>
              <p className="text-muted">
                Through a series of programmes and initiatives, iDICE provides
                entrepreneurs and ecosystem actors with opportunities to build
                skills, grow businesses, and access funding.
              </p>
              <p className="text-muted mt-2">
                Explore current opportunities including:
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {[
              {
                icon: "ri-rocket-2-line",
                color: "#f97316",
                bg: "#fef3e2",
                title: "Startup Capacity Building",
                desc: "Programmes for early-stage entrepreneurs moving from idea stage to investment readiness.",
              },
              {
                icon: "ri-code-box-line",
                color: "#0891b2",
                bg: "#f0f9ff",
                title: "Innovation Challenges",
                desc: "Hackathons and innovation challenges to solve real-world problems.",
              },
              {
                icon: "ri-palette-line",
                color: "#dc2626",
                bg: "#fff1f2",
                title: "Creative Industry Programmes",
                desc: "Creathons and support for film, animation, music, gaming, and design.",
              },
              {
                icon: "ri-customer-service-2-line",
                color: "#6b21d6",
                bg: "#f5f3ff",
                title: "BPO Training",
                desc: "Business Process Outsourcing training for global freelancing opportunities.",
              },
              {
                icon: "ri-building-2-line",
                color: "#3b82f6",
                bg: "#eff6ff",
                title: "ICE Centres",
                desc: "Innovation centres in 33 universities and 33 polytechnics across Nigeria.",
              },
            ].map((item, i) => (
              <Col
                lg={4}
                md={6}
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: 28,
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 16px 40px rgba(249,115,22,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      item.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e2e8f0";
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-4">
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: item.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className={item.icon}
                        style={{ fontSize: 24, color: item.color }}
                      ></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ fontSize: 17 }}>
                    {item.title}
                  </h5>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: 14, lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <Link
                to="/opportunities"
                className="btn px-5 py-2 rounded-pill fw-semibold"
                style={{
                  background: "linear-gradient(135deg,#f97316,#ea580c)",
                  color: "#fff",
                  border: "none",
                  boxShadow: "0 4px 16px rgba(249,115,22,0.3)",
                }}
              >
                Visit Opportunities Page{" "}
                <i className="ri-arrow-right-line ms-1"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── NEWS ── */}
      <News />

      {/* ── PARTNERSHIP ── */}
      {/* <Partnership /> */}

      {/* ── FAQS PREVIEW ── */}
      <Faqs />

      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;