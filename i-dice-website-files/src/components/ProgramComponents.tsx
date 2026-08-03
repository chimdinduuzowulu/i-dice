import { Container, Row, Col } from "react-bootstrap";

const ProgramComponents = () => {
  const components = [
    {
      icon: "mdi-school-outline",
      color: "#f97316",
      bg: "#fef3e2",
      title: "Skills and Enterprise Development",
      text: "Equips youth (15–35) with tech and creative skills, generates high-potential startups, and builds a community of developers, engineers, and designers — linking them to global companies and creative enterprises.",
    },
    {
      icon: "mdi-currency-usd-circle",
      color: "#6b21d6",
      bg: "#f5f3ff",
      title: "Access to Finance",
      text: "Focuses on funding and nurturing technology and creative enterprises including startups and SMEs, bridging existing gaps in private equity and investment in Nigeria through appropriate financing.",
    },
    {
      icon: "mdi-shield-check-outline",
      color: "#3b82f6",
      bg: "#eff6ff",
      title: "Enabling Environment & Support",
      text: "In collaboration with key government agencies, enacts policies that protect startups and investors in the tech and creative space, fostering a secure and supportive ecosystem for growth.",
    },
  ];

  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8} data-aos="fade-up">
            <h6 style={{ color: "#f97316", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>How It Works</h6>
            <h2 className="title fw-bold">Programme Components</h2>
            <p className="text-muted" style={{ fontSize: 16 }}>
              The iDICE programme is structured around three core components designed to foster a complete ecosystem for innovation.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {components.map((item, idx) => (
            <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div
                style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", height: "100%", border: "1px solid #e2e8f0", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.09)";
                  (e.currentTarget as HTMLElement).style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                }}
              >
                <div style={{ width: 64, height: 64, borderRadius: 18, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <i className={`mdi ${item.icon}`} style={{ fontSize: 30, color: item.color }}></i>
                </div>
                <h5 className="fw-bold mb-3" style={{ fontSize: 18, color: "#1a0a3c" }}>{item.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: 14, lineHeight: 1.8 }}>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProgramComponents;