import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/NavBar";
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
      "iDICE (Investment in Digital and Creative Enterprises) is a Federal Government initiative designed to support Nigeria's digital and creative sectors through skills development, ecosystem support, and access to financing. The programme is implemented by the Bank of Industry (BOI) and co-financed by the African Development Bank (AfDB), Agence Française de Développement (AFD), and the Islamic Development Bank (IsDB).",
  },
  {
    category: "About iDICE",
    title: "When was iDICE launched?",
    content:
      "The iDICE programme was officially launched in March 2023 by the Federal Government of Nigeria. It represents one of the largest coordinated investments in Nigeria's digital and creative sectors, with a total funding envelope of approximately $618 million.",
  },
  {
    category: "About iDICE",
    title: "Who implements the iDICE programme?",
    content:
      "The Bank of Industry (BOI) serves as the implementing agency responsible for programme execution, coordination, and oversight. A multi-stakeholder governance structure ensures transparency, accountability, and effective programme delivery.",
  },
  {
    category: "Eligibility & Applications",
    title: "Who can apply for iDICE programmes?",
    content:
      "Eligibility varies by programme but may include: startups, creative enterprises, innovation hubs, students and young entrepreneurs, and enterprise support organisations. Each initiative has its own specific eligibility criteria which are published when applications open.",
  },
  {
    category: "Eligibility & Applications",
    title: "Is there a cost to apply?",
    content:
      "No. Applying to iDICE initiatives is completely free. Any communication requesting payment to apply for an iDICE programme should be treated as fraudulent. Please report such communications to info@idice.ng.",
  },
  {
    category: "Eligibility & Applications",
    title: "How will beneficiaries be selected?",
    content:
      "Applications are evaluated through competitive selection processes based on programme-specific criteria. Selection is merit-based and transparent, ensuring the best candidates are supported to build scalable and impactful businesses.",
  },
  {
    category: "Eligibility & Applications",
    title: "How do I apply for an iDICE programme?",
    content:
      "To apply, review the eligibility requirements for the specific programme, complete the online application form through the designated portal, submit all required documentation, and await confirmation and next steps. All official calls for applications are published on this website and through iDICE communication channels.",
  },
  {
    category: "Funding & Finance",
    title: "How much funding does the iDICE programme provide?",
    content:
      "The programme has a total funding envelope of approximately $618 million, mobilised through partnerships between the Federal Government of Nigeria and international development partners. The African Development Bank provides approximately $170 million, AFD €100 million, and IsDB $70 million, while BOI provides counterpart financing.",
  },
  {
    category: "Funding & Finance",
    title: "What types of financial support does iDICE offer?",
    content:
      "Through the DICE Funds, iDICE provides venture capital investments, equity and quasi-equity financing, startup funding programmes, and grants and enterprise development support. The programme also supports the creation of venture capital funds and investment vehicles to strengthen Nigeria's startup financing ecosystem.",
  },
  {
    category: "Sectors & Support",
    title: "What sectors does iDICE support?",
    content:
      "iDICE supports Nigeria's technology and creative industries including software development, fintech, digital services, animation, gaming, film production, music, digital media, fashion, and design, among others. The programme also supports innovation hubs, accelerators, and enterprise support organisations working in these sectors.",
  },
  {
    category: "Sectors & Support",
    title: "What is the iDICE Startup Bridge programme?",
    content:
      "The Startup Bridge Capacity Building Programme is designed to support early-stage entrepreneurs and innovators in Nigeria's digital economy. It provides structured entrepreneurial training, mentorship and ecosystem support, access to startup development resources, and pathways to investment opportunities. Applications are currently open at startupbridge.ng.",
  },
  {
    category: "Sectors & Support",
    title: "What are ICE Centres?",
    content:
      "Innovation and Creativity Enterprise (ICE) Centres are being established by iDICE across 33 universities and 33 polytechnics in Nigeria. These centres serve as hubs for student innovation, startup incubation, digital skills training, and collaboration between academia and industry.",
  },
  {
    category: "Staying Informed",
    title: "How can I stay updated on new opportunities?",
    content:
      "All official calls for applications are published on the iDICE website and through our official communication channels. You can also follow iDICE on social media and subscribe to our newsletter for the latest announcements, programme launches, and ecosystem updates.",
  },
  {
    category: "Staying Informed",
    title: "How can I contact iDICE?",
    content:
      "For general enquiries, email info@idice.ng. For media enquiries, contact media@idice.ng. For partnership opportunities, reach out to partnerships@idice.ng. You can also use the contact form on our Contact page.",
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
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" style={{ color: "#fdba74" }}>
                    FAQs
                  </li>
                </ol>
              </nav>
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
                          padding: "22px 28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 16,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <div className="d-flex align-items-start gap-3">
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
                              marginTop: 2,
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
                          <div>
                            {faq.category && (
                              <span
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: "#f97316",
                                  textTransform: "uppercase",
                                  letterSpacing: 0.8,
                                  display: "block",
                                  marginBottom: 4,
                                }}
                              >
                                {faq.category}
                              </span>
                            )}
                            <span
                              style={{
                                fontSize: 16,
                                fontWeight: 700,
                                color: isOpen ? "#f97316" : "#1e293b",
                                lineHeight: 1.4,
                                transition: "color 0.2s",
                              }}
                            >
                              {faq.title}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            width: 32,
                            height: 32,
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
                            padding: "0 28px 24px 76px",
                            color: "#475569",
                            fontSize: 15,
                            lineHeight: 1.8,
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
                      fontWeight: 600,
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