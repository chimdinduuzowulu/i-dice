//image
import { Col, Container, Row } from "react-bootstrap";
import boiLogo from "../assets/images/brand-logo/boi-logo.png";
import afdbLogo from "../assets/images/brand-logo/AfDB-logo.jpg";
import afdLogo from "../assets/images/brand-logo/AFD-logo.png";
import isdbLogo from "../assets/images/brand-logo/IsDB-logo.jpg";

const Agencies = () => {
  return (
    <section className="section">
      <Container>
        <Row className="justify-content-center mb-2">
          <Col md={8} lg={6} className="text-center">
            <h2 className="title text-primary">Agencies</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={12} className="mb-4">
            <Row>
              <Col>
                <h3 className="text-muted mb-1">Executing Agency</h3>
                <img src={boiLogo} alt="" className="img-fluid d-block my-5" />
                <h4 className="mb-3 fs-20 fw-bold">Bank of Industry (BOI)</h4>
              </Col>
            </Row>

            <div className="d-flex my-3 fs-18">
              <div>
                <p>
                  The Federal Government of Nigeria appointed the Bank of
                  Industry (BOI) to serve as the Executing Agency for the iDICE
                  program. As the largest and most successful Development
                  Finance Institute (DFI) in Nigeria, BOI is responsible for the
                  coordination and supervision of iDICE from inception till
                  execution. The selection of BOI as the Executing Agency is
                  based on its experience in implementing and operating similar
                  FGN programs and its credit worthiness with a Long-Term
                  National Rating of AA+ by Fitch (2020).
                </p>

                <p>
                  BOI has executed a number of impactful programs such as the
                  AFDB $100 million SME financing program which funded over 40
                  SMEs in various sectors (agribusiness, manufacturing,
                  hospitality & tourism, construction, food and beverages
                  sectors), and generated over 20,000 direct jobs. BOI is one of
                  the administering agencies for the World Bank’s US$ 750
                  million COVID-19 Action Recovery and Economic Stimulus Program
                  (NG-CARES), a program set up to mitigate the effect of the
                  pandemic on farmers, small business, the poor and vulnerable.
                </p>

                <p>
                  The Bank of Industry is also the executing agency for the
                  FGN’s MSME Survival Fund (first rollout equivalent of US$
                  121.9 million) that was set up in 2020 as part of the Economic
                  Sustainability Plan to support and protect businesses from
                  vulnerabilities brought about by the COVID-19 pandemic. It
                  also plays the same role for the Government Enterprise
                  Empowerment Program, which was launched in 2016, to offer
                  interest and collateral free credit to MSMEs in the bottom of
                  the pyramid
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="text-muted mb-1">Co Financiers</h3>
          </Col>
        </Row>

        <Row className="align-items-center my-2 p-3">
          <Col lg={3}>
            <img
              src={afdbLogo}
              alt=""
              className="img-fluid d-block mx-auto ms-lg-auto"
              style={{ height: "120px", width: "auto" }}
            />
          </Col>
          <Col lg={9}>
            <h4 className="mb-3 fs-20 fw-bold">
              African Development Bank (AfDB)
            </h4>
            <p className="fs-18">
              The African Development Bank (AfDB) is a regional multilateral
              development finance institution established to contribute to the
              economic development and social prograss of its member countries.
              In line with its mission to reduce poverty rate in Africa, AfDB
              has been involved with a number of societal interventions in
              various key sectors across all states in Nigeria.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center my-2 p-3">
          <Col lg={3}>
            <img
              src={afdLogo}
              alt=""
              className="img-fluid d-block mx-auto ms-lg-auto"
              style={{ height: "120px", width: "auto" }}
            />
          </Col>
          <Col lg={9}>
            <h4 className="mb-3 fs-20 fw-bold">
              Agence française de développement (AFD)
            </h4>
            <p className="fs-18">
              Also known as the French Development Agency, AFD seeks to fund,
              support and accelerate transitions to a more sustainable world.
              The group has partnerned with the Federal Govenment of Nigeria in
              key sectors such as education, digital and creative innovation and
              governance through direct investments and financing major projects
              that support policies, capacity building and entreprenuership.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center my-2 p-3">
          <Col lg={3}>
            <img
              src={isdbLogo}
              alt=""
              className="img-fluid d-block mx-auto ms-lg-auto"
              style={{ height: "120px", width: "auto" }}
            />
          </Col>
          <Col lg={9}>
            <h4 className="mb-3 fs-20 fw-bold">
              Islamic Development Bank (IsDB)
            </h4>
            <p className="fs-18">
              The Islamic Development Bank is a multilateral Development Bank
              (MDB), whose mission is to promote social and economic development
              and deliver impact in its member countries and Muslim communities
              across the world. With 128 projects in Nigeria, the IsDB has
              financed infrastructure development, human capital and
              agriculture.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Agencies;
