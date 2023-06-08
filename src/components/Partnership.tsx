//image
import { Col, Container, Row } from "react-bootstrap";

const Partnership = () => {
  return (
    <section className="section partnership-bg">
      <Container>
        <Row className="justify-content-center mb-2">
          <Col md={8} lg={6} className="text-center">
            <h2 className="title text-primary">Partnership</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={8} className="mb-4 offset-2">
            <h3 className="text-muted text-center">
              Let's shape the future together{" "}
            </h3>
            <p className="fs-20 text-center">
              Join our growing community of enablers as we redefine the tech and
              creative landscape in Nigeria through expertise, innovation and
              financial investment.
              <br />
              To partner, kindly send an email to{" "}
              <a href="mailto:partnerships@idice.org">partnerships@idice.org</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partnership;
