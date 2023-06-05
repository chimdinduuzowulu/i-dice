import { Container, Row, Col } from "react-bootstrap";

const ProgramComponents = () => {
  return (
    <section className="section cta-bg">
      <div className="bg-overlay bg-dark"></div>
      <Container>
        <Row className="text-center justify-content-center mb-5">
          <Col>
            <h2 className="text-primary fw-bold">Program Components</h2>
            <p className="text-muted fs-18">
              The program is broken down across three components.
            </p>
          </Col>
        </Row>

        <Row className="g-3">
          <Col sm={12} lg={4} className="text-white">
            <div className="my-3 px-4">
              <h3>Skills and Enterprise Development</h3>
              <hr />
              <p className="fs-18 text-muted">
                It aims to equip youth between 15-35 years with tech and
                creative skills, generate high-potential startups and build a
                community of developers, software engineers, designers and
                thought leaders. They would also be linked to jobs by scaling up
                collaboration with major tech companies, creative enterprises
                and other private sector players. Under this component, an
                enabling environment/ infrastructure will be provided so that
                tech and creative entrepreneurship can thrive.{" "}
              </p>
            </div>
          </Col>

          <Col sm={12} lg={4} className="text-white">
            <div className="my-3 px-4">
              <h3>
                Access to Appropriate Financing for tech and creative start-ups
              </h3>
              <hr />
              <p className="fs-18 text-muted">
                This component will focus on funding and nurturing technology
                and creative enterprises, including startups and SMEs. The
                objective of this component is to bridge existing gaps in
                private equity and investment in Nigeria.
              </p>
            </div>
          </Col>

          <Col sm={12} lg={4} className="text-white">
            <div className="my-3">
              <h3>Enabling Environment and Institutional support</h3>
              <hr />
              <p className="fs-18 text-muted">
                In collaboration with key MDAs, policies which seek to protect
                startups and investors in the tech and creative space will be
                enacted.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramComponents;
