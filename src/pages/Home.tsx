import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Faqs from "../components/Faqs";
import Features1 from "../components/Features1";
import Features2 from "../components/Features2";
import { Hero4 } from "../components/heros";
import HowItWork from "../components/HowItWork";
import { SiteNavbar } from "../components/navbar";
import Slider from "../components/Slider";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import ProgramComponents from "../components/ProgramComponents";
import Agencies from "../components/Agencies";
import News from "../components/News";
import Partnership from "../components/Partnership";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <SiteNavbar classname="navbar-light" isLogoDark={false} />
      {/* header and hero */}
      <div id="home">
        <Hero4 />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="components">
        <ProgramComponents />
      </div>
      <div id="agencies">
        {/* agencies */}
        <Agencies />
      </div>
      <div id="news">
        <News />
      </div>
      <div id="partnership">
        <Partnership />
      </div>
      <div id="contact">
        {/* contact */}
        <Contact />
      </div>
      <div id="faq">
        {/* faqs */}
        <Faqs />
      </div>
      {/* footer */}
      <Footer />
      {/* back to top button */}
      <BackToTop />
    </>
  );
};

export default Home;
