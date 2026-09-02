import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const BPOTrainingProgramme = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  // Programme-level stats
  const stats = [
    { number: "300,000", label: "Young Nigerians to be trained" },
    { number: "6", label: "Geopolitical zones covered" },
    { number: "50,000", label: "Training slots per zone" },
    { number: "40%+", label: "Beneficiaries to be women" },
  ];

  // Who Can Apply
  const eligibility = [
    "Are between 15 and 35 years of age",
    "Reside in Nigeria",
    "Are interested in building careers in the digital or creative economy",
    "Are committed to completing the training programme",
  ];

  // Why Apply
  const benefits = [
    { icon: "ri-lightbulb-flash-line", text: "Develop in-demand digital and creative skills" },
    { icon: "ri-user-star-line", text: "Learn from experienced trainers and industry professionals" },
    { icon: "ri-line-chart-line", text: "Improve their employability" },
    { icon: "ri-briefcase-4-line", text: "Gain workplace-ready competencies" },
    { icon: "ri-global-line", text: "Access pathways to employment opportunities within Nigeria's growing BPO ecosystem and the global outsourcing industry" },
  ];


  const zones = [
    {
      name: "North Central",
      states: ["Benue", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau", "FCT"],
      color: "#0891b2",
      bg: "#f0f9ff",
      icon: "ri-map-pin-line",
      ctaLink: "https://www.activityinfo.org/c/chlhps4mseisp7suc/3303a3",
    },
    {
      name: "North East",
      states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
      color: "#16a34a",
      bg: "#f0fdf4",
      icon: "ri-map-pin-line",
      ctaLink: "https://www.activityinfo.org/c/c44do6imseisnpuub/9c6d1f",
    },
    {
      name: "North West",
      states: ["Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara"],
      color: "#d97706",
      bg: "#fffbeb",
      icon: "ri-map-pin-line",
      ctaLink: "https://www.activityinfo.org/c/ci0vzd6mseisjr9fo/e026f9",
    },
    {
      name: "South East",
      states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
      color: "#f97316",
      bg: "#fef3e2",
      icon: "ri-map-pin-line",
      ctaLink: "https://www.activityinfo.org/c/cif8rkemseissxrud/946930",
    },
    {
      name: "South South",
      states: ["Akwa Ibom", "Bayelsa", "Cross River", "Delta", "Edo", "Rivers"],
      color: "#dc2626",
      bg: "#fef2f2",
      icon: "ri-map-pin-line",
      ctaLink: "https://www.activityinfo.org/c/c8gxwt6mseisu57ue/4cda0f",
    },
    {
      name: "South West",
      states: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
      color: "#7c3aed",
      bg: "#f5f3ff",
      icon: "ri-map-pin-line",
      ctaLink: "https://www.activityinfo.org/c/czdef32mquxqezemvd/2767a3",
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
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.1)",
            pointerEvents: "none",
          }}
        />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={9} data-aos="fade-up">
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(249,115,22,0.15)",
                  color: "#fdba74",
                  padding: "6px 18px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 20,
                }}
              >
                iDICE Skills to job Programme
              </span>
              <h1
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  marginBottom: 20,
                }}
              >
                Build the Skills.{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #fdba74, #fb923c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Access the Opportunities.
                </span>
              </h1>
              <p style={{ color: "#cbd5e1", fontSize: 17, lineHeight: 1.8, maxWidth: 720, margin: "0 auto" }}>
                A flagship initiative under the Investment in Digital and Creative Enterprises (iDICE)
                Programme, equipping young Nigerians with the skills to build careers in the global digital economy.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Overview */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={9} data-aos="fade-up">
              <p className="text-muted mb-4" style={{ lineHeight: 1.9, fontSize: 16 }}>
                The <strong>iDICE Skills to job Programme</strong> is a flagship initiative under the{" "}
                <strong>Investment in Digital and Creative Enterprises (iDICE)</strong> Programme, designed to
                equip <strong>300,000 young Nigerians</strong> with industry-relevant digital and creative skills
                that lead to employment opportunities in Nigeria's growing Business Process Outsourcing (BPO)
                industry and the global digital economy.
              </p>
              <p className="text-muted mb-0" style={{ lineHeight: 1.9, fontSize: 16 }}>
                The programme will train <strong>50,000 participants in each of Nigeria's six geopolitical zones</strong>,
                ensuring nationwide access while promoting inclusive participation. At least{" "}
                <strong>40% of beneficiaries will be women</strong>, reflecting iDICE's commitment to expanding
                opportunities for young Nigerians.
              </p>
            </Col>
          </Row>

          {/* Stats */}
          <Row className="g-4 justify-content-center">
            {stats.map((s, i) => (
              <Col lg={3} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 55%, #2d0a6b 100%)",
                    borderRadius: 20,
                    padding: "28px 20px",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <h3 style={{ color: "#fdba74", fontWeight: 800, fontSize: 32, marginBottom: 8 }}>{s.number}</h3>
                  <p style={{ color: "#cbd5e1", fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Who Can Apply */}
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={5} data-aos="fade-right">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Eligibility</h6>
              <h2 className="title mb-4">Who Can Apply?</h2>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Applications are open to young Nigerians who:
              </p>
            </Col>
            <Col lg={7} data-aos="fade-left">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 20,
                  padding: 32,
                }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {eligibility.map((item, i) => (
                    <li key={i} className="d-flex align-items-start gap-3 mb-3">
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          background: "#fef3e2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <i className="ri-check-line" style={{ color: "#f97316", fontSize: 15 }}></i>
                      </div>
                      <span style={{ color: "#334155", fontSize: 15.5, lineHeight: 1.7 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="d-flex align-items-start gap-3"
                  style={{
                    background: "#f5f3ff",
                    borderRadius: 14,
                    padding: "16px 18px",
                    marginTop: 8,
                  }}
                >
                  <i className="ri-heart-line" style={{ color: "#7c3aed", fontSize: 20, flexShrink: 0, marginTop: 2 }}></i>
                  <p style={{ color: "#5b21b6", fontSize: 14.5, margin: 0, lineHeight: 1.7, fontWeight: 600 }}>
                    People with disabilities and other vulnerable groups are encouraged to apply.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What You'll Learn */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={5} data-aos="fade-right">
              {/* <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "#fef3e2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <i className="ri-graduation-cap-line" style={{ fontSize: 30, color: "#f97316" }}></i>
              </div> */}
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Curriculum</h6>
              <h2 className="title mb-0">What You'll Learn</h2>
            </Col>
            <Col lg={7} data-aos="fade-left">
              <p className="text-muted mb-4" style={{ lineHeight: 1.9, fontSize: 16 }}>
                Participants will receive practical, industry-focused training in high-demand{" "}
                <strong>technology and creative disciplines</strong>, alongside workplace and employability skills
                designed to prepare them for careers in the BPO and digital services sectors.
              </p>
              <p className="text-muted mb-0" style={{ lineHeight: 1.9, fontSize: 16 }}>
                Training will be delivered by <strong>accredited training providers</strong> and aligned with
                industry needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Apply */}
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">The Value</h6>
              <h2 className="title">Why Apply?</h2>
              <p className="text-muted mb-0">Successful applicants will have the opportunity to:</p>
            </Col>
          </Row>
          <Row className="g-4">
            {benefits.map((b, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 20,
                    padding: 28,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "#fef3e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <i className={b.icon} style={{ fontSize: 22, color: "#f97316" }}></i>
                  </div>
                  <p style={{ color: "#334155", fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Apply by Geopolitical Zone */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Applications</h6>
              <h2 className="title">Apply by Geopolitical Zone</h2>
              <p className="text-muted mb-0">
                Applications are managed by geopolitical zone. Please select the application card for your
                state of residence.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {zones.map((zone, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    height: "100%",
                    background: "#fff",
                    border: `1px solid #e2e8f0`,
                    borderRadius: 20,
                    padding: 28,
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = zone.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: zone.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={zone.icon} style={{ fontSize: 22, color: zone.color }}></i>
                    </div>
                    <h4 className="fw-bold mb-0" style={{ fontSize: 18, color: "#0f172a" }}>{zone.name}</h4>
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      background: zone.bg,
                      color: zone.color,
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 700,
                      marginBottom: 16,
                      width: "fit-content",
                    }}
                  >
                    50,000 Training Slots
                  </span>

                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      marginBottom: 8,
                    }}
                  >
                    States
                  </p>
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                    {zone.states.join(", ")}
                  </p>

                  <a
                    href={zone.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-semibold"
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: `linear-gradient(135deg, ${zone.color}, ${zone.color})`,
                      color: "#fff",
                      padding: "12px 20px",
                      borderRadius: 10,
                      fontSize: 14.5,
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    Apply Now <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Ready to Get Started CTA */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.1)",
            pointerEvents: "none",
          }}
        />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: 16 }}>
                Ready to Get Started?
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: 16.5, lineHeight: 1.8, marginBottom: 32 }}>
                Choose your geopolitical zone above and begin your application today.
              </p>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="fw-semibold"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 10,
                  fontSize: 15.5,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
                }}
              >
                Select Your Zone <i className="ri-arrow-up-line"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default BPOTrainingProgramme;