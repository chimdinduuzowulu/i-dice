import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string | null;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Federal Government Launches iDICE Programme",
    excerpt: "The Federal Government launched the iDICE programme to strengthen Nigeria's digital technology and creative industries and create opportunities for young innovators and entrepreneurs.",
    date: "2023-03-15",
    category: "Youth Initiative",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    link: "https://yid.fmyd.gov.ng/the-idice-program-federal-government-youth-initiative/?utm_source=chatgpt.com",
  },
  {
    id: 2,
    title: "iDICE Begins Investments in Nigeria's Startup Ecosystem",
    excerpt: "The programme has begun deploying funding to support high-growth technology startups and investment funds operating within Nigeria's innovation ecosystem.",
    date: "2023-09-10",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    link: "https://insidebusiness.ng/236273/nigeria-deploys-618m-idice-fund-makes-first-direct-investment-in-tech-startups/?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "Strengthening Nigeria's Creative Economy",
    excerpt: "iDICE supports a wide range of creative industry subsectors including animation, gaming, digital media, fashion, film production, and design.",
    date: "2024-01-20",
    category: "Creative Economy",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
    link: "https://nairametrics.com/2024/02/02/fg-afdb-set-to-roll-out-617-million-idice-fund-for-digital-creative-industry/?utm_source=chatgpt.com",
  },
];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
    
    // Extract unique categories from news items
    const uniqueCategories = Array.from(new Set(newsItems.map((item) => item.category)));
    setCategories(["All", ...uniqueCategories]);
  }, []);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });

  const filteredNews = newsItems.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

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
        <div style={{ position: "absolute", top: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(249,115,22,0.1)", pointerEvents: "none" }} />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8} data-aos="fade-up">
              <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</Link></li>
                  <li className="breadcrumb-item active" style={{ color: "#fdba74" }}>News & Updates</li>
                </ol>
              </nav>
              <h1 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 20 }}>
                Latest{" "}
                <span style={{ background: "linear-gradient(90deg, #fdba74, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  News & Updates
                </span>
              </h1>
              <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.8 }}>
                Stay informed about the latest developments from the iDICE programme, including programme launches, partnerships, ecosystem initiatives, and success stories from Nigerian entrepreneurs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#f8fafc", minHeight: 400 }}>
        <Container>

          {/* Category filter */}
          {categories.length > 1 && (
            <Row className="mb-5">
              <Col>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        border: activeCategory === cat ? "none" : "1px solid #e2e8f0",
                        borderRadius: 30,
                        padding: "8px 20px",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        background: activeCategory === cat ? "linear-gradient(135deg, #f97316, #ea580c)" : "#fff",
                        color: activeCategory === cat ? "#fff" : "#64748b",
                        transition: "all 0.2s",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Col>
            </Row>
          )}

          <Row className="g-4">
            {filteredNews.map((item, idx) => (
              <Col lg={4} md={6} key={item.id} data-aos="fade-up" data-aos-delay={idx * 60}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(249,115,22,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                  }}
                >
                  {/* Image */}
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: "100%", height: 220, objectFit: "cover" }} 
                    />
                  ) : (
                    <div style={{ height: 220, background: "linear-gradient(135deg, #fef3e2, #f0fdf4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="ri-newspaper-line" style={{ fontSize: 56, color: "#f9731630" }}></i>
                    </div>
                  )}

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span style={{ background: "#fef3e2", color: "#f97316", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.5 }}>
                        {item.category}
                      </span>
                      <small className="text-muted" style={{ fontSize: 12 }}>
                        <i className="ri-calendar-line me-1"></i>
                        {formatDate(item.date)}
                      </small>
                    </div>

                    <h5
                      className="fw-bold mb-3"
                      style={{ fontSize: 17, lineHeight: 1.5 }}
                    >
                      {item.title}
                    </h5>

                    <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: 14, lineHeight: 1.7 }}>
                      {item.excerpt}
                    </p>

                    <div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "linear-gradient(135deg, #f97316, #ea580c)",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: 14,
                          padding: "10px 20px",
                          borderRadius: 30,
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          boxShadow: "0 2px 8px rgba(249,115,22,0.3)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 16px rgba(249,115,22,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(249,115,22,0.3)";
                        }}
                      >
                        Read Full Article <i className="ri-external-link-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {filteredNews.length === 0 && (
            <Row className="justify-content-center py-5">
              <Col md={6} className="text-center">
                <i className="ri-news-line" style={{ fontSize: 48, color: "#cbd5e1", marginBottom: 16 }}></i>
                <h4 className="fw-bold mb-2">No news found</h4>
                <p className="text-muted">Try selecting a different category.</p>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default NewsPage;