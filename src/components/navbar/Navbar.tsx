import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  // Pages with dark hero backgrounds — show light logo
  const darkHeroPages = ["/", "/about", "/opportunities", "/news", "/gallery", "/faqs", "/blog", "/contact"];
  const onDarkPage = darkHeroPages.includes(location.pathname) || location.pathname.startsWith("/news/") || location.pathname.startsWith("/blog/");

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
      style={{
        backgroundColor: scrolled ? "#fff" : "transparent",
        padding: "10px 0",
        transition: "all 0.35s ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" style={{ padding: 0 }}>
          <img
            src={scrolled || !onDarkPage ? logoDark : logoLight}
            alt="iDICE"
            style={{ height: 44, width: "auto" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="idice-navbar-nav"
          style={{ border: "none", outline: "none", boxShadow: "none" }}
        >
          <span
            className="mdi mdi-menu"
            style={{ fontSize: 26, color: scrolled ? "#1a0a3c" : "#fff" }}
          ></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="idice-navbar-nav">
          <Nav className="ms-auto align-items-lg-center" style={{ gap: 2 }}>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About iDICE" },
              { path: "/opportunities", label: "Opportunities / Apply" },
              { path: "/news", label: "News / Updates" },
              // { path: "/gallery", label: "Gallery" },
              { path: "/blog", label: "Blog" },
              { path: "/faqs", label: "FAQs" },
            ].map((item) => {
              const active = isActive(item.path);
              return (
                <Nav.Link
                  key={item.path}
                  as={Link}
                  to={item.path}
                  style={{
                    color: active
                      ? "#f97316"
                      : scrolled
                      ? "#1a0a3c"
                      : "rgba(255,255,255,0.9)",
                    fontWeight: active ? 700 : 500,
                    fontSize: 14.5,
                    padding: "6px 14px",
                    borderBottom: active ? "2px solid #f97316" : "2px solid transparent",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.color = scrolled
                        ? "#1a0a3c"
                        : "rgba(255,255,255,0.9)";
                  }}
                >
                  {item.label}
                </Nav.Link>
              );
            })}

            <Nav.Link as={Link} to="/contact" className="ms-lg-2">
              <span
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "#fff",
                  padding: "9px 22px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  display: "inline-block",
                  boxShadow: "0 4px 15px rgba(249,115,22,0.35)",
                  transition: "all 0.2s",
                }}
              >
                Contact Us
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Mobile nav white background */}
      <style>{`
        @media (max-width: 991px) {
          .navbar { background-color: #fff !important; }
          .navbar .nav-link { color: #1a0a3c !important; }
        }
      `}</style>
    </Navbar>
  );
};

export default NavBar;