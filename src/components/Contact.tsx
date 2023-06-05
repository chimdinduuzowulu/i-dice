import { Container, Row, Col, Form, Card } from "react-bootstrap";
import countries from "../data/countries.json";

const Contact = () => {
  return (
    <section className="section bg-light" id="contact">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <h2 className="title text-primary">Contact Us</h2>
            <p className="text-muted">We'd like to hear from you</p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={8} className="offset-lg-2">
            <Card className="contact-form rounded-lg mt-4 mt-lg-0">
              <Card.Body className="p-5">
                <Form>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="formFirstName">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="formFirstName"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="formLastName">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="formLastName"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="formCompanyName">
                          Company Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="formCompanyName"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Form.Label htmlFor="formCompanyEmail">
                          Company Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          id="formCompanyEmail"
                          placeholder="Your company email"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <Form.Label htmlFor="formJobTItle">
                          Job Title
                        </Form.Label>
                        <Form.Control
                          type="text"
                          id="formJobTitle"
                          placeholder="Your job title"
                          required
                        />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3">
                        <Form.Label htmlFor="formJobTItle">Country</Form.Label>
                        <Form.Select
                          id="formCountry"
                          placeholder="Your country"
                          required
                        >
                          <option value="">Country</option>
                          {countries ? (
                            countries.map((c, i) => (
                              <option value={c.name}>{c.name}</option>
                            ))
                          ) : (
                            <option>No countries data</option>
                          )}
                        </Form.Select>
                      </div>
                    </Col>
                    <Col>
                      <div className="mb-4">
                        <Form.Label htmlFor="formComments">Comments</Form.Label>
                        <Form.Control
                          as="textarea"
                          style={{ height: "100px" }}
                          id="formComments"
                          placeholder="Your comments"
                          required
                        ></Form.Control>
                      </div>
                    </Col>
                  </Row>
                  <button type="submit" className="btn btn-primary">
                    Send Message <i className="mdi mdi-send ms-1"></i>
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
