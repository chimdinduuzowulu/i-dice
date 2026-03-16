import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import countries from "../data/countries.json";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  country: string;
  subject: string;
  message: string;
  type: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  country: "",
  subject: "",
  message: "",
  type: "general",
};

const ContactPage = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    if (!form.country) errs.country = "Please select a country";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate submission — replace with real endpoint (e.g. Formspree, EmailJS, WP REST)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1500);
  };

  const inputStyle = (hasError?: string): React.CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: 10,
    border: `1px solid ${hasError ? "#ef4444" : "#e2e8f0"}`,
    fontSize: 14,
    color: "#1e293b",
    outline: "none",
    background: "#fff",
    transition: "border 0.2s",
    fontFamily: "inherit",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 6,
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
  };

  const contactCards = [
    {
      icon: "ri-mail-line",
      color: "#f97316",
      bg: "#fef3e2",
      title: "General Enquiries",
      value: "info@idice.ng",
      href: "mailto:info@idice.ng",
      desc: "For general questions about the programme",
    },
    {
      icon: "ri-newspaper-line",
      color: "#6b21d6",
      bg: "#f0fdf4",
      title: "Media Enquiries",
      value: "media@idice.ng",
      href: "mailto:media@idice.ng",
      desc: "For press, media, and communications",
    },
    {
      icon: "ri-shake-hands-line",
      color: "#7c3aed",
      bg: "#f5f3ff",
      title: "Partnerships",
      value: "partnerships@idice.ng",
      href: "mailto:partnerships@idice.ng",
      desc: "For partnership and collaboration opportunities",
    },
  ];

  const enquiryTypes = [
    { value: "general", label: "General Enquiry" },
    { value: "application", label: "Programme Application" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "media", label: "Media / Press" },
    { value: "investment", label: "Investment / Funding" },
    { value: "other", label: "Other" },
  ];

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
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -40,
            width: 280,
            height: 280,
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
                    Contact
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
                Get in{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #fdba74, #fb923c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Touch
                </span>
              </h1>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 17,
                  lineHeight: 1.8,
                  maxWidth: 520,
                  margin: "0 auto",
                }}
              >
                For enquiries about the iDICE programme, partnerships, or applications, please reach out to our team.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Cards */}
      <section style={{ background: "#f8fafc", paddingTop: 64, paddingBottom: 0 }}>
        <Container>
          <Row className="g-4 justify-content-center">
            {contactCards.map((card, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <a href={card.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 20,
                      padding: "32px 28px",
                      border: "1px solid #e2e8f0",
                      transition: "all 0.3s",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 16px 48px rgba(0,0,0,0.09)";
                      (e.currentTarget as HTMLElement).style.borderColor = card.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: card.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                      }}
                    >
                      <i className={card.icon} style={{ fontSize: 26, color: card.color }}></i>
                    </div>
                    <h5 className="fw-bold mb-1" style={{ fontSize: 16, color: "#1e293b" }}>
                      {card.title}
                    </h5>
                    <p className="text-muted mb-3" style={{ fontSize: 13 }}>
                      {card.desc}
                    </p>
                    <span
                      style={{
                        color: card.color,
                        fontWeight: 700,
                        fontSize: 15,
                        wordBreak: "break-all",
                      }}
                    >
                      {card.value}
                    </span>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form + Info */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="g-5 align-items-start">

            {/* Left — Info panel */}
            <Col lg={4} data-aos="fade-right">
              <div
                style={{
                  background: "linear-gradient(135deg, #0f0520, #1a0a3c)",
                  borderRadius: 24,
                  padding: "40px 36px",
                  color: "#fff",
                  position: "sticky",
                  top: 100,
                }}
              >
                <h3 style={{ color: "#fff", fontWeight: 800, marginBottom: 12, fontSize: 22 }}>
                  Contact Information
                </h3>
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.8, marginBottom: 36 }}>
                  Reach out to us through any of the channels below or fill in the form and we'll get back to you as soon as possible.
                </p>

                <div className="d-flex flex-column gap-4 mb-5">
                  {contactCards.map((c, i) => (
                    <a
                      key={i}
                      href={c.href}
                      style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16 }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "background 0.2s",
                        }}
                      >
                        <i className={c.icon} style={{ color: "#fdba74", fontSize: 18 }}></i>
                      </div>
                      <div>
                        <p style={{ color: "#64748b", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5, margin: 0 }}>
                          {c.title}
                        </p>
                        <p style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 600, margin: 0, wordBreak: "break-all" }}>
                          {c.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, marginBottom: 24 }}>
                  <p style={{ color: "#64748b", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>
                    Follow iDICE
                  </p>
                  <div className="d-flex gap-3">
                    {[
                      { icon: "ri-twitter-x-fill", href: "#" },
                      { icon: "ri-linkedin-fill", href: "#" },
                      { icon: "ri-facebook-fill", href: "#" },
                      { icon: "ri-instagram-fill", href: "#" },
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#94a3b8",
                          fontSize: 16,
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#f97316";
                          (e.currentTarget as HTMLElement).style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                        }}
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Startup Bridge CTA */}
                <div
                  style={{
                    background: "rgba(249,115,22,0.25)",
                    border: "1px solid rgba(249,115,22,0.4)",
                    borderRadius: 16,
                    padding: "20px",
                  }}
                >
                  <p style={{ color: "#fdba74", fontWeight: 700, fontSize: 14, margin: "0 0 8px" }}>
                    <i className="ri-rocket-line me-2"></i>
                    Startup Bridge is Open
                  </p>
                  <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 12px", lineHeight: 1.6 }}>
                    Applications for the Startup Bridge Capacity Building Programme are now open.
                  </p>
                  <a
                    href="https://startupbridge.ng/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#fdba74",
                      fontWeight: 700,
                      fontSize: 13,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    Apply Now <i className="ri-external-link-line"></i>
                  </a>
                </div>
              </div>
            </Col>

            {/* Right — Form */}
            <Col lg={8} data-aos="fade-left">
              {submitted ? (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "80px 52px",
                    border: "1px solid #e2e8f0",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#6b21d6,#4c1d95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 28px",
                    }}
                  >
                    <i className="ri-check-line" style={{ color: "#fff", fontSize: 40 }}></i>
                  </div>
                  <h2 className="fw-bold mb-3" style={{ fontSize: 26, color: "#1e293b" }}>
                    Message Sent!
                  </h2>
                  <p
                    className="text-muted mb-5"
                    style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 420, margin: "0 auto 40px" }}
                  >
                    Thank you for reaching out. Our team will review your message and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-primary px-5 rounded-pill fw-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "48px 52px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 4px 32px rgba(0,0,0,0.05)",
                  }}
                >
                  <h3 className="fw-bold mb-2" style={{ fontSize: 22, color: "#1e293b" }}>
                    Send us a Message
                  </h3>
                  <p className="text-muted mb-5" style={{ fontSize: 14 }}>
                    Fill in the form below and we'll respond within 2 business days.
                  </p>

                  {/* Enquiry Type */}
                  <div className="mb-4">
                    <label style={labelStyle}>Enquiry Type</label>
                    <div className="d-flex flex-wrap gap-2">
                      {enquiryTypes.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, type: t.value }))}
                          style={{
                            border: form.type === t.value ? "none" : "1px solid #e2e8f0",
                            borderRadius: 30,
                            padding: "7px 18px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            background:
                              form.type === t.value
                                ? "linear-gradient(135deg,#f97316,#ea580c)"
                                : "#f8fafc",
                            color: form.type === t.value ? "#fff" : "#64748b",
                            transition: "all 0.2s",
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Row className="g-3">
                    {/* First Name */}
                    <Col md={6}>
                      <label style={labelStyle}>
                        First Name <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        style={inputStyle(errors.firstName)}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.firstName ? "#ef4444" : "#e2e8f0")
                        }
                      />
                      {errors.firstName && (
                        <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
                          {errors.firstName}
                        </p>
                      )}
                    </Col>

                    {/* Last Name */}
                    <Col md={6}>
                      <label style={labelStyle}>
                        Last Name <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        style={inputStyle(errors.lastName)}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.lastName ? "#ef4444" : "#e2e8f0")
                        }
                      />
                      {errors.lastName && (
                        <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
                          {errors.lastName}
                        </p>
                      )}
                    </Col>

                    {/* Email */}
                    <Col md={6}>
                      <label style={labelStyle}>
                        Email Address <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={inputStyle(errors.email)}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.email ? "#ef4444" : "#e2e8f0")
                        }
                      />
                      {errors.email && (
                        <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
                          {errors.email}
                        </p>
                      )}
                    </Col>

                    {/* Phone */}
                    <Col md={6}>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 000 000 0000"
                        style={inputStyle()}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      />
                    </Col>

                    {/* Organisation */}
                    <Col md={6}>
                      <label style={labelStyle}>Organisation / Company</label>
                      <input
                        name="organisation"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Your organisation name"
                        style={inputStyle()}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      />
                    </Col>

                    {/* Country */}
                    <Col md={6}>
                      <label style={labelStyle}>
                        Country <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        style={{
                          ...inputStyle(errors.country),
                          appearance: "auto",
                          cursor: "pointer",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.country ? "#ef4444" : "#e2e8f0")
                        }
                      >
                        <option value="">Select your country</option>
                        {countries.map((c, i) => (
                          <option key={i} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
                          {errors.country}
                        </p>
                      )}
                    </Col>

                    {/* Subject */}
                    <Col md={12}>
                      <label style={labelStyle}>Subject</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Brief subject of your enquiry"
                        style={inputStyle()}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                      />
                    </Col>

                    {/* Message */}
                    <Col md={12}>
                      <label style={labelStyle}>
                        Message <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={5}
                        style={{
                          ...inputStyle(errors.message),
                          resize: "vertical",
                          minHeight: 130,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                        onBlur={(e) =>
                          (e.target.style.borderColor = errors.message ? "#ef4444" : "#e2e8f0")
                        }
                      />
                      {errors.message && (
                        <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>
                          {errors.message}
                        </p>
                      )}
                    </Col>
                  </Row>

                  <div className="mt-4 d-flex align-items-center gap-4 flex-wrap">
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      style={{
                        background: submitting
                          ? "#94a3b8"
                          : "linear-gradient(135deg,#f97316,#ea580c)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 12,
                        padding: "14px 40px",
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: submitting ? "not-allowed" : "pointer",
                        boxShadow: submitting ? "none" : "0 8px 24px rgba(249,115,22,0.35)",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        transition: "all 0.2s",
                      }}
                    >
                      {submitting ? (
                        <>
                          <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                            style={{ width: 18, height: 18, borderWidth: 2 }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <i className="ri-send-plane-line"></i>
                        </>
                      )}
                    </button>
                    <p className="text-muted mb-0" style={{ fontSize: 13 }}>
                      <i className="ri-shield-check-line me-1 text-success"></i>
                      Your information is safe with us and will not be shared.
                    </p>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default ContactPage;