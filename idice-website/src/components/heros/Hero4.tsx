import { Container, Row, Col } from "react-bootstrap";
//images
import heroImg from "../../assets/images/heros/hero-hackathon.png";
const Hero4 = () => {
  return (
    <section className="hero-4">
      <div className="bg-overlay-img"></div>
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={6} className="order-2 order-lg-1">
            <div className="text-center text-lg-start">
              <span className="badge bg-white text-dark px-3 py-2 rounded-pill shadow-sm mb-3">
                iDICE Initiative
              </span>
              <h1 className="hero-title text-white fw-bold mb-3 display-5">
                Empowering Nigeria’s <span className="text-primary">Digital</span> and{" "}
                <span className="text-primary">Creative</span> Enterprises
              </h1>
            </div>
          </Col>

          <Col lg={6} className="order-1 order-lg-2">
            <div className="mt-2 mt-lg-0">
              <img
                src={heroImg}
                alt="iDICE hackathon"
                className="img-fluid d-block mx-auto rounded-4 shadow"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero4;
