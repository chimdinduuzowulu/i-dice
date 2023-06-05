//images
import logoMid from "../assets/images/logo-mid.png";

import { Col, Container, Row } from "react-bootstrap";
const About = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <h2 className="title text-primary fw-bold">About iDICE</h2>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col>
            <img src={logoMid} alt="" className="mx-auto d-block" />
          </Col>
        </Row>

        <Row className="text-center justify-content-center fs-18 mb-5">
          <Col md={8}>
            <p>
              The{" "}
              <span className="fw-bold">
                Investment in Digital and Creative Enterprises Program (iDICE)
              </span>{" "}
              is a Federal Government of Nigeria initiative promoting investment
              in digital and creative industries. It is part of Nigeria’s
              efforts to build back better, greener, and more inclusively,and to
              create more sustainable jobs for its youthful population.
            </p>
            <p>
              The <span className="fw-bold">$617.7 million</span> program
              targets Nigerians aged 15 to 35 years who are involved in
              innovative, early-stage, technology-enabled start-ups or in
              creative sector micro, small and medium sized enterprises. The
              program is co-financed by the Federal Government of Nigeria
              (through the Bank of Industry), African Development Bank (AfDB),
              the Agence Française de Développement (AFD) and the Islamic
              Development Bank (IsDB).
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <h3 className="subtitle fw-bold text-primary">
              Program Objectives
            </h3>
            <p className="fs-18">The iDICE Program aims to:</p>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <div className="work-box px-lg-5 text-center mb-5 mb-lg-0">
              <div className="work-icon bg-soft-secondary mb-4">
                <i className="mdi mdi-hand-heart-outline"></i>
              </div>
              <p className="fs-18 fw-bold">
                Harness Nigeria's youth talent pool (from ages 15 to 35 years)
                and equip them with tech and creative skills to increase their
                employability
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="work-box px-lg-5 text-center mb-5 mb-lg-0">
              <div className="work-icon bg-soft-secondary mb-4">
                <i className="mdi mdi-head-cog-outline"></i>
              </div>
              <p className="fs-18 fw-bold">
                Foster innovation, and support the emergence of more
                entrepreneurs; supporting their growth and unlocking their
                potential to create employment; and
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="work-box px-lg-5 text-center mb-5 mb-lg-0">
              <div className="work-icon bg-soft-secondary mb-4">
                <i className="mdi mdi-clipboard-check-multiple-outline"></i>
              </div>
              <p className="fs-18 fw-bold">
                Support enactment of enabling regulatory frameworks and policies
                for new businesses and innovative ventures.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
