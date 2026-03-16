import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const WP_API =
  process.env.REACT_APP_WP_API_URL ||
  "http://i-dice-cms.local//wp-json/wp/v2";

interface GalleryItem {
  id: number;
  title: { rendered: string };
  date: string;
  acf: {
    image: string | false;
    caption: string;
    category: string;
  };
}

// Lightbox component
const Lightbox = ({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: 44,
          height: 44,
          color: "#fff",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
        }
      >
        <i className="ri-close-line"></i>
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          style={{
            position: "absolute",
            left: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: "50%",
            width: 48,
            height: 48,
            color: "#fff",
            fontSize: 22,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#f97316")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
          }
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          style={{
            position: "absolute",
            right: 20,
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: "50%",
            width: 48,
            height: 48,
            color: "#fff",
            fontSize: 22,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#f97316")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)")
          }
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      )}

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 880,
          width: "100%",
          borderRadius: 16,
          overflow: "hidden",
          background: "#1e293b",
        }}
      >
        {item.acf.image ? (
          <img
            src={item.acf.image}
            alt={item.acf.caption || item.title.rendered}
            style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", display: "block" }}
          />
        ) : (
          <div
            style={{
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="ri-image-line" style={{ fontSize: 64, color: "#475569" }}></i>
          </div>
        )}
        {(item.acf.caption || item.title.rendered) && (
          <div style={{ padding: "20px 28px", background: "#1e293b" }}>
            <h5 style={{ color: "#fff", fontWeight: 700, margin: 0, fontSize: 16 }}>
              {item.title.rendered}
            </h5>
            {item.acf.caption && (
              <p style={{ color: "#94a3b8", margin: "6px 0 0", fontSize: 14 }}>
                {item.acf.caption}
              </p>
            )}
            {item.acf.category && (
              <span
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  background: "rgba(249,115,22,0.3)",
                  color: "#fdba74",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 12px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                }}
              >
                {item.acf.category}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);

    fetch(`${WP_API}/gallery`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: GalleryItem[]) => {
        console.log("Fetched gallery items:", data);
        setItems(data);
        const cats = Array.from(
          new Set(data.map((d) => d.acf?.category).filter(Boolean))
        ) as string[];
        setCategories(["All", ...cats]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.acf?.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));

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
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.1)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(14,159,110,0.08)",
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
                    Gallery
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
                iDICE{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #fdba74, #fb923c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Photo Gallery
                </span>
              </h1>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 17,
                  lineHeight: 1.8,
                  maxWidth: 560,
                  margin: "0 auto",
                }}
              >
                A visual record of iDICE events, programmes, and milestones across Nigeria's digital and creative ecosystem.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Content */}
      <section className="section" style={{ background: "#f8fafc", minHeight: 400 }}>
        <Container>

          {/* Category Filter */}
          {!loading && !error && categories.length > 1 && (
            <Row className="mb-5" data-aos="fade-up">
              <Col>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
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
          )}

          {/* Loading */}
          {loading && (
            <Row className="justify-content-center py-5">
              <Col md={4} className="text-center">
                <div
                  className="spinner-border text-primary mb-3"
                  style={{ width: 48, height: 48 }}
                  role="status"
                />
                <p className="text-muted">Loading gallery...</p>
              </Col>
            </Row>
          )}

          {/* Error / Empty */}
          {!loading && (error || items.length === 0) && (
            <Row className="justify-content-center py-5">
              <Col md={6} className="text-center">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "60px 40px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <i
                    className="ri-image-2-line"
                    style={{
                      fontSize: 72,
                      color: "#cbd5e1",
                      display: "block",
                      marginBottom: 20,
                    }}
                  ></i>
                  <h4 className="fw-bold mb-3">Gallery Coming Soon</h4>
                  <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
                    Our gallery is being set up. Check back soon to see photos from iDICE events, programme activities, and ecosystem milestones.
                  </p>
                  <Link to="/contact" className="btn btn-primary px-5 rounded-pill">
                    Get in Touch
                  </Link>
                </div>
              </Col>
            </Row>
          )}

          {/* Gallery Grid */}
          {!loading && filtered.length > 0 && (
            <>
              <Row className="g-3">
                {filtered.map((item, idx) => (
                  <Col
                    key={item.id}
                    xs={6}
                    md={4}
                    lg={3}
                    data-aos="fade-up"
                    data-aos-delay={Math.min(idx * 40, 320)}
                  >
                    <div
                      onClick={() => openLightbox(idx)}
                      style={{
                        borderRadius: 14,
                        overflow: "hidden",
                        cursor: "pointer",
                        position: "relative",
                        background: "#1e293b",
                        aspectRatio: "1 / 1",
                        border: "1px solid #e2e8f0",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "scale(1.03)";
                        el.style.boxShadow = "0 16px 48px rgba(249,115,22,0.2)";
                        el.style.zIndex = "2";
                        const overlay = el.querySelector(".gallery-overlay") as HTMLElement;
                        if (overlay) overlay.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "scale(1)";
                        el.style.boxShadow = "none";
                        el.style.zIndex = "1";
                        const overlay = el.querySelector(".gallery-overlay") as HTMLElement;
                        if (overlay) overlay.style.opacity = "0";
                      }}
                    >
                      {item.acf?.image ? (
                        <img
                          src={item.acf.image}
                          alt={item.acf?.caption || item.title.rendered}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.4s ease",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(135deg,#1e3a5f,#0f2d40)",
                          }}
                        >
                          <i
                            className="ri-image-line"
                            style={{ fontSize: 36, color: "#475569" }}
                          ></i>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div
                        className="gallery-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: "16px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <i
                            className="ri-zoom-in-line"
                            style={{ color: "#fff", fontSize: 20 }}
                          ></i>
                        </div>
                        <p
                          style={{
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 600,
                            margin: 0,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.acf?.caption || item.title.rendered}
                        </p>
                        {item.acf?.category && (
                          <span
                            style={{
                              fontSize: 10,
                              color: "#fdba74",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: 0.5,
                            }}
                          >
                            {item.acf.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Item count */}
              <Row className="mt-5">
                <Col className="text-center">
                  <p style={{ color: "#94a3b8", fontSize: 14 }}>
                    Showing{" "}
                    <strong style={{ color: "#f97316" }}>{filtered.length}</strong>{" "}
                    {filtered.length === 1 ? "photo" : "photos"}
                    {activeCategory !== "All" && (
                      <>
                        {" "}
                        in{" "}
                        <strong style={{ color: "#f97316" }}>{activeCategory}</strong>
                      </>
                    )}
                  </p>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filtered.length - 1}
        />
      )}

      <Footer />
      <BackToTop />
    </>
  );
};

export default GalleryPage;