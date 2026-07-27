import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

interface FAQ {
  title: string;
  content: string;
  category?: string;
}

const allFaqs: FAQ[] = [
  {
    category: "General",
    title: "What is the iDICE Program?",
    content:
      "iDICE stands for Investment in Digital and Creative Enterprises. It is an initiative of the Federal Government of Nigeria to promote entrepreneurship and innovation in the digital technology and creative industries in the context of efforts to create jobs, especially for young people. iDICE responds to specific gaps in Nigeria's technology and creativity ecosystem and is designed to address constraints in these industries including access to risk capital and innovation ecosystem capacity challenges faced by Start-ups.",
  },
  {
    category: "Funding & Finance",
    title: "Who is financing the iDICE program?",
    content:
      "The total Program cost is estimated at $618 million, out of which the African Development Bank is providing $170 million; the Agence Française de Développement, €100 million ($116 million); and the Islamic Development Bank $70 million in co-financing. The Bank of Industry (BOI) will provide $45 million as FGN's Counterpart contribution to be availed through loans for qualifying Start-ups. This financing is expected to leverage further equity investments from the private sector and institutional investors to the tune of $217 million.",
  },
  {
    category: "General",
    title: "What are the different intervention components of the iDICE program?",
    content:
      "The iDICE program has three main intervention components as follows:\n\ni. Enterprise and Skills Development: To equip youths with skills and nurture talents to generate high potential Start-ups; building a community of developers, software engineers, designers, thinkers, and tech talents and linking them to jobs in collaboration with selected Universities and Polytechnics, major technology companies, and other actors in the private sector. The Program will also support innovation in Artificial Intelligence and Internet of Things to incentivize discovery, Incubation and Acceleration, and nurturing Start-ups to be investable.\n\nii. Expanding Access to Finance: Promote funding and nurturing of Tech-enabled and Creative Sector Enterprises, including SMEs, to address existing funding gaps in Nigeria's debt, private equity and impact investment spaces. This will be done through two sub-components: DICE Funds, which seek to strengthen start-ups, early and growth stage enterprises through injection of equity and quasi equity capital, loans, training and capacity building for Start-ups, as well as support grants. Independent Fund Managers will be recruited competitively to run the venture capital funds.\n\niii. Enabling Environment and Institutional Support: Entails support to operationalise the National Start-up Act; Investment and export promotion activities for technology and creative businesses; Support for development of ICT national qualification framework; Revamping curricula and pedagogy for STEM and training for regulators.",
  },
  {
    category: "Eligibility & Applications",
    title: "Who are the primary targets of the iDICE program?",
    content:
      "iDICE targets Nigeria's young women and men (15-35 years), entrepreneurs, innovative early-stage growth technology-enabled ventures and creative sector micro, small and medium enterprises (MSMEs) as well as Enterprise Support Organizations (ESOs), including Hubs, Accelerators, Venture Capital, and Private Equity Firms. It also targets Federal, State and Private Universities and Polytechnics, and key Participating Federal Ministries, Departments and Agencies (MDAs).",
  },
  {
    category: "General",
    title: "How will the iDICE program benefit youth in Nigeria?",
    content:
      "The program is expected to create over 6 million jobs (552,000 direct and 5,580,000 indirect), especially for young people. Over 175,000 youths will be equipped with skills in digital technology and creative industries to foster innovation and support the emergence of more entrepreneurs. 75 Enterprise Support Organizations, 226 creative enterprises and 451 digital technology Startups will benefit from the Program. Overall, the economic benefits to be generated from the iDICE Program to the Nigerian economy are estimated at $6.4 billion.",
  },
  {
    category: "Eligibility & Applications",
    title: "What types of businesses will benefit from the iDICE program?",
    content:
      "a) Hardware, software, and technology-enabled companies catalysing disruption in traditional industries; and (b) Creative sector businesses cutting across gaming, animation, content distribution (music, film), social media among other innovations.",
  },
  {
    category: "Eligibility & Applications",
    title: "What are Enterprise Support Organizations (ESOs) and how will they benefit from the program?",
    content:
      "Enterprise Support Organizations (ESOs) such as hubs, incubators, accelerators, venture capital and private equity firms, Federal, State, and Private universities and polytechnics, will benefit from the program by receiving support to strengthen their capacity and better support startups and entrepreneurs.",
  },
  {
    category: "Eligibility & Applications",
    title: "How will the program support women-led startups in the technology and creative sectors?",
    content:
      "The program has a dedicated budget of US$1.14 million to nurture women-led startups in the technology and creative sectors.",
  },
  {
    category: "Eligibility & Applications",
    title: "How will beneficiaries be selected for the program?",
    content:
      "The direct beneficiaries of the program will be selected based on transparent selection criteria or competitive calls.",
  },
  {
    category: "General",
    title: "What is the geographic coverage of the program?",
    content:
      "The program will have a national coverage with all the 36 States of Nigeria and the Federal Capital Territory eligible to benefit from the program.",
  },
  {
    category: "General",
    title: "What digital skills programs will iDICE offer for youths?",
    content:
      "iDICE will provide an opportunity for 175,000 youths to benefit from a variety of digital skills programs, including virtual, hybrid, and onsite training. The programs will range from basic to advanced digital literacy training, with a focus on emerging technologies like Artificial Intelligence, Gaming, Animation, and Robotics. Selected universities, vocational centers, polytechnics, and hubs across Nigeria's key regions will serve as onsite training centers.",
  },
  {
    category: "Eligibility & Applications",
    title: "How can my University/Hub/Vocational Center become an iDICE training center, and what are the incentives?",
    content:
      "The iDICE Program will support 66 Digital and Creative Incubation Hubs/Innovation Centers of Excellence/Digital Satellite Labs in universities and polytechnics. To become an iDICE training center, your institution will be selected through a transparent gap analysis and mapping process. Institutions will be assessed based on various criteria, such as their location, access to youth, experience with similar interventions, willingness to provide space, among others. The incentives for selected institutions include access to iDICE resources, equipment, and support to become operational training centers.",
  },
  {
    category: "Eligibility & Applications",
    title: "How can my private sector/NGO organization partner with the iDICE Program if we specialize in digital skills training?",
    content:
      "The iDICE Program welcomes strong public-private partnerships and is excited to partner with organizations in the private sector on all Program components. To express interest in partnering with iDICE, please fill out the contact us form on the Program website.",
  },
  {
    category: "Funding & Finance",
    title: "How are the DICE Funds managed?",
    content:
      "The iDICE fund is managed by three main bodies. The independent Fund Manager(s) will be competitively recruited and responsible for all investment tasks, including screening, monitoring, and reporting. The Investment Committee, composed of at least 7 members and at least three independent industry experts, ensures that the Fund Manager's investments follow set criteria and limits. The Fund Advisory Board, composed of representatives of the main investors, advises on audit, compliance, and conflicts of interest, and makes decisions related to minor changes in fund documents and strategy.",
  },
  {
    category: "Funding & Finance",
    title: "How can my company become a fund manager for the DICE Funds?",
    content:
      "There will be a public call for expressions of interest from firms with fund management experience to bid for the opportunity to become one of the iDICE fund managers. Keep an eye on the Program website and local newspapers for updates.",
  },
  {
    category: "Funding & Finance",
    title: "How can I invest in the DICE Funds as a private investor?",
    content:
      "Private investors are welcome to invest in the DICE Funds as equal limited partners alongside the government. To express your interest, please fill out the 'contact us' form on the iDICE website and one of our agents will respond to you in due course.",
  },
  {
    category: "Funding & Finance",
    title: "I am a creative / I own a startup and I need funding for my upcoming Program, how will iDICE support?",
    content:
      "Details on how to apply for funding through the iDICE Program will be published on the Program website and made accessible to all interested parties. Entrepreneurs and businesses in the digital and creative industries who meet the eligibility criteria can send an enquiry email by filling out a form on the Program website. The form will require basic information about the applicant and their business, as well as a brief description of the Program for which funding is being sought.",
  },
  {
    category: "General",
    title: "Which agency is responsible for implementing the iDICE Program in Nigeria?",
    content:
      "The Bank of Industry (BOI) is the primary Executing Agency for the iDICE Program in Nigeria. The BOI is a Nigerian development finance institution that provides funding and technical support to entrepreneurs and businesses in various sectors of the economy. The BOI is responsible for the disbursement of funds, the provision of technical support, and the monitoring of Program activities and outcomes.",
  },
  {
    category: "General",
    title: "Will the BOI work with other implementing partners for the iDICE Program?",
    content:
      "Yes, the BOI would work with other implementing partners (such as fund managers, private equity firms, training institutions, incubators, accelerators etc.) to implement the various components of the iDICE Program, particularly in areas where the partners have specific expertise or experience and value add. The Program would also leverage additional funding from other sources, including the private sector and development partners, to support the growth of the digital and creative industries in Nigeria. The BOI will work closely with these partners to ensure that the Program is implemented effectively and efficiently.",
  },
  {
    category: "Eligibility & Applications",
    title: "What are the eligibility criteria for financing through the iDICE Program?",
    content:
      "Please check the iDICE website – www.idice.ng for regular updates. A transparent criterion will be published on eligibility of financing for entrepreneurs and businesses based on specific requirements depending on the type of financing being sought.",
  },
  {
    category: "Debt Funds",
    title: "What is the iDICE Debt Fund Programme?",
    content:
      "The iDICE Debt Fund Programme provides affordable financing to eligible technology and creative startups through two financing windows: the BOI–iDICE Debt Fund and the IsDB–iDICE Debt Fund, helping businesses access the capital they need to grow and scale.",
  },
  {
    category: "Debt Funds",
    title: "What is the difference between the two funds?",
    content:
      "The BOI–iDICE Debt Fund is a conventional debt financing facility provided by the Bank of Industry, while the IsDB–iDICE Debt Fund is a Sharia-compliant, non-interest financing facility structured using the Murabaha model.",
  },
  {
    category: "Debt Funds",
    title: "Who can apply for the Debt Funds?",
    content:
      "Eligible technology and creative startups operating in Nigeria that satisfy the programme's eligibility requirements.",
  },
  {
    category: "Debt Funds",
    title: "Which sectors are eligible?",
    content:
      "Eligible sectors include technology businesses such as FinTech, HealthTech, EdTech, AgriTech, ClimateTech, AI, Software, Cybersecurity, SaaS and Digital Services, as well as creative businesses including Film, Television, Music, Animation, Gaming, Fashion, Photography, Publishing, Performing Arts, Visual Arts, Digital Content and other qualifying enterprises.",
  },
  {
    category: "Debt Funds",
    title: "Do I need to be a registered business?",
    content:
      "Yes. Applicants must be registered business entities operating in Nigeria and meet the applicable eligibility criteria.",
  },
  {
    category: "Debt Funds",
    title: "Can established businesses apply?",
    content:
      "Yes. Depending on the financing window and eligibility requirements, both startups and qualifying established technology or creative enterprises may be eligible.",
  },
  {
    category: "Debt Funds",
    title: "How much financing can I access through the BOI–iDICE Debt Fund?",
    content:
      "Eligible businesses can access financing ranging from ₦10 million to ₦1 billion, subject to assessment and approval.",
  },
  {
    category: "Debt Funds",
    title: "What is the interest rate on the BOI–iDICE Debt Fund?",
    content:
      "The facility carries a maximum interest rate of 10% per annum.",
  },
  {
    category: "Debt Funds",
    title: "Is there a moratorium on the BOI–iDICE Debt Fund?",
    content:
      "Yes. Successful applicants may receive a moratorium of up to six months, subject to the approved facility terms.",
  },
  {
    category: "Debt Funds",
    title: "How long is the repayment period for the BOI–iDICE Debt Fund?",
    content:
      "The repayment period is up to five years, depending on the approved facility.",
  },
  {
    category: "Debt Funds",
    title: "What is Murabaha financing?",
    content:
      "Murabaha (cost-plus-markup) is a Sharia-compliant financing model where the financier purchases an asset on behalf of the customer and resells it at an agreed price with a disclosed profit margin.",
  },
  {
    category: "Debt Funds",
    title: "Is the IsDB–iDICE Debt Fund only for Muslims?",
    content:
      "No. The facility is open to all eligible Nigerian technology and creative startups, regardless of religion or background.",
  },
  {
    category: "Debt Funds",
    title: "What can the IsDB–iDICE Debt Fund financing be used for?",
    content:
      "The facility is primarily intended to finance productive business assets such as equipment, technology, creative infrastructure, and other eligible business assets.",
  },
  {
    category: "Debt Funds",
    title: "How do I apply for the Debt Funds?",
    content:
      "Applications for both funds can be submitted through the official application portal: idice.boi.ng",
  },
  {
    category: "Debt Funds",
    title: "Can I apply for the IsDB–iDICE Debt Fund through a bank?",
    content:
      "Yes. Applications may also be submitted through participating non-interest financial institutions, including Lotus Bank, SunTrust Bank, and Summit Bank. Additional partner institutions may be added over time.",
  },
  {
    category: "Debt Funds",
    title: "Can I apply for both Debt Funds?",
    content:
      "Applicants should review the objectives and eligibility requirements of each financing window and apply for the fund that best suits their business needs.",
  },
  {
    category: "Debt Funds",
    title: "Who can I contact for enquiries about the Debt Funds?",
    content:
      "For support, contact the Bank of Industry:\nEmail: customercare@boi.ng\nTelephone: 0700 225 5264",
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
                          padding: "20px 24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <div className="d-flex align-items-center gap-3">
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
                          <span
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              color: isOpen ? "#f97316" : "#1e293b",
                              lineHeight: 1.4,
                              transition: "color 0.2s",
                            }}
                          >
                            {faq.title}
                          </span>
                        </div>
                        <div
                          style={{
                            width: 28,
                            height: 28,
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
                              fontSize: 16,
                            }}
                          ></i>
                        </div>
                      </button>

                      {/* Answer */}
                      <div
                        style={{
                          maxHeight: isOpen ? 800 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.35s ease",
                        }}
                      >
                        <div
                          style={{
                            padding: "0 24px 20px 72px",
                            color: "#475569",
                            fontSize: 14,
                            lineHeight: 1.6,
                            whiteSpace: "pre-line",
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
                      fontWeight: 200,
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