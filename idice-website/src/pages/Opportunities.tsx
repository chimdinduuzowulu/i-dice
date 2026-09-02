import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Opportunities = () => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  // Active opportunities (applications open)
  const activeOpportunities = [
    {
      tag: "Applications Open",
      tagColor: "#16a34a",
      tagBg: "#f0fdf4",
      icon: "ri-bank-line",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
      title: "BOI–iDICE Debt Fund",
      fundSize: "Fund Size: US$45 Million",
      date: "Funding Type: Debt Financing | Status: Applications Open",
      desc: (
        <>
          <p style={{ marginBottom: 12 }}>
            The BOI–iDICE Debt Fund is a US$45 million financing facility 
            provided by the Bank of Industry (BOI) on behalf of the Federal 
            Government of Nigeria under the Investment in Digital and Creative 
            Enterprises (iDICE) Programme.
          </p>
          <p style={{ marginBottom: 12 }}>
            Designed for eligible technology and creative startups with 
            demonstrated growth potential, the Fund provides affordable financing 
            to help businesses expand operations, acquire assets, increase 
            capacity, and scale sustainably.
          </p>

          <div style={{ marginBottom: 12 }}>
            <strong
              style={{ color: "#7c3aed", display: "block", marginBottom: 6 }}
            >
              📌 Fund Highlights:
            </strong>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#334155" }}>
              <li>Financing from ₦10 Million to ₦1 Billion</li>
              <li>Maximum interest rate of 10% per annum</li>
              <li>Up to 6-month moratorium</li>
              <li>Repayment period of up to 5 years</li>
            </ul>
          </div>

          <div style={{ marginBottom: 12 }}>
            <strong
              style={{ color: "#7c3aed", display: "block", marginBottom: 6 }}
            >
              🎯 Eligible Beneficiaries:
            </strong>
            <p style={{ marginBottom: 6, color: "#334155" }}>
              The Fund is open to eligible technology and creative startups 
              operating in sectors including:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#334155" }}>
              <li>FinTech</li>
              <li>HealthTech</li>
              <li>EdTech</li>
              <li>AgriTech</li>
              <li>ClimateTech</li>
              <li>AI &amp; Data</li>
              <li>E-commerce</li>
              <li>Software &amp; Digital Services</li>
              <li>Film &amp; Television</li>
              <li>Music</li>
              <li>Animation &amp; VFX</li>
              <li>Gaming</li>
              <li>Fashion &amp; Beauty</li>
              <li>Digital Content</li>
              <li>Publishing</li>
              <li>Photography &amp; Cinematography</li>
              <li>Performing Arts</li>
              <li>Visual Arts</li>
              <li>And other qualifying digital and creative enterprises</li>
            </ul>
          </div>

          <div style={{ marginBottom: 0 }}>
            <strong
              style={{ color: "#7c3aed", display: "block", marginBottom: 6 }}
            >
              🏦 How to Apply:
            </strong>
            <p style={{ marginBottom: 0 }}>
              Applications can be submitted through the official iDICE 
              financing portal: <strong>idice.boi.ng</strong>
            </p>
          </div>
        </>
      ),
      fundingTag: "Funding Type: Debt Financing",
      provides: [
        "Financing from ₦10 Million to ₦1 Billion",
        "Maximum interest rate of 10% per annum",
        "Up to 6-month moratorium",
        "Repayment period of up to 5 years",
        "Open to eligible technology and creative startups",
      ],
      cta: "Apply for the BOI-iDICE Debt Fund",
      ctaLink: "https://idice.boi.ng/",
      external: true,
    },
    {
      tag: "Applications Open",
      tagColor: "#16a34a",
      tagBg: "#f0fdf4",
      icon: "ri-hand-coin-line",
      iconColor: "#059669",
      iconBg: "#ecfdf5",
      title: "IsDB–iDICE Debt Fund",
      fundSize: "Fund Size: US$65 Million",
      date: "Funding Type: Non-Interest (Sharia-Compliant) Debt Financing | Status: Applications Open",
      desc: (
        <>
          <p style={{ marginBottom: 12 }}>
            The IsDB–iDICE Debt Fund is a US$65 million Sharia-compliant 
            financing facility established under the{" "}
            <strong>
              Federal Government of Nigeria–Islamic Development Bank (IsDB) 
              partnership
            </strong>{" "}
            as part of the iDICE Programme.
          </p>
          <p style={{ marginBottom: 12 }}>
            Structured using a{" "}
            <strong style={{ color: "#059669" }}>
              Murabaha (cost-plus-markup) financing model
            </strong>
            , the Fund provides ethical, non-interest financing for eligible 
            technology and creative startups seeking to acquire equipment, 
            technology, creative infrastructure, and other productive business 
            assets. The facility is open to all eligible Nigerians, regardless 
            of faith or background.
          </p>

          <div style={{ marginBottom: 12 }}>
            <strong
              style={{ color: "#059669", display: "block", marginBottom: 6 }}
            >
              📌 Fund Highlights:
            </strong>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#334155" }}>
              <li>US$65 million financing facility</li>
              <li>Sharia-compliant, non-interest financing</li>
              <li>Designed primarily for productive asset financing</li>
              <li>Open to eligible technology and creative startups nationwide</li>
            </ul>
          </div>

          <div style={{ marginBottom: 12 }}>
            <strong
              style={{ color: "#059669", display: "block", marginBottom: 6 }}
            >
              🏛️ How to Apply:
            </strong>
            <p style={{ marginBottom: 6 }}>
              Applications can be submitted through the official iDICE 
              financing portal: <strong>idice.boi.ng</strong>
            </p>
            <p style={{ marginBottom: 6 }}>
              Applicants may also apply through participating non-interest 
              financial institutions, including:
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, color: "#334155" }}>
              <li>Lotus Bank</li>
              <li>SunTrust Bank</li>
              <li>Summit Bank</li>
            </ul>
            <p style={{ marginTop: 6, marginBottom: 0, fontSize: 13, color: "#64748b" }}>
              Additional participating financial institutions may be announced.
            </p>
          </div>
        </>
      ),
      fundingTag: "Funding Type: Non-Interest (Sharia-Compliant) Debt Financing",
      provides: [
        "US$65 million financing facility",
        "Sharia-compliant, non-interest financing (Murabaha model)",
        "Designed primarily for productive asset financing",
        "Open to eligible technology and creative startups nationwide",
        "Available through Lotus Bank, SunTrust Bank, and Summit Bank",
      ],
      cta: "Apply for the IsDB-iDICE Debt Fund",
      ctaLink: "https://idice.boi.ng/",
      external: true,
    },
  ];

  // Closed opportunities
  const closedOpportunities = [
    {
      tag: "Cohort 2 Applications Closed",
      tagColor: "#dc2626",
      tagBg: "#fef2f2",
      icon: "ri-rocket-2-line",
      iconColor: "#f97316",
      iconBg: "#fef3e2",
      title: "iDICE Startup Bridge – Founders Lab",
      date: "Status: Cohort 2 Applications Closed | Cohort 1 Training Ongoing",
      desc: (
        <>
          <p style={{ marginBottom: 12 }}>
            The Founders Lab is the idea-stage track of the iDICE Startup Bridge
            programme, equipping aspiring entrepreneurs with the skills,
            mentorship, and support needed to build investment-ready startups.
          </p>
          <p style={{ marginBottom: 12 }}>
            While Cohort 1 founders are already learning, building, and
            validating their ventures, applications for Cohort 2 have now
            closed. Selected participants will receive world-class
            entrepreneurial training, mentorship, ecosystem access, and the
            opportunity to qualify for non-equity grant funding to
            accelerate their startup journey.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong style={{ color: "#f97316" }}>
              Stay tuned
            </strong> 
            &nbsp;for updates on the next application window.
          </p>
        </>
      ),
      fundingTag: "Funding Type: Non-Equity Grants",
      provides: [
        "Intensive entrepreneurial training",
        "Mentorship and ecosystem engagement",
        "Business development support",
        "Non-equity grant funding for selected startups",
      ],
      cta: "Learn More",
      ctaLink: "https://idicestartupbridge.ng/founders-lab/",
      external: true,
    },
  ];

  const upcomingInitiatives = [
    {
      icon: "ri-line-chart-line",
      iconColor: "#0891b2",
      iconBg: "#f0f9ff",
      title: "iDICE Startup Bridge – Growth Lab",
      desc: "The Growth Lab is designed for post-MVP startups that have demonstrated traction and are ready to scale operations, expand markets, strengthen business fundamentals, and prepare for growth-stage investment.",
      sectionHeader: "Participants receive specialized support focused on:",
      provides: [
        "Growth strategy and operational excellence",
        "Financial readiness and investor engagement",
        "Market expansion support",
        "Equity-based funding opportunities",
      ],
      extra: (
        <>
          <p style={{ marginBottom: 6 }}>
            <strong style={{ color: "#0891b2" }}>
              Eligible startups may also access equity-based funding opportunities
            </strong>{" "}
            to support business growth and scale.
          </p>
          <p style={{ marginBottom: 0, fontStyle: "italic", color: "#64748b" }}>
            Further information on eligibility criteria, funding opportunities, 
            and application dates will be announced shortly.
          </p>
        </>
      ),
    },
    {
      icon: "ri-customer-service-2-line",
      iconColor: "#7c3aed",
      iconBg: "#f5f3ff",
      title: "Business Process Outsourcing (BPO) Programme",
      desc: "The BPO programme is designed to prepare Nigerian youth for employment opportunities in the global digital services economy.",
      sectionHeader: "Participants will receive training in areas such as:",
      provides: [
        "Remote service delivery",
        "Digital customer support",
        "Business process outsourcing operations",
        "Global freelancing opportunities",
      ],
      extra: "The programme aims to position Nigeria as a leading destination for global digital services and outsourcing talent.",
    },
    {
      icon: "ri-code-box-line",
      iconColor: "#6b21d6",
      iconBg: "#f0fdf4",
      title: "iDICE Hackathons",
      desc: "Hackathons under the iDICE programme bring together developers, designers, entrepreneurs, and innovators to solve real-world problems using technology.",
      sectionHeader: "Participants collaborate to develop innovative solutions in areas such as:",
      provides: [
        "Digital services",
        "Artificial intelligence",
        "Fintech",
        "Public sector innovation",
      ],
      extra: "Winning teams may receive mentorship, incubation support, and opportunities to scale their solutions.",
    },
    {
      icon: "ri-palette-line",
      iconColor: "#6b21d6",
      iconBg: "#f0fdf4",
      title: "iDICE Creathons",
      desc: "Creathons are innovation challenges designed specifically for the creative industry.",
      sectionHeader: "These programmes bring together creatives across fields such as:",
      provides: [
        "Film and storytelling",
        "Animation and gaming",
        "Music and digital media",
        "Design and visual arts",
      ],
      extra: "Creathons provide a platform for collaboration, innovation, and creative entrepreneurship.",
    },
    {
      icon: "ri-building-2-line",
      iconColor: "#0891b2",
      iconBg: "#f0f9ff",
      title: "Innovation and Creativity Centres (ICE Centres)",
      desc: "iDICE is establishing Innovation and Creativity Enterprise (ICE) Centres across Nigeria.",
      sectionHeader: "These centres will be located in:",
      provides: ["33 Universities", "33 Polytechnics"],
      secondSectionHeader: "The centres will serve as hubs for:",
      secondProvides: [
        "Student innovation",
        "Startup incubation",
        "Digital skills training",
        "Collaboration between academia and industry",
      ],
      extra: "ICE Centres will play a critical role in strengthening Nigeria's innovation pipeline and supporting the next generation of entrepreneurs.",
    },
  ];

  // FAQs data
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is the iDICE Debt Fund Programme?",
          a: "The iDICE Debt Fund Programme provides affordable financing to eligible technology and creative startups through two financing windows: the BOI–iDICE Debt Fund and the IsDB–iDICE Debt Fund, helping businesses access the capital they need to grow and scale."
        },
        {
          q: "What is the difference between the two funds?",
          a: "The BOI–iDICE Debt Fund is a conventional debt financing facility provided by the Bank of Industry, while the IsDB–iDICE Debt Fund is a Sharia-compliant, non-interest financing facility structured using the Murabaha model."
        },
        {
          q: "Who can apply?",
          a: "Eligible technology and creative startups operating in Nigeria that satisfy the programme's eligibility requirements."
        }
      ]
    },
    {
      category: "Eligibility",
      questions: [
        {
          q: "Which sectors are eligible?",
          a: "Eligible sectors include technology businesses such as FinTech, HealthTech, EdTech, AgriTech, ClimateTech, AI, Software, Cybersecurity, SaaS and Digital Services, as well as creative businesses including Film, Television, Music, Animation, Gaming, Fashion, Photography, Publishing, Performing Arts, Visual Arts, Digital Content and other qualifying enterprises."
        },
        {
          q: "Do I need to be a registered business?",
          a: "Yes. Applicants must be registered business entities operating in Nigeria and meet the applicable eligibility criteria."
        },
        {
          q: "Can established businesses apply?",
          a: "Yes. Depending on the financing window and eligibility requirements, both startups and qualifying established technology or creative enterprises may be eligible."
        }
      ]
    },
    {
      category: "BOI–iDICE Debt Fund",
      questions: [
        {
          q: "How much financing can I access?",
          a: "Eligible businesses can access financing ranging from ₦10 million to ₦1 billion, subject to assessment and approval."
        },
        {
          q: "What is the interest rate?",
          a: "The facility carries a maximum interest rate of 10% per annum."
        },
        {
          q: "Is there a moratorium?",
          a: "Yes. Successful applicants may receive a moratorium of up to six months, subject to the approved facility terms."
        },
        {
          q: "How long is the repayment period?",
          a: "The repayment period is up to five years, depending on the approved facility."
        }
      ]
    },
    {
      category: "IsDB–iDICE Debt Fund",
      questions: [
        {
          q: "What is Murabaha financing?",
          a: "Murabaha (cost-plus-markup) is a Sharia-compliant financing model where the financier purchases an asset on behalf of the customer and resells it at an agreed price with a disclosed profit margin."
        },
        {
          q: "Is the IsDB–iDICE Debt Fund only for Muslims?",
          a: "No. The facility is open to all eligible Nigerian technology and creative startups, regardless of religion or background."
        },
        {
          q: "What can the financing be used for?",
          a: "The facility is primarily intended to finance productive business assets such as equipment, technology, creative infrastructure, and other eligible business assets."
        }
      ]
    },
    {
      category: "Applications",
      questions: [
        {
          q: "How do I apply?",
          a: "Applications for both funds can be submitted through the official application portal: idice.boi.ng"
        },
        {
          q: "Can I apply for the IsDB–iDICE Debt Fund through a bank?",
          a: "Yes. Applications may also be submitted through participating non-interest financial institutions, including Lotus Bank, SunTrust Bank, and Summit Bank. Additional partner institutions may be added over time."
        },
        {
          q: "Can I apply for both funds?",
          a: "Applicants should review the objectives and eligibility requirements of each financing window and apply for the fund that best suits their business needs."
        },
        {
          q: "Who can I contact for enquiries?",
          a: "For support, contact the Bank of Industry: Email: customercare@boi.ng | Telephone: 0700 225 5264"
        }
      ]
    }
  ];

  const howToApply = [
    {
      step: "01",
      icon: "ri-search-eye-line",
      title: "Review Eligibility",
      desc: "Review eligibility requirements for the programme",
    },
    {
      step: "02",
      icon: "ri-edit-2-line",
      title: "Complete Application",
      desc: "Complete the online application form",
    },
    {
      step: "03",
      icon: "ri-file-upload-line",
      title: "Submit Documents",
      desc: "Submit all required documentation",
    },
    {
      step: "04",
      icon: "ri-mail-check-line",
      title: "Await Confirmation",
      desc: "Await confirmation and next steps",
    },
  ];

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
          paddingTop: 130,
          paddingBottom: 80,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
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
                Opportunities Under{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #fdba74, #fb923c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  the iDICE Programme
                </span>
              </h1>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: 17,
                  lineHeight: 1.8,
                  maxWidth: 620,
                  margin: "0 auto 24px",
                }}
              >
                The iDICE programme delivers a range of initiatives designed to
                support entrepreneurs, innovators, and ecosystem actors across
                Nigeria's digital and creative sectors.
              </p>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  padding: "24px 32px",
                  maxWidth: 800,
                  margin: "0 auto",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    marginBottom: 12,
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  These initiatives provide opportunities for:
                </p>
                <div
                  className="d-flex flex-wrap gap-2 justify-content-center"
                  style={{ marginTop: 8 }}
                >
                  {[
                    "Skills development",
                    "Entrepreneurship training",
                    "Business development support",
                    "Ecosystem participation",
                    "Investment readiness",
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(249,115,22,0.2)",
                        color: "#fdba74",
                        padding: "6px 14px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    color: "#fb923c",
                    marginTop: 16,
                    fontSize: 13,
                    marginBottom: 0,
                  }}
                >
                  Applications for programmes are announced periodically and
                  will be published on this page.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Active Opportunities */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h2 className="title">Active Opportunities</h2>
              <p
                className="text-secondary"
                style={{ color: "#475569 !important" }}
              >
                Explore active programmes and funding facilities currently 
                accepting applications under the iDICE initiative.
              </p>
            </Col>
          </Row>

          <div className="d-flex flex-column gap-4">
            {activeOpportunities.map((opp, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  border: "1px solid #e2e8f0",
                  padding: "36px 40px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 16px 48px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    opp.iconColor;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#e2e8f0";
                }}
              >
                <Row className="align-items-start gy-4">
                  <Col lg={8}>
                    <div className="d-flex align-items-start gap-4">
                      <div
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 16,
                          background: opp.iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <i
                          className={opp.icon}
                          style={{ fontSize: 28, color: opp.iconColor }}
                        ></i>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <span
                            style={{
                              background: opp.tagBg,
                              color: opp.tagColor,
                              fontSize: 11,
                              fontWeight: 700,
                              padding: "4px 12px",
                              borderRadius: 20,
                              border: `1px solid ${opp.tagColor}30`,
                            }}
                          >
                            {opp.tag}
                          </span>
                          <span style={{ color: "#64748b", fontSize: 13 }}>
                            <i className="ri-calendar-line me-1"></i>
                            {opp.date}
                          </span>
                        </div>
                        <h3
                          className="fw-bold mb-2"
                          style={{ fontSize: 20, color: "#0f172a" }}
                        >
                          {opp.title}
                        </h3>
                        {opp.fundSize && (
                          <span
                            style={{
                              background: "#eef2ff",
                              color: "#4f46e5",
                              fontSize: 11,
                              fontWeight: 600,
                              padding: "3px 10px",
                              borderRadius: 20,
                              display: "inline-block",
                              marginBottom: 12,
                            }}
                          >
                            {opp.fundSize}
                          </span>
                        )}
                        {opp.fundingTag && (
                          <span
                            style={{
                              background: "#eef2ff",
                              color: "#4f46e5",
                              fontSize: 11,
                              fontWeight: 600,
                              padding: "3px 10px",
                              borderRadius: 20,
                              display: "inline-block",
                              marginBottom: 12,
                              marginLeft: 8,
                            }}
                          >
                            {opp.fundingTag}
                          </span>
                        )}
                        <div
                          style={{
                            color: "#1e293b",
                            fontSize: 15,
                            lineHeight: 1.7,
                          }}
                        >
                          {opp.desc}
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div
                      style={{
                        background: "#f8fafc",
                        borderRadius: 12,
                        padding: 20,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "#475569",
                          letterSpacing: 0.5,
                          marginBottom: 12,
                        }}
                      >
                        Key highlights:
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {opp.provides.map((p, j) => (
                          <li
                            key={j}
                            className="d-flex align-items-center gap-2 mb-2"
                          >
                            <i
                              className="ri-check-line"
                              style={{
                                color: opp.iconColor,
                                fontSize: 14,
                                flexShrink: 0,
                              }}
                            ></i>
                            <span style={{ fontSize: 13, color: "#334155" }}>
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3">
                        {opp.external ? (
                          <a
                            href={opp.ctaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary w-100 py-2 rounded-pill fw-semibold"
                            style={{
                              fontSize: 14,
                              background:
                                "linear-gradient(135deg, #f97316, #ea580c)",
                              border: "none",
                            }}
                          >
                            {opp.cta}{" "}
                            <i className="ri-external-link-line ms-1"></i>
                          </a>
                        ) : (
                          <Link
                            to={opp.ctaLink}
                            className="btn btn-outline-primary w-100 py-2 rounded-pill fw-semibold"
                            style={{ fontSize: 14 }}
                          >
                            {opp.cta}{" "}
                            <i className="ri-arrow-right-line ms-1"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closed Opportunities */}
      {closedOpportunities.length > 0 && (
        <section className="section" style={{ background: "#fff" }}>
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center" data-aos="fade-up">
                <h2 className="title">Closed Opportunities</h2>
                <p
                  className="text-secondary"
                  style={{ color: "#475569 !important" }}
                >
                  These programmes have closed for applications. Stay tuned for 
                  future application windows.
                </p>
              </Col>
            </Row>

            <div className="d-flex flex-column gap-4">
              {closedOpportunities.map((opp, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  style={{
                    background: "#fafafa",
                    borderRadius: 20,
                    border: "1px solid #e2e8f0",
                    padding: "36px 40px",
                    opacity: 0.85,
                    transition: "all 0.3s",
                  }}
                >
                  <Row className="align-items-start gy-4">
                    <Col lg={8}>
                      <div className="d-flex align-items-start gap-4">
                        <div
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 16,
                            background: opp.iconBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i
                            className={opp.icon}
                            style={{ fontSize: 28, color: opp.iconColor }}
                          ></i>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                            <span
                              style={{
                                background: opp.tagBg,
                                color: opp.tagColor,
                                fontSize: 11,
                                fontWeight: 700,
                                padding: "4px 12px",
                                borderRadius: 20,
                                border: `1px solid ${opp.tagColor}30`,
                              }}
                            >
                              {opp.tag}
                            </span>
                            <span style={{ color: "#64748b", fontSize: 13 }}>
                              <i className="ri-calendar-line me-1"></i>
                              {opp.date}
                            </span>
                          </div>
                          <h3
                            className="fw-bold mb-2"
                            style={{ fontSize: 20, color: "#0f172a" }}
                          >
                            {opp.title}
                          </h3>
                          {opp.fundingTag && (
                            <span
                              style={{
                                background: "#eef2ff",
                                color: "#4f46e5",
                                fontSize: 11,
                                fontWeight: 600,
                                padding: "3px 10px",
                                borderRadius: 20,
                                display: "inline-block",
                                marginBottom: 12,
                              }}
                            >
                              {opp.fundingTag}
                            </span>
                          )}
                          <div
                            style={{
                              color: "#1e293b",
                              fontSize: 15,
                              lineHeight: 1.7,
                            }}
                          >
                            {opp.desc}
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div
                        style={{
                          background: "#f1f5f9",
                          borderRadius: 12,
                          padding: 20,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "#475569",
                            letterSpacing: 0.5,
                            marginBottom: 12,
                          }}
                        >
                          Key highlights:
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {opp.provides.map((p, j) => (
                            <li
                              key={j}
                              className="d-flex align-items-center gap-2 mb-2"
                            >
                              <i
                                className="ri-check-line"
                                style={{
                                  color: opp.iconColor,
                                  fontSize: 14,
                                  flexShrink: 0,
                                }}
                              ></i>
                              <span style={{ fontSize: 13, color: "#334155" }}>
                                {p}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3">
                          {opp.external ? (
                            <a
                              href={opp.ctaLink}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-outline-secondary w-100 py-2 rounded-pill fw-semibold"
                              style={{ fontSize: 14 }}
                            >
                              {opp.cta}{" "}
                              <i className="ri-external-link-line ms-1"></i>
                            </a>
                          ) : (
                            <Link
                              to={opp.ctaLink}
                              className="btn btn-outline-secondary w-100 py-2 rounded-pill fw-semibold"
                              style={{ fontSize: 14 }}
                            >
                              {opp.cta}{" "}
                              <i className="ri-arrow-right-line ms-1"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Upcoming and Ongoing Initiatives */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h2 className="title">Upcoming and Ongoing Initiatives</h2>
              <p
                className="text-secondary"
                style={{ color: "#475569 !important" }}
              >
                Explore the various programmes being rolled out under the iDICE
                initiative.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {upcomingInitiatives.map((initiative, i) => (
              <Col lg={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "32px",
                    height: "100%",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 12px 32px rgba(0,0,0,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      initiative.iconColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e2e8f0";
                  }}
                >
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: initiative.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className={initiative.icon}
                        style={{ fontSize: 24, color: initiative.iconColor }}
                      ></i>
                    </div>
                    <h3
                      className="fw-bold mb-0"
                      style={{
                        fontSize: 18,
                        lineHeight: 1.4,
                        color: "#0f172a",
                      }}
                    >
                      {initiative.title}
                    </h3>
                  </div>
                  <p
                    className="mb-3"
                    style={{ fontSize: 14, lineHeight: 1.7, color: "#334155" }}
                  >
                    {initiative.desc}
                  </p>

                  {initiative.sectionHeader && (
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: initiative.iconColor,
                        marginBottom: 8,
                      }}
                    >
                      {initiative.sectionHeader}
                    </p>
                  )}
                  {initiative.provides && (
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {initiative.provides.map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: initiative.iconBg,
                            color: initiative.iconColor,
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {initiative.secondSectionHeader && (
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: initiative.iconColor,
                        marginBottom: 8,
                        marginTop: 12,
                      }}
                    >
                      {initiative.secondSectionHeader}
                    </p>
                  )}
                  {initiative.secondProvides && (
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {initiative.secondProvides.map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: initiative.iconBg,
                            color: initiative.iconColor,
                            padding: "4px 12px",
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {initiative.extra && (
                    <div
                      className="mt-2"
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        marginBottom: 0,
                        color: "#475569",
                      }}
                    >
                      {initiative.extra}
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How to Apply */}
      <section className="section" style={{ background: "#fff" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6
                className="subtitle text-primary fw-bold text-uppercase mb-2"
                style={{ color: "#f97316" }}
              >
                Application Process
              </h6>
              <h2 className="title">How to Apply</h2>
              <p
                className="text-secondary"
                style={{ color: "#475569 !important" }}
              >
                Applications for each initiative are conducted through
                designated application portals. All official calls for
                applications will be published on this page and through iDICE
                communication channels.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {howToApply.map((step, i) => (
              <Col
                lg={3}
                md={6}
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    borderRadius: 20,
                    padding: 32,
                    textAlign: "center",
                    height: "100%",
                    border: "1px solid #e2e8f0",
                    position: "relative",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#fef3e2";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#f8fafc";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#e2e8f0";
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 20,
                      fontSize: 38,
                      fontWeight: 900,
                      color: "#f97316",
                      opacity: 0.35,
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "#fef3e2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <i
                      className={step.icon}
                      style={{ fontSize: 26, color: "#f97316" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: "#0f172a" }}>
                    {step.title}
                  </h5>
                  <p
                    className="mb-0"
                    style={{ fontSize: 14, lineHeight: 1.7, color: "#475569" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center" data-aos="fade-up">
              <h6
                className="subtitle text-primary fw-bold text-uppercase mb-2"
                style={{ color: "#f97316" }}
              >
                Frequently Asked Questions
              </h6>
              <h2 className="title">FAQs</h2>
              <p
                className="text-secondary"
                style={{ color: "#475569 !important" }}
              >
                Find answers to common questions about the iDICE Debt Fund 
                Programme.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {faqs.map((category, idx) => (
              <Col lg={6} key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    padding: "28px 30px",
                    border: "1px solid #e2e8f0",
                    height: "100%",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      fontSize: 18,
                      color: "#0f172a",
                      borderBottom: "2px solid #f97316",
                      paddingBottom: 12,
                    }}
                  >
                    {category.category}
                  </h4>
                  {category.questions.map((faq, i) => (
                    <div key={i} style={{ marginBottom: i < category.questions.length - 1 ? 16 : 0 }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#1e293b",
                          marginBottom: 4,
                        }}
                      >
                        {faq.q}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#475569",
                          marginBottom: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Opportunities;