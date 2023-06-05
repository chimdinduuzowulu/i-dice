import logoLight from "../assets/images/logo-light.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <>
      <section className="footer bg-dark">
        <Container>
          <Row>
            <Col lg={4} className="text-center text-lg-start">
              <div className="footer-logo mb-4">
                <Link to="#">
                  <img src={logoLight} alt="" />
                </Link>
              </div>
              <Link to="#" className="text-white">
                Hello@coderthemes.com
              </Link>
              <p className="text-white">+01 ( 1234 567 890 )</p>

              <h5 className="fs-18 mb-3 text-white">Follow Us</h5>
              <ul className="list-inline mt-5">
                <li className="list-inline-item">
                  <Link to="#;" className="footer-social-icon">
                    <i className="mdi mdi-facebook"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#;" className="footer-social-icon">
                    <i className="mdi mdi-twitter"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#;" className="footer-social-icon">
                    <i className="mdi mdi-linkedin"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#;" className="footer-social-icon">
                    <i className="mdi mdi-skype"></i>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg={4}>
              <h5 className="fs-22 mb-3 fw-semibold text-white">Quick Links</h5>
              <ul className="list-unstyled footer-nav">
                <li>
                  <Link to="#;" className="footer-link">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    Popular Campaign
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5 className="fs-22 mb-3 fw-semibold text-white">
                Relevant Links
              </h5>
              <ul className="list-unstyled footer-nav">
                <li>
                  <Link to="#;" className="footer-link">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link to="#;" className="footer-link">
                    Popular Campaign
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer-tagline">
        <Container>
          <Row className="justify-content-between py-2">
            <Col>
              <p className="text-white opacity-75 mb-0 fs-14 text-center">
                © {year}{" "}
                <Link to="https://wootlab.ng" className="text-primary">
                  Wootlab Innovations
                </Link>
                . All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
