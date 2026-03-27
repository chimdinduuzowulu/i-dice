import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

interface FAQ {
  title: string;
  content: string;
  category?: string;
}

const allFaqs: FAQ[] = [
  {
    category: "About iDICE",
    title: "What is the iDICE programme?",
    content:
      "iDICE (Investment in Digital and Creative Enterprises) is a Federal Government initiative designed to support Nigeria's digital and creative sectors through skills development, ecosystem support, and access to financing.",
  },
  {
    category: "Eligibility & Applications",
    title: "Who can apply for iDICE programmes?",
    content:
      "Eligibility varies by programme but may include:\n\n• Startups\n• Creative enterprises\n• Innovation hubs\n• Students and young entrepreneurs\n• Enterprise support organisations",
  },
  {
    category: "Funding & Finance",
    title: "How much funding does the iDICE programme provide?",
    content:
      "The programme has a total funding envelope of approximately $618 million, mobilised through partnerships between the Federal Government of Nigeria and international development partners.",
  },
  {
    category: "Eligibility & Applications",
    title: "Is there a cost to apply?",
    content:
      "No. Applying to iDICE initiatives is free.",
  },
  {
    category: "Eligibility & Applications",
    title: "How will beneficiaries be selected?",
    content:
      "Applications are evaluated through competitive selection processes based on programme-specific criteria.",
  },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(allFaqs.map((f) => f.category || "General"))),
  ];

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchCat =
      activeCategory === "All" || faq.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

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
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.1)",
            pointerEvents: "none",
          }}
        />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <h1
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  marginBottom: 20,
                }}
              >
                Frequently Asked{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #fdba74, #fb923c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Questions
                </span>
              </h1>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 17,
                  lineHeight: 1.8,
                  maxWidth: 560,
                  margin: "0 auto 36px",
                }}
              >
                Find answers to the most common questions about the iDICE programme, eligibility, applications, and opportunities.
              </p>

              {/* Search Bar */}
              <div
                style={{
                  maxWidth: 500,
                  margin: "0 auto",
                  position: "relative",
                }}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <i
                  className="ri-search-line"
                  style={{
                    position: "absolute",
                    left: 18,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    fontSize: 18,
                    zIndex: 2,
                  }}
                ></i>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setOpenIndex(null);
                  }}
                  style={{
                    width: "100%",
                    padding: "14px 20px 14px 48px",
                    borderRadius: 50,
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontSize: 15,
                    outline: "none",
                    backdropFilter: "blur(8px)",
                    transition: "border 0.2s",
                  }}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "rgba(249,115,22,0.6)")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.15)")
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          {/* Category Filter */}
          <Row className="mb-5">
            <Col>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(null);
                    }}
                    style={{
                      border:
                        activeCategory === cat ? "none" : "1px solid #e2e8f0",
                      borderRadius: 30,
                      padding: "9px 22px",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      background:
                        activeCategory === cat
                          ? "linear-gradient(135deg, #f97316, #ea580c)"
                          : "#fff",
                      color: activeCategory === cat ? "#fff" : "#64748b",
                      transition: "all 0.2s",
                      boxShadow:
                        activeCategory === cat
                          ? "0 4px 16px rgba(249,115,22,0.3)"
                          : "none",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={9}>
              {filteredFaqs.length === 0 && (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "60px 40px",
                    textAlign: "center",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <i
                    className="ri-search-line"
                    style={{
                      fontSize: 56,
                      color: "#cbd5e1",
                      display: "block",
                      marginBottom: 16,
                    }}
                  ></i>
                  <h4 className="fw-bold mb-3">No results found</h4>
                  <p className="text-muted">
                    Try a different search term or browse all categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="btn btn-outline-primary px-4 rounded-pill mt-2"
                  >
                    Clear Search
                  </button>
                </div>
              )}

              <div className="d-flex flex-column gap-3">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      data-aos="fade-up"
                      data-aos-delay={Math.min(idx * 40, 240)}
                      style={{
                        background: "#fff",
                        borderRadius: 16,
                        border: `1px solid ${isOpen ? "#f97316" : "#e2e8f0"}`,
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        boxShadow: isOpen
                          ? "0 8px 32px rgba(249,115,22,0.1)"
                          : "none",
                      }}
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggle(idx)}
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          padding: "20px 24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              background: isOpen ? "#f97316" : "#fef3e2",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transition: "all 0.2s",
                            }}
                          >
                            <i
                              className="ri-question-line"
                              style={{
                                color: isOpen ? "#fff" : "#f97316",
                                fontSize: 16,
                              }}
                            ></i>
                          </div>
                          <span
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              color: isOpen ? "#f97316" : "#1e293b",
                              lineHeight: 1.4,
                              transition: "color 0.2s",
                            }}
                          >
                            {faq.title}
                          </span>
                        </div>
                        <div
                          style={{
                            width: 28,
                            height: 28,
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
                              fontSize: 16,
                            }}
                          ></i>
                        </div>
                      </button>

                      {/* Answer */}
                      <div
                        style={{
                          maxHeight: isOpen ? 400 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.35s ease",
                        }}
                      >
                        <div
                          style={{
                            padding: "0 24px 20px 72px",
                            color: "#475569",
                            fontSize: 14,
                            lineHeight: 1.5,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {faq.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>

          {/* Still have questions CTA */}
          <Row className="justify-content-center mt-5">
            <Col lg={9}>
              <div
                data-aos="fade-up"
                style={{
                  background: "linear-gradient(135deg, #0f0520, #1a0a3c)",
                  borderRadius: 24,
                  padding: "48px 52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 24,
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 22,
                      marginBottom: 8,
                    }}
                  >
                    Still have questions?
                  </h3>
                  <p style={{ color: "#94a3b8", margin: 0, fontSize: 15 }}>
                    Our team is ready to help. Reach out to us directly.
                  </p>
                </div>
                <div className="d-flex gap-3 flex-wrap">
                  <a
                    href="mailto:info@idice.ng"
                    className="btn"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 10,
                      padding: "12px 24px",
                      fontWeight: 200,
                      fontSize: 14,
                    }}
                  >
                    <i className="ri-mail-line me-2"></i>info@idice.ng
                  </a>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{
                      borderRadius: 10,
                      padding: "12px 28px",
                      fontWeight: 600,
                      fontSize: 14,
                      background: "linear-gradient(135deg,#f97316,#ea580c)",
                      border: "none",
                      boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
                    }}
                  >
                    Contact Us <i className="ri-arrow-right-line ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default FAQsPage;