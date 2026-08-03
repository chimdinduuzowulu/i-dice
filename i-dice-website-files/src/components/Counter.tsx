import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Counter = () => {
  const counterFunc = () => {
    const counters = document.querySelectorAll(".counter_value");
    const speed = 200;
    counters.forEach((counter) => {
      const updateCount = () => {
        const targetValue = counter.getAttribute("data-target");
        if (targetValue === null) return;
        const target = +targetValue;
        const count = +counter.innerHTML;
        const inc = target / speed;
        if (count < target) {
          counter.innerHTML = Math.ceil(count + inc).toString();
          setTimeout(updateCount, 1);
        } else {
          counter.innerHTML = target.toLocaleString();
        }
      };
      updateCount();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counterFunc();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    const counterSection = document.getElementById("counter");
    if (counterSection) observer.observe(counterSection);
    return () => observer.disconnect();
  }, []);

  const counterItems = [
    {
      icon: "mdi-account-group-outline",
      color: "#f97316",
      target: 175000,
      suffix: "+",
      label: "Young Nigerians trained in digital and creative skills",
    },
    {
      icon: "mdi-rocket-launch-outline",
      color: "#6b21d6",
      target: 100,
      suffix: "+",
      label: "Startups and creative enterprises supported",
    },
    {
      icon: "mdi-briefcase-outline",
      color: "#3b82f6",
      target: 6000000,
      suffix: "+",
      label: "Jobs created, both directly and indirectly",
    },
    {
      icon: "mdi-currency-usd",
      color: "#fcb924",
      target: 6.4,
      suffix: "B",
      label: "Economic value unlocked (USD)",
    },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
        padding: "80px 0",
      }}
    >
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center" data-aos="fade-up">
            {/* <h6
              style={{
                color: "#fdba74",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 8,
              }}
            >
              Programme Impact
            </h6> */}
            <h2 style={{ color: "#fff", fontWeight: 800 }}>Expected Impact</h2>
            <p style={{ color: "#9d8aaa", marginBottom: 0, fontSize: 15 }}>
              The iDICE programme aims to drive transformative economic outcomes
              by strengthening Nigeria’s startup and innovation ecosystem
              nationwide.
            </p>
          </Col>
        </Row>
        <Row id="counter" className="g-4">
          {counterItems.map((item, idx) => (
            <Col sm={6} lg={3} key={idx}>
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 20,
                  padding: "32px 24px",
                  textAlign: "center",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    item.color;
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: `${item.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <i
                    className={`mdi ${item.icon}`}
                    style={{ fontSize: 28, color: item.color }}
                  ></i>
                </div>
                <h2
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 36,
                    margin: 0,
                  }}
                >
                  <span className="counter_value" data-target={item.target}>
                    0
                  </span>
                  {item.suffix}
                </h2>
                <p
                  style={{
                    color: "#9d8aaa",
                    fontSize: 13,
                    marginTop: 8,
                    marginBottom: 0,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Text positioned after the cards */}
        <Row className="justify-content-center mt-5">
          <Col
            lg={10}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "20px 32px",
                backdropFilter: "blur(4px)",
              }}
            >
              <p
                style={{
                  color: "#c4b5d0",
                  marginBottom: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
              >
                These outcomes position iDICE as a major catalyst for Nigeria's
                digital economy.{" "}
                <a
                  href="https://www.afdb.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fdba74",
                    fontWeight: 600,
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f97316";
                    (
                      e.currentTarget as HTMLElement
                    ).style.textDecorationThickness = "3px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fdba74";
                    (
                      e.currentTarget as HTMLElement
                    ).style.textDecorationThickness = "2px";
                  }}
                >
                  African Development Bank
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
