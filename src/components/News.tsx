//image
import { Col, Container, Row } from "react-bootstrap";
import boiLogo from "../assets/images/brand-logo/boi-logo.png";

const News = () => {
  return (
    <section className="section bg-light">
      <Container>
        <Row className="justify-content-center mb-2">
          <Col md={8} lg={6} className="text-center">
            <h2 className="title text-primary">News & Events</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={12} className="mb-4">
            <p className="fs-30 text-center">Coming soon...</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default News;
