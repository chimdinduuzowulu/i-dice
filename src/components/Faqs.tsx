import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import faqImage from "../assets/images/FAQ.jpg";

const faqData = [
  {
    title: "What is the iDICE programme?",
    content:
      "iDICE (Investment in Digital and Creative Enterprises) is a Federal Government initiative to support Nigeria's digital and creative sectors through skills development, ecosystem support, and access to financing. It is implemented by the Bank of Industry (BOI) and co-financed by AfDB, AFD, and IsDB.",
  },
  {
    title: "Who can apply for iDICE programmes?",
    content:
      "Eligibility varies by programme but includes startups, creative enterprises, innovation hubs, students, young entrepreneurs, and enterprise support organisations. Each initiative publishes its own criteria when applications open.",
  },
  {
    title: "How much funding does iDICE provide?",
    content:
      "The programme has a total envelope of approximately $618 million, mobilised through partnerships including AfDB (~$170M), AFD (€100M), and IsDB ($70M), alongside BOI counterpart financing.",
  },
  {
    title: "Is there a cost to apply?",
    content:
      "No. Applying to any iDICE initiative is completely free. Any request for payment is fraudulent — please report it to info@idice.ng.",
  },
  {
    title: "How do I stay updated on new opportunities?",
    content:
      "All official calls for applications are published on the iDICE website and official social media channels. You can also contact info@idice.ng or visit the Opportunities page for the latest announcements.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section" style={{ background: "#fff" }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center" data-aos="fade-up">
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
              Got Questions?
            </h6>
            <h2 className="title">Frequently Asked Questions</h2>
          </Col>
        </Row>

        <Row className="align-items-start gy-4">
          <Col lg={3} className="d-none d-lg-block" data-aos="fade-right">
            <img
              src={faqImage}
              alt="FAQs"
              className="img-fluid rounded-4"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Col>

          <Col lg={8} className="offset-lg-1" data-aos="fade-left">
            <div className="d-flex flex-column gap-3">
              {faqData.map((q, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      border: `1px solid ${isOpen ? "#f97316" : "#e2e8f0"}`,
                      overflow: "hidden",
                      boxShadow: isOpen
                        ? "0 8px 24px rgba(249,115,22,0.1)"
                        : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <button
                      onClick={() => toggle(i)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "18px 22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: isOpen ? "#f97316" : "#1a0a3c",
                          lineHeight: 1.4,
                          transition: "color 0.2s",
                        }}
                      >
                        {q.title}
                      </span>
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: isOpen ? "#f97316" : "#f1f5f9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.3s ease",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <i
                          className="ri-arrow-down-s-line"
                          style={{
                            color: isOpen ? "#fff" : "#64748b",
                            fontSize: 18,
                          }}
                        ></i>
                      </div>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? 300 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.35s ease",
                      }}
                    >
                      <p
                        style={{
                          padding: "0 22px 20px 22px",
                          margin: 0,
                          fontSize: 14,
                          color: "#475569",
                          lineHeight: 1.8,
                        }}
                      >
                        {q.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              <Link
                to="/faqs"
                className="btn px-4 py-2 rounded-pill fw-semibold"
                style={{
                  border: "2px solid #f97316",
                  color: "#f97316",
                  background: "transparent",
                  fontSize: 14,
                }}
              >
                View All FAQs <i className="ri-arrow-right-line ms-1"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
