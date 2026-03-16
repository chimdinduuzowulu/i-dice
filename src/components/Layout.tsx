import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import { SiteNavbar } from "./navbar";

const Layout = () => {
    return (
        <>
            <SiteNavbar />
            <Outlet />
            <Footer />
            <BackToTop />
        </>
    );
};

export default Layout;