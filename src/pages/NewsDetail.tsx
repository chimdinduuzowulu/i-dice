import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const WP_API =
  process.env.REACT_APP_WP_API_URL ||
  "https://your-wordpress-domain.com/wp-json/wp/v2";

interface WPPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { width: number; height: number };
    }>;
    "wp:term"?: Array<Array<{ name: string; id: number }>>;
    author?: Array<{ name: string; avatar_urls?: { [key: string]: string } }>;
  };
}

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<WPPost | null>(null);
  const [related, setRelated] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
    setLoading(true);
    setError(false);

    fetch(`${WP_API}/posts/${id}?_embed`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: WPPost) => {
        setPost(data);
        setLoading(false);
        // Fetch related posts
        return fetch(`${WP_API}/posts?_embed&per_page=3&exclude=${id}&orderby=date&order=desc`);
      })
      .then((res) => res?.json())
      .then((relData) => {
        if (relData) setRelated(relData);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "");

  if (loading) {
    return (
      <>
        <NavBar />
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f8fafc",
            paddingTop: 80,
          }}
        >
          <div className="text-center">
            <div
              className="spinner-border text-primary mb-3"
              style={{ width: 48, height: 48 }}
              role="status"
            />
            <p className="text-muted">Loading article...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <NavBar />
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 80,
          }}
        >
          <div className="text-center">
            <i
              className="ri-article-line"
              style={{ fontSize: 64, color: "#cbd5e1", display: "block", marginBottom: 20 }}
            ></i>
            <h3 className="fw-bold mb-3">Article Not Found</h3>
            <p className="text-muted mb-4">
              This article may have been removed or the link is incorrect.
            </p>
            <Link to="/news" className="btn btn-primary px-5 rounded-pill">
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const altText = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "News";
  const author = post._embedded?.author?.[0]?.name || "iDICE Team";

  return (
    <>
      <NavBar />

      {/* Hero Banner */}
      <section
        style={{
          background: thumbnail
            ? "transparent"
            : "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
          paddingTop: 100,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {thumbnail && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.3)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.95) 100%)",
                zIndex: 1,
              }}
            />
          </>
        )}
        <Container style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 60 }}>
          <Row className="justify-content-center">
            <Col lg={9}>
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/news" style={{ color: "#94a3b8", textDecoration: "none" }}>
                      News
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    style={{ color: "#fdba74" }}
                    aria-current="page"
                  >
                    Article
                  </li>
                </ol>
              </nav>

              {/* Category */}
              <span
                style={{
                  background: "rgba(249,115,22,0.3)",
                  color: "#fdba74",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "5px 14px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  border: "1px solid rgba(147,197,253,0.3)",
                  display: "inline-block",
                  marginBottom: 20,
                }}
              >
                {category}
              </span>

              {/* Title */}
              <h1
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                  lineHeight: 1.25,
                  marginBottom: 24,
                }}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              {/* Meta */}
              <div
                className="d-flex flex-wrap align-items-center gap-4"
                style={{ color: "#94a3b8", fontSize: 14 }}
              >
                <span>
                  <i className="ri-user-line me-1"></i> {author}
                </span>
                <span>
                  <i className="ri-calendar-line me-1"></i> {formatDate(post.date)}
                </span>
                <span>
                  <i className="ri-time-line me-1"></i>
                  {Math.ceil(stripHtml(post.content.rendered).split(" ").length / 200)} min read
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Article Body */}
      <section
        className="section"
        style={{ background: "#f8fafc", paddingTop: 60, paddingBottom: 60 }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              {/* Featured image below hero if exists */}
              {thumbnail && (
                <div
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    marginBottom: 48,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  }}
                  data-aos="fade-up"
                >
                  <img
                    src={thumbnail}
                    alt={altText}
                    style={{ width: "100%", maxHeight: 480, objectFit: "cover", display: "block" }}
                  />
                </div>
              )}

              {/* Article card */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "48px 52px",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                }}
                data-aos="fade-up"
              >
                {/* Article content from WordPress */}
                <div
                  className="wp-article-content"
                  style={{
                    lineHeight: 1.9,
                    fontSize: 16,
                    color: "#374151",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                {/* Tags / Category */}
                <div
                  style={{
                    marginTop: 48,
                    paddingTop: 32,
                    borderTop: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>
                      Filed under:
                    </span>
                    <span
                      style={{
                        background: "#fef3e2",
                        color: "#f97316",
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "4px 14px",
                        borderRadius: 20,
                      }}
                    >
                      {category}
                    </span>
                  </div>

                  {/* Share */}
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Share:</span>
                    {[
                      { icon: "ri-twitter-x-fill", href: `https://twitter.com/intent/tweet?url=${window.location.href}` },
                      { icon: "ri-linkedin-fill", href: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}` },
                      { icon: "ri-facebook-fill", href: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}` },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: "#f1f5f9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#475569",
                          fontSize: 15,
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#f97316";
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#f1f5f9";
                          (e.currentTarget as HTMLElement).style.color = "#475569";
                        }}
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Back button */}
              <div className="mt-4">
                <button
                  onClick={() => navigate("/news")}
                  style={{
                    background: "none",
                    border: "1px solid #e2e8f0",
                    borderRadius: 30,
                    padding: "10px 24px",
                    color: "#475569",
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                    (e.currentTarget as HTMLElement).style.color = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.color = "#475569";
                  }}
                >
                  <i className="ri-arrow-left-line"></i> Back to All News
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section" style={{ background: "#fff" }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="title">More News & Updates</h2>
              </Col>
            </Row>
            <Row className="g-4">
              {related.slice(0, 3).map((item, idx) => {
                const thumb = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                const cat = item._embedded?.["wp:term"]?.[0]?.[0]?.name || "News";
                return (
                  <Col lg={4} md={6} key={item.id} data-aos="fade-up" data-aos-delay={idx * 80}>
                    <Link
                      to={`/news/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: 16,
                          overflow: "hidden",
                          border: "1px solid #e2e8f0",
                          transition: "all 0.3s",
                          height: "100%",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(249,115,22,0.1)";
                          (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                          (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                        }}
                      >
                        {thumb ? (
                          <img
                            src={thumb}
                            alt={item.title.rendered}
                            style={{ width: "100%", height: 180, objectFit: "cover" }}
                          />
                        ) : (
                          <div
                            style={{
                              height: 180,
                              background: "linear-gradient(135deg,#fef3e2,#f0fdf4)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className="ri-newspaper-line" style={{ fontSize: 44, color: "#f9731630" }}></i>
                          </div>
                        )}
                        <div className="p-4">
                          <span
                            style={{
                              background: "#fef3e2",
                              color: "#f97316",
                              fontSize: 11,
                              fontWeight: 700,
                              padding: "3px 10px",
                              borderRadius: 20,
                              display: "inline-block",
                              marginBottom: 12,
                            }}
                          >
                            {cat}
                          </span>
                          <h5
                            className="fw-bold"
                            style={{ fontSize: 15, lineHeight: 1.5, color: "#1e293b" }}
                            dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                          />
                          <small style={{ color: "#94a3b8", fontSize: 12 }}>
                            <i className="ri-calendar-line me-1"></i>
                            {formatDate(item.date)}
                          </small>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      )}

      {/* Article content global styles injected inline via a style tag approach */}
      <style>{`
        .wp-article-content h1,
        .wp-article-content h2,
        .wp-article-content h3,
        .wp-article-content h4 {
          color: #1e293b;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .wp-article-content h2 { font-size: 1.5rem; }
        .wp-article-content h3 { font-size: 1.25rem; }
        .wp-article-content p { margin-bottom: 1.4rem; }
        .wp-article-content a { color: #f97316; }
        .wp-article-content ul,
        .wp-article-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.4rem;
        }
        .wp-article-content li { margin-bottom: 0.5rem; }
        .wp-article-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 1rem 0;
        }
        .wp-article-content blockquote {
          border-left: 4px solid #f97316;
          padding: 12px 20px;
          background: #fef3e2;
          border-radius: 0 8px 8px 0;
          margin: 1.5rem 0;
          font-style: italic;
          color: #334155;
        }
        @media (max-width: 768px) {
          .wp-article-content { font-size: 15px; }
        }
      `}</style>

      <Footer />
      <BackToTop />
    </>
  );
};

export default NewsDetail;