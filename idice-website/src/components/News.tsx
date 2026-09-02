import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WP_API = process.env.REACT_APP_WP_API_URL || "https://your-wordpress-domain.com/wp-json/wp/v2";

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ name: string }>>;
  };
}

const NewsPreview = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${WP_API}/posts?_embed&per_page=3&orderby=date&order=desc`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "");

  // Fallback news items when API is unavailable
  const fallbackNews = [
    {
      id: 1,
      title: "Federal Government Launches iDICE Programme",
      excerpt: "The Federal Government launched the iDICE programme to strengthen Nigeria's digital technology and creative industries and create opportunities for young innovators and entrepreneurs.",
      date: "2023-03-15",
      category: "Programme Launch",
    },
    {
      id: 2,
      title: "iDICE Begins Investments in Nigeria's Startup Ecosystem",
      excerpt: "The programme has begun deploying funding to support high-growth technology startups and investment funds operating within Nigeria's innovation ecosystem.",
      date: "2023-09-10",
      category: "Investment",
    },
    {
      id: 3,
      title: "Strengthening Nigeria's Creative Economy",
      excerpt: "iDICE supports a wide range of creative industry subsectors including animation, gaming, digital media, fashion, film production, and design.",
      date: "2024-01-20",
      category: "Creative Economy",
    },
  ];

  return (
    <section className="section bg-light" id="news">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center" data-aos="fade-up">
            <h6 className="subtitle text-primary fw-bold text-uppercase mb-2">Stay Informed</h6>
            <h2 className="title">Latest News & Updates</h2>
            <p className="text-muted">
              Stay up to date with the latest developments, programme launches, and success stories from the iDICE ecosystem.
            </p>
          </Col>
        </Row>

        {loading && (
          <Row className="justify-content-center">
            <Col md={6} className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-muted mt-3">Loading latest news...</p>
            </Col>
          </Row>
        )}

        {!loading && (
          <Row className="g-4">
            {(error || posts.length === 0 ? [] : posts).length === 0 && !error
              ? fallbackNews.map((item, idx) => (
                  <Col lg={4} md={6} key={item.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div
                      className="bg-white rounded-4 overflow-hidden h-100"
                      style={{
                        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(249,115,22,0.15)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                      }}
                    >
                      {/* Image placeholder */}
                      <div
                        style={{
                          height: 200,
                          background: "linear-gradient(135deg, #f9731615, #6b21d615)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className="ri-newspaper-line" style={{ fontSize: 48, color: "#f9731650" }}></i>
                      </div>
                      <div className="p-4">
                        <span
                          style={{
                            background: "#fef3e2",
                            color: "#f97316",
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "3px 10px",
                            borderRadius: 20,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                          }}
                        >
                          {item.category}
                        </span>
                        <h5 className="fw-bold mt-3 mb-2" style={{ fontSize: 16, lineHeight: 1.5 }}>
                          {item.title}
                        </h5>
                        <p className="text-muted mb-3" style={{ fontSize: 14, lineHeight: 1.7 }}>
                          {item.excerpt.substring(0, 120)}...
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <small className="text-muted">
                            <i className="ri-calendar-line me-1"></i>
                            {formatDate(item.date)}
                          </small>
                          <Link to="/news" style={{ color: "#f97316", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                            Read More <i className="ri-arrow-right-line"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              : posts.map((post, idx) => {
                  const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "News";
                  return (
                    <Col lg={4} md={6} key={post.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                      <div
                        className="bg-white rounded-4 overflow-hidden h-100"
                        style={{
                          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(249,115,22,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                        }}
                      >
                        {thumbnail ? (
                          <img
                            src={thumbnail}
                            alt={post.title.rendered}
                            style={{ width: "100%", height: 200, objectFit: "cover" }}
                          />
                        ) : (
                          <div
                            style={{
                              height: 200,
                              background: "linear-gradient(135deg, #f9731615, #6b21d615)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className="ri-newspaper-line" style={{ fontSize: 48, color: "#f9731650" }}></i>
                          </div>
                        )}
                        <div className="p-4">
                          <span
                            style={{
                              background: "#fef3e2",
                              color: "#f97316",
                              fontSize: 11,
                              fontWeight: 600,
                              padding: "3px 10px",
                              borderRadius: 20,
                              textTransform: "uppercase",
                              letterSpacing: 0.5,
                            }}
                          >
                            {category}
                          </span>
                          <h5
                            className="fw-bold mt-3 mb-2"
                            style={{ fontSize: 16, lineHeight: 1.5 }}
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                          <p className="text-muted mb-3" style={{ fontSize: 14, lineHeight: 1.7 }}>
                            {stripHtml(post.excerpt.rendered).substring(0, 120)}...
                          </p>
                          <div className="d-flex align-items-center justify-content-between">
                            <small className="text-muted">
                              <i className="ri-calendar-line me-1"></i>
                              {formatDate(post.date)}
                            </small>
                            <Link
                              to={`/news/${post.id}`}
                              style={{ color: "#f97316", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
                            >
                              Read More <i className="ri-arrow-right-line"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
          </Row>
        )}

        <Row className="mt-5">
          <Col className="text-center">
            <Link to="/news" className="btn btn-outline-primary px-5 py-2 rounded-pill fw-semibold">
              View All News <i className="ri-arrow-right-line ms-1"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsPreview;