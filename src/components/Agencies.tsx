//image
import { Col, Container, Row } from "react-bootstrap";
import boiLogo from "../assets/images/brand-logo/boi-logo.png";
import afdbLogo from "../assets/images/brand-logo/AfDB-logo.jpg";
import afdLogo from "../assets/images/brand-logo/AFD-logo.png";
import isdbLogo from "../assets/images/brand-logo/IsDB-logo.jpg";

const Agencies = () => {
  return (
    <section className="section bg-light overflow-hidden">
      <Container>
        <Row className="justify-content-center mb-5 mt-4">
          <Col lg={8} className="text-center" data-aos="fade-up">
            <h6 className="subtitle text-primary fw-bold text-uppercase mb-3">Partners</h6>
            <h2 className="title">Executing Agency & Co-Financiers</h2>
            <p className="text-muted fs-17">
              The iDICE programme is powered by a strategic partnership between the Federal Government of Nigeria and leading international development finance institutions.
            </p>
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

        {/* Co-Financiers Title */}
        <Row className="mb-4">
          <Col data-aos="fade-right">
            <h3 className="fw-bold h4 mb-0">Co-Financiers</h3>
            <hr className="w-25 border-primary border-2 opacity-100 mt-2" />
          </Col>
        </Row>

        {/* Financiers Grid */}
        <Row className="g-4">
          {[
            {
              logo: afdbLogo,
              name: "African Development Bank (AfDB)",
              text: "A regional multilateral development finance institution established to contribute to the economic development and social progress of its member countries. AfDB has been involved with a number of societal interventions across Nigeria.",
              delay: 100
            },
            {
              logo: afdLogo,
              name: "Agence Française de Développement (AFD)",
              text: "Also known as the French Development Agency, AFD seeks to fund, support and accelerate transitions to a more sustainable world, partnering with Nigeria in key sectors like digital and creative innovation.",
              delay: 200
            },
            {
              logo: isdbLogo,
              name: "Islamic Development Bank (IsDB)",
              text: "A multilateral Development Bank whose mission is to promote social and economic development. With 128 projects in Nigeria, IsDB has financed infrastructure development, human capital and agriculture.",
              delay: 300
            }
          ].map((item, idx) => (
            <Col lg={4} key={idx} data-aos="fade-up" data-aos-delay={item.delay}>
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 border-0 transition-hover">
                <div className="p-3 bg-light rounded-4 mb-4 text-center" style={{ height: "140px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.logo} alt={item.name} className="img-fluid" style={{ maxHeight: "80px" }} />
                </div>
                <h5 className="fw-bold mb-3">{item.name}</h5>
                <p className="text-muted fs-15 mb-0">
                  {item.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Agencies;
