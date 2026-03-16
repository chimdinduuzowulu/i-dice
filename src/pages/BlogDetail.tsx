import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/NavBar";
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
    }>;
    "wp:term"?: Array<Array<{ name: string; id: number }>>;
    author?: Array<{ name: string; description: string; avatar_urls?: Record<string, string> }>;
  };
}

const BlogDetail = () => {
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
        return fetch(
          `${WP_API}/posts?_embed&per_page=3&exclude=${id}&orderby=date&order=desc`
        );
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

  const readTime = (content: string) =>
    Math.max(1, Math.ceil(stripHtml(content).split(" ").length / 200));

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
            <h3 className="fw-bold mb-3">Post Not Found</h3>
            <p className="text-muted mb-4">
              This blog post may have been removed or the link is incorrect.
            </p>
            <Link to="/blog" className="btn btn-primary px-5 rounded-pill">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const altText =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
  const author = post._embedded?.author?.[0];
  const authorName = author?.name || "iDICE Team";
  const authorBio = author?.description || "The iDICE programme team, sharing insights and updates from Nigeria's digital and creative ecosystem.";
  const authorAvatar = author?.avatar_urls?.["96"];

  return (
    <>
      <NavBar />

      {/* Hero */}
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
                filter: "brightness(0.28)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.97) 100%)",
                zIndex: 1,
              }}
            />
          </>
        )}

        <Container style={{ position: "relative", zIndex: 2, paddingTop: 40, paddingBottom: 64 }}>
          <Row className="justify-content-center">
            <Col lg={9}>
              <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" style={{ color: "#94a3b8", textDecoration: "none" }}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/blog" style={{ color: "#94a3b8", textDecoration: "none" }}>
                      Blog
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" style={{ color: "#fdba74" }}>
                    Article
                  </li>
                </ol>
              </nav>

              {/* Category badge */}
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
                  fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.25,
                  marginBottom: 28,
                }}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              {/* Author + Meta bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  flexWrap: "wrap",
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  {authorAvatar ? (
                    <img
                      src={authorAvatar}
                      alt={authorName}
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.2)",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#f97316,#6b21d6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <i className="ri-user-line" style={{ color: "#fff", fontSize: 18 }}></i>
                    </div>
                  )}
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, margin: 0, fontSize: 14 }}>
                      {authorName}
                    </p>
                    <p style={{ color: "#64748b", margin: 0, fontSize: 12 }}>iDICE Team</p>
                  </div>
                </div>

                <div className="d-flex gap-4 ms-auto" style={{ color: "#64748b", fontSize: 13 }}>
                  <span>
                    <i className="ri-calendar-line me-1"></i>
                    {formatDate(post.date)}
                  </span>
                  <span>
                    <i className="ri-time-line me-1"></i>
                    {readTime(post.content.rendered)} min read
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Article Body */}
      <section style={{ background: "#f8fafc", paddingTop: 60, paddingBottom: 60 }}>
        <Container>
          <Row className="justify-content-center">
            {/* Main content */}
            <Col lg={8}>
              {/* Featured image (shown below hero) */}
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

              {/* Article content card */}
              <div
                data-aos="fade-up"
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "48px 52px",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                  marginBottom: 32,
                }}
              >
                <div
                  className="wp-blog-content"
                  style={{ lineHeight: 1.9, fontSize: 16, color: "#374151" }}
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                {/* Tags + Share */}
                <div
                  style={{
                    marginTop: 48,
                    paddingTop: 28,
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
                      Category:
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
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Share:</span>
                    {[
                      {
                        icon: "ri-twitter-x-fill",
                        href: `https://twitter.com/intent/tweet?url=${window.location.href}`,
                      },
                      {
                        icon: "ri-linkedin-fill",
                        href: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
                      },
                      {
                        icon: "ri-facebook-fill",
                        href: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                      },
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

              {/* Author card */}
              <div
                data-aos="fade-up"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "32px 36px",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  marginBottom: 32,
                }}
              >
                {authorAvatar ? (
                  <img
                    src={authorAvatar}
                    alt={authorName}
                    style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  />
                ) : (
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#f97316,#6b21d6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className="ri-user-line" style={{ color: "#fff", fontSize: 26 }}></i>
                  </div>
                )}
                <div>
                  <p style={{ fontSize: 11, color: "#f97316", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, margin: "0 0 4px" }}>
                    Written by
                  </p>
                  <h5 className="fw-bold mb-2" style={{ fontSize: 17, color: "#1e293b" }}>
                    {authorName}
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: 14, lineHeight: 1.7 }}>
                    {authorBio}
                  </p>
                </div>
              </div>

              {/* Back button */}
              <button
                onClick={() => navigate("/blog")}
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
                <i className="ri-arrow-left-line"></i> Back to Blog
              </button>
            </Col>

            {/* Sidebar — Related */}
            {related.length > 0 && (
              <Col lg={4} className="mt-4 mt-lg-0">
                <div
                  data-aos="fade-left"
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "28px",
                    border: "1px solid #e2e8f0",
                    position: "sticky",
                    top: 100,
                  }}
                >
                  <h5 className="fw-bold mb-4" style={{ fontSize: 16, borderBottom: "2px solid #fef3e2", paddingBottom: 16 }}>
                    More Articles
                  </h5>
                  <div className="d-flex flex-column gap-4">
                    {related.map((rel) => {
                      const relThumb = rel._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                      const relCat = rel._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";
                      return (
                        <Link
                          key={rel.id}
                          to={`/blog/${rel.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: 14,
                              alignItems: "flex-start",
                              transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) =>
                              ((e.currentTarget as HTMLElement).style.opacity = "0.7")
                            }
                            onMouseLeave={(e) =>
                              ((e.currentTarget as HTMLElement).style.opacity = "1")
                            }
                          >
                            {relThumb ? (
                              <img
                                src={relThumb}
                                alt={rel.title.rendered}
                                style={{
                                  width: 72,
                                  height: 60,
                                  objectFit: "cover",
                                  borderRadius: 10,
                                  flexShrink: 0,
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: 72,
                                  height: 60,
                                  borderRadius: 10,
                                  background: "#fef3e2",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i className="ri-article-line" style={{ color: "#f97316", fontSize: 22 }}></i>
                              </div>
                            )}
                            <div>
                              <span
                                style={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: "#f97316",
                                  textTransform: "uppercase",
                                  letterSpacing: 0.5,
                                  display: "block",
                                  marginBottom: 4,
                                }}
                              >
                                {relCat}
                              </span>
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: 13,
                                  fontWeight: 600,
                                  color: "#1e293b",
                                  lineHeight: 1.4,
                                }}
                                dangerouslySetInnerHTML={{ __html: rel.title.rendered }}
                              />
                              <span style={{ fontSize: 11, color: "#94a3b8" }}>
                                {formatDate(rel.date)}
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/blog"
                    className="btn btn-outline-orange w-100 mt-4 rounded-pill fw-semibold"
                    style={{ fontSize: 13 }}
                  >
                    View All Posts
                  </Link>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Article content styles */}
      <style>{`
        .wp-blog-content h1,
        .wp-blog-content h2,
        .wp-blog-content h3,
        .wp-blog-content h4 {
          color: #1e293b;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .wp-blog-content h2 { font-size: 1.5rem; }
        .wp-blog-content h3 { font-size: 1.25rem; }
        .wp-blog-content p { margin-bottom: 1.4rem; }
        .wp-blog-content a { color: #f97316; }
        .wp-blog-content ul,
        .wp-blog-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.4rem;
        }
        .wp-blog-content li { margin-bottom: 0.5rem; }
        .wp-blog-content img {
          max-width: 100%;
          border-radius: 12px;
          margin: 1.2rem 0;
        }
        .wp-blog-content blockquote {
          border-left: 4px solid #f97316;
          padding: 14px 22px;
          background: #fef3e2;
          border-radius: 0 10px 10px 0;
          margin: 1.5rem 0;
          font-style: italic;
          color: #334155;
        }
        .wp-blog-content strong { color: #1e293b; }
        @media (max-width: 768px) {
          .wp-blog-content { font-size: 15px; }
        }
      `}</style>

      <Footer />
      <BackToTop />
    </>
  );
};

export default BlogDetail;