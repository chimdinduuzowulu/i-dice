import faq from "../assets/images/faq.png";
import faqs from "../data/faq.json";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faqs = () => {
  return (
    <section className="section bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <h2 className="title text-primary">Frequently Asked Questions</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={3}>
            <img src={faq} alt="" className="img-fluid d-block mx-auto" />
          </Col>

          <Col lg={8} className="offset-lg-1">
            <Accordion
              defaultActiveKey="0"
              className="accordion-flush faqs-accordion mt-4 mt-lg-0"
            >
              {faqs ? (
                faqs.map((q, i) => (
                  <Accordion.Item eventKey={q.title} key={i}>
                    <Accordion.Header className="h2">
                      {q.title}
                    </Accordion.Header>
                    <Accordion.Collapse eventKey="" className="show">
                      <Accordion.Body className="text-dark fs-18">
                        {q.content}
                      </Accordion.Body>
                    </Accordion.Collapse>
                  </Accordion.Item>
                ))
              ) : (
                <div></div>
              )}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
