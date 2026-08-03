import { useEffect } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min";

import "./assets/css/materialdesignicons.min.css";
import "./assets/fonts/remixicon/remixicon.css";
import "./assets/scss/style.scss";
import "aos/dist/aos.css";

import AOS from "aos";

//routes
import Routes from "./routes/Routes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Routes />;
}

export default App;
