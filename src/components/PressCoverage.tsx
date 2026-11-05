import { Col, Container, Row } from "react-bootstrap";

interface PressItem {
  title: string;
  source: string;
  url: string;
}

// Media coverage of the BOI / Kuramo Capital iDICE Fund of Funds announcement
// and related iDICE financing news.
const pressItems: PressItem[] = [
  {
    title: "BOI Appoints Kuramo Capital to Manage $170.6m iDICE Fund of Funds",
    source: "Daily Trust",
    url: "https://dailytrust.com/boi-appoints-kuramo-capital-to-manage-170-6m-idice-fund-of-funds/",
  },
  {
    title: "BOI Appoints Kuramo Capital as Fund Manager",
    source: "Punch",
    url: "https://punchng.com/boi-appoints-kuramo-capital-as-fund-manager/?amp",
  },
  {
    title: "BOI Appoints Kuramo Capital to Manage $170.6m iDICE Fund for Nigerian Startups",
    source: "ThisDay Live",
    url: "https://www.thisdaylive.com/2026/07/01/boi-appoints-kuramo-capital-to-manage-170-6m-idice-fund-for-nigerian-startups/",
  },
  {
    title: "BOI Taps Kuramo Capital to Manage Landmark DICE Fund of Funds",
    source: "BusinessDay",
    url: "https://businessday.ng/companies/article/boi-taps-kuramo-capital-to-manage-landmark-dice-fund-of-funds/?amp",
  },
  {
    title: "Fed Govt Unveils $170.6 Million Boost for Tech, Creative Startups",
    source: "The Nation",
    url: "https://thenationonlineng.net/fed-govt-unveils-170-6-million-boost-for-tech-creative-startups/",
  },
  {
    title: "Appointment of Kuramo Capital as the Fund of Funds Manager for the iDICE Programme",
    source: "PEVCA",
    url: "https://www.pevcang.org/member-news/appointment-of-kuramo-capital-as-the-fund-of-funds-manager-for-idice-programme-XX2KxhLVxLIcDgRBW3fW",
  },
  {
    title: "Federal Government of Nigeria Opens $110 Million Debt Financing Window for Tech & Creative Startups Under the iDICE Programme",
    source: "TechCabal",
    url: "https://techcabal.com/2026/07/28/federal-government-of-nigeria-opens-110-million-debt-financing-window-for-tech-creative-startups-under-the-idice-programme/",
  },
  {
    title: "Federal Government of Nigeria Opens $110 Million Debt Financing Window for Tech & Creative Startups Under the iDICE Programme",
    source: "Techpoint Africa",
    url: "https://techpoint.africa/brandpress/federal-government-of-nigeria-opens-110-million-debt-financing-window-for-tech-creative-startups-under-the-idice-programme/",
  },
  {
    title: "FGN Opens $110 Million Debt Financing Window for Tech & Creative Startups Under the iDICE Programme",
    source: "Nairametrics",
    url: "https://nairametrics.com/2026/07/28/fgn-opens-110-million-debt-financing-window-for-tech-creative-startups-under-the-idice-programme/",
  },
  {
    title: "Everyone Asks Me How the Pieces of iDICE Fit Together — Here's the Whole Picture",
    source: "LinkedIn — Adebayo",
    url: "https://www.linkedin.com/pulse/everyone-asks-me-how-pieces-idice-fit-together-heres-whole-adebayo-qg7he",
  },
];

const PressCoverage = () => {
  return (
    <section className="section" style={{ background: "#fff" }} id="press-coverage">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center" data-aos="fade-up">
            <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">In the Press</h6>
            <h2 className="title">Press Coverage</h2>
            <p className="text-muted">
              See what the media is saying about the iDICE Programme's latest milestones,
              including the appointment of Kuramo Capital to manage the DICE Fund of Funds.
            </p>
          </Col>
        </Row>

        <Row className="g-3">
          {pressItems.map((item, idx) => (
            <Col lg={6} key={idx} data-aos="fade-up" data-aos-delay={(idx % 6) * 60}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-start gap-3 text-decoration-none h-100"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "18px 20px",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                  (e.currentTarget as HTMLElement).style.background = "#fff";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(249,115,22,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "#fef3e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className="ri-newspaper-line" style={{ fontSize: 20, color: "#f97316" }}></i>
                </div>
                <div style={{ minWidth: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      color: "#f97316",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      marginBottom: 4,
                    }}
                  >
                    {item.source}
                  </span>
                  <p
                    className="fw-semibold mb-0"
                    style={{ color: "#0f172a", fontSize: 14.5, lineHeight: 1.5 }}
                  >
                    {item.title}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#94a3b8",
                      fontSize: 12.5,
                      marginTop: 6,
                    }}
                  >
                    Read Article <i className="ri-external-link-line"></i>
                  </span>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PressCoverage;
