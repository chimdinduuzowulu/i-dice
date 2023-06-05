import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//images
import heroImg from "../../assets/images/heros/hero-hackathon.png";
const Hero4 = () => {
  return (
    <section className="hero-4">
      <div className="bg-overlay-img"></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            {/* TODO: Add iDice png logo */}
            {/* <div className="avatar avatar-xl rounded-circle bg-soft-light text-white shadow-sm mb-4">
              <i className="mdi mdi-shield-lock mb-0 h2"></i>
            </div> */}
            <h1 className="hero-title text-white fw-bold mb-4 display-5">
              Investment in <span className="text-primary">Digital</span> and{" "}
              <span className="text-primary">Creative</span> Enterprises
            </h1>
            <p className="text-white-50 mb-4 pb-2 fs-20">
              A Federal Government of Nigeria initiative promoting Investment in
              Digital and Creative Industries
            </p>
            {/* <p className="text-white-50 mb-5"><i className="mdi mdi-lock-check fs-20 me-2 text-success"></i> At vero eos et accusamus et iusto odio dignissimos.</p> */}
            <Link to="#about" className="btn btn-lg btn-primary">
              More Info{" "}
              <i className="mdi mdi-arrow-right-thin ms-1 fs-22 right-arrow"></i>
            </Link>
          </Col>

          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src={heroImg} alt="" className="img-fluid d-block mx-auto" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero4;
