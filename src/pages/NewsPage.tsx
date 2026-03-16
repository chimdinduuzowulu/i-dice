import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const WP_API = process.env.REACT_APP_WP_API_URL || "https://your-wordpress-domain.com/wp-json/wp/v2";

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ name: string }>>;
  };
}

const fallbackPosts = [
  {
    id: 1,
    title: "Federal Government Launches iDICE Programme",
    excerpt: "The Federal Government launched the iDICE programme to strengthen Nigeria's digital technology and creative industries and create opportunities for young innovators and entrepreneurs.",
    date: "2023-03-15",
    category: "Programme Launch",
    image: null,
  },
  {
    id: 2,
    title: "iDICE Begins Investments in Nigeria's Startup Ecosystem",
    excerpt: "The programme has begun deploying funding to support high-growth technology startups and investment funds operating within Nigeria's innovation ecosystem.",
    date: "2023-09-10",
    category: "Investment",
    image: null,
  },
  {
    id: 3,
    title: "Strengthening Nigeria's Creative Economy",
    excerpt: "iDICE supports a wide range of creative industry subsectors including animation, gaming, digital media, fashion, film production, and design.",
    date: "2024-01-20",
    category: "Creative Economy",
    image: null,
  },
];

const NewsPage = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
    fetch(`${WP_API}/posts?_embed&per_page=20&orderby=date&order=desc`)
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then((data: WPPost[]) => {
        setPosts(data);
        const cats = Array.from(new Set(
          data.flatMap((p) => p._embedded?.["wp:term"]?.[0]?.map((t) => t.name) || [])
        ));
        setCategories(["All", ...cats]);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });

  const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "");

  const useFallback = error || posts.length === 0;

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
                Stay informed about the latest developments from the iDICE programme, including programme launches, partnerships, ecosystem initiatives, and success stories.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#f8fafc", minHeight: 400 }}>
        <Container>

          {/* Category filter — only show if we have real WP data */}
          {!useFallback && categories.length > 1 && (
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

          {loading && (
            <Row className="justify-content-center py-5">
              <Col md={4} className="text-center">
                <div className="spinner-border text-primary mb-3" role="status" />
                <p className="text-muted">Loading news...</p>
              </Col>
            </Row>
          )}

          {!loading && (
            <Row className="g-4">
              {(useFallback ? fallbackPosts : posts.filter((p) => {
                if (activeCategory === "All") return true;
                return p._embedded?.["wp:term"]?.[0]?.some((t) => t.name === activeCategory);
              })).map((post: any, idx: number) => {
                const thumbnail = post.image || post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                const category = post.category || post._embedded?.["wp:term"]?.[0]?.[0]?.name || "News";
                const title = post.title?.rendered || post.title;
                const excerpt = post.excerpt?.rendered ? stripHtml(post.excerpt.rendered) : post.excerpt;
                return (
                  <Col lg={4} md={6} key={post.id} data-aos="fade-up" data-aos-delay={idx * 60}>
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
                      {thumbnail ? (
                        <img src={thumbnail} alt={title} style={{ width: "100%", height: 220, objectFit: "cover" }} />
                      ) : (
                        <div style={{ height: 220, background: "linear-gradient(135deg, #fef3e2, #f0fdf4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <i className="ri-newspaper-line" style={{ fontSize: 56, color: "#f9731630" }}></i>
                        </div>
                      )}

                      <div className="p-4 d-flex flex-column flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <span style={{ background: "#fef3e2", color: "#f97316", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 0.5 }}>
                            {category}
                          </span>
                          <small className="text-muted" style={{ fontSize: 12 }}>
                            <i className="ri-calendar-line me-1"></i>
                            {formatDate(post.date)}
                          </small>
                        </div>

                        <h5
                          className="fw-bold mb-3"
                          style={{ fontSize: 17, lineHeight: 1.5 }}
                          dangerouslySetInnerHTML={{ __html: title }}
                        />

                        <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: 14, lineHeight: 1.7 }}>
                          {excerpt.substring(0, 140)}...
                        </p>

                        <div>
                          {useFallback ? (
                            <Link to="/news" style={{ color: "#f97316", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                              Read More <i className="ri-arrow-right-line"></i>
                            </Link>
                          ) : (
                            <Link to={`/news/${post.id}`} style={{ color: "#f97316", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                              Read More <i className="ri-arrow-right-line"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
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