import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Opportunities from "../pages/Opportunities";
import NewsPage from "../pages/NewsPage";
import NewsDetail from "../pages/NewsDetail";
import GalleryPage from "../pages/GalleryPage";
import FAQsPage from "../pages/FAQsPage";
// import BlogPage from "../pages/BlogPage";
// import BlogDetail from "../pages/BlogDetail";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;