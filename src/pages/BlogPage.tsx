// This file is temporarily commented out. Uncomment when ready to use.
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import AOS from "aos";
// import NavBar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";
// import BackToTop from "../components/BackToTop";

// const WP_API =
//   process.env.REACT_APP_WP_API_URL ||
//   "https://your-wordpress-domain.com/wp-json/wp/v2";

// interface WPPost {
//   id: number;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   date: string;
//   slug: string;
//   _embedded?: {
//     "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
//     "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
//     author?: Array<{ name: string }>;
//   };
// }

// // Hardcoded fallback blog posts that match iDICE content
// const fallbackPosts = [
//   {
//     id: 101,
//     title: "How Nigeria's Startup Ecosystem is Evolving in 2024",
//     excerpt:
//       "Nigeria's startup ecosystem has witnessed remarkable growth over the past decade. With iDICE's intervention, a new era of structured support is empowering the next generation of innovators.",
//     date: "2024-03-10",
//     category: "Ecosystem",
//     author: "iDICE Team",
//     readTime: 5,
//   },
//   {
//     id: 102,
//     title: "The Role of Creative Industries in Nigeria's Economic Future",
//     excerpt:
//       "Nigeria's creative economy — spanning Nollywood, Afrobeats, gaming, animation, and fashion — represents a multi-billion dollar opportunity. iDICE is unlocking this potential.",
//     date: "2024-02-20",
//     category: "Creative Economy",
//     author: "iDICE Team",
//     readTime: 7,
//   },
//   {
//     id: 103,
//     title: "From Idea to Investment: The Startup Bridge Journey",
//     excerpt:
//       "The Startup Bridge Capacity Building Programme is helping early-stage Nigerian founders go from concept to pitch-ready. Here's what participants can expect.",
//     date: "2024-01-15",
//     category: "Programmes",
//     author: "iDICE Team",
//     readTime: 6,
//   },
//   {
//     id: 104,
//     title: "ICE Centres: Building Innovation Infrastructure Across Nigeria",
//     excerpt:
//       "iDICE is establishing Innovation and Creativity Enterprise (ICE) Centres in 66 higher institutions across Nigeria. Learn how these centres will transform the innovation landscape.",
//     date: "2023-12-05",
//     category: "Infrastructure",
//     author: "iDICE Team",
//     readTime: 8,
//   },
//   {
//     id: 105,
//     title: "Access to Finance: Breaking Barriers for Nigerian Startups",
//     excerpt:
//       "One of the biggest hurdles for Nigerian entrepreneurs has been access to early-stage capital. The DICE Funds are changing that equation — here's how.",
//     date: "2023-11-18",
//     category: "Finance",
//     author: "iDICE Team",
//     readTime: 6,
//   },
//   {
//     id: 106,
//     title: "Nigeria's BPO Opportunity: Why Global Companies Are Paying Attention",
//     excerpt:
//       "Business Process Outsourcing is one of Africa's fastest-growing industries. Nigeria, with its large English-speaking youth population, is perfectly positioned to lead.",
//     date: "2023-10-25",
//     category: "BPO",
//     author: "iDICE Team",
//     readTime: 5,
//   },
// ];

// const categoryColors: Record<string, { bg: string; color: string }> = {
//   Ecosystem: { bg: "#fef3e2", color: "#f97316" },
//   "Creative Economy": { bg: "#fff1f2", color: "#dc2626" },
//   Programmes: { bg: "#f0fdf4", color: "#6b21d6" },
//   Infrastructure: { bg: "#f5f3ff", color: "#7c3aed" },
//   Finance: { bg: "#fffbeb", color: "#d97706" },
//   BPO: { bg: "#f0f9ff", color: "#0891b2" },
//   Default: { bg: "#fef3e2", color: "#f97316" },
// };

// const BlogPage = () => {
//   const [posts, setPosts] = useState<WPPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [featured, setFeatured] = useState<WPPost | null>(null);

//   useEffect(() => {
//     AOS.refresh();
//     window.scrollTo(0, 0);

//     // Fetch from WordPress — using category slug "blog" if set, otherwise all posts
//     fetch(`${WP_API}/posts?_embed&per_page=20&orderby=date&order=desc`)
//       .then((res) => {
//         if (!res.ok) throw new Error();
//         return res.json();
//       })
//       .then((data: WPPost[]) => {
//         setPosts(data);
//         if (data.length > 0) setFeatured(data[0]);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   const useFallback = error || posts.length === 0;

//   const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "");
//   const formatDate = (d: string) =>
//     new Date(d).toLocaleDateString("en-NG", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });

//   // Derive categories from live data
//   const liveCats = Array.from(
//     new Set(
//       posts.flatMap(
//         (p) => p._embedded?.["wp:term"]?.[0]?.map((t) => t.name) || []
//       )
//     )
//   );
//   const fallbackCats = Array.from(
//     new Set(fallbackPosts.map((p) => p.category))
//   );
//   const categories = ["All", ...(useFallback ? fallbackCats : liveCats)];

//   const filteredLive = posts.filter((p) => {
//     if (activeCategory === "All") return true;
//     return p._embedded?.["wp:term"]?.[0]?.some(
//       (t) => t.name === activeCategory
//     );
//   });

//   const filteredFallback = fallbackPosts.filter(
//     (p) => activeCategory === "All" || p.category === activeCategory
//   );

//   const displayPosts = useFallback ? filteredFallback : filteredLive;
//   // Skip the first post for the rest of the grid (it's featured)
//   const gridPosts = !useFallback && featured ? displayPosts.slice(1) : displayPosts;

//   const getCatStyle = (cat: string) =>
//     categoryColors[cat] || categoryColors.Default;

//   return (
//     <>
//       <NavBar />

//       {/* Hero */}
//       <section
//         style={{
//           background: "linear-gradient(135deg, #0f0520 0%, #1a0a3c 60%, #2d0a6b 100%)",
//           paddingTop: 130,
//           paddingBottom: 80,
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: -80,
//             right: -80,
//             width: 360,
//             height: 360,
//             borderRadius: "50%",
//             background: "rgba(249,115,22,0.1)",
//             pointerEvents: "none",
//           }}
//         />
//         <Container style={{ position: "relative", zIndex: 2 }}>
//           <Row className="justify-content-center text-center">
//             <Col lg={8} data-aos="fade-up">
//               <h1
//                 style={{
//                   color: "#fff",
//                   fontWeight: 800,
//                   fontSize: "clamp(1.8rem, 4vw, 3rem)",
//                   marginBottom: 20,
//                 }}
//               >
//                 iDICE{" "}
//                 <span
//                   style={{
//                     background: "linear-gradient(90deg, #fdba74, #fb923c)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   Blog & Insights
//                 </span>
//               </h1>
//               <p
//                 style={{
//                   color: "#94a3b8",
//                   fontSize: 17,
//                   lineHeight: 1.8,
//                   maxWidth: 580,
//                   margin: "0 auto",
//                 }}
//               >
//                 Perspectives, updates, and insights on Nigeria's digital economy, creative industries, entrepreneurship, and the evolving innovation ecosystem.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="section" style={{ background: "#f8fafc" }}>
//         <Container>

//           {/* Featured Post (live WP only) */}
//           {!useFallback && featured && (
//             <div className="mb-5" data-aos="fade-up">
//               <Link to={`/blog/${featured.id}`} style={{ textDecoration: "none" }}>
//                 <div
//                   style={{
//                     borderRadius: 24,
//                     overflow: "hidden",
//                     background: "#fff",
//                     border: "1px solid #e2e8f0",
//                     display: "flex",
//                     flexDirection: "row",
//                     transition: "all 0.3s",
//                     minHeight: 320,
//                   }}
//                   onMouseEnter={(e) => {
//                     (e.currentTarget as HTMLElement).style.boxShadow =
//                       "0 20px 60px rgba(249,115,22,0.12)";
//                     (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
//                   }}
//                   onMouseLeave={(e) => {
//                     (e.currentTarget as HTMLElement).style.boxShadow = "none";
//                     (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
//                   }}
//                 >
//                   {/* Image half */}
//                   <div style={{ flex: "0 0 45%", position: "relative", overflow: "hidden" }}>
//                     {featured._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
//                       <img
//                         src={featured._embedded["wp:featuredmedia"][0].source_url}
//                         alt={featured.title.rendered}
//                         style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                       />
//                     ) : (
//                       <div
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           minHeight: 300,
//                           background: "linear-gradient(135deg,#fef3e2,#f0fdf4)",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <i className="ri-article-line" style={{ fontSize: 72, color: "#f9731630" }}></i>
//                       </div>
//                     )}
//                     <span
//                       style={{
//                         position: "absolute",
//                         top: 20,
//                         left: 20,
//                         background: "#f97316",
//                         color: "#fff",
//                         fontSize: 11,
//                         fontWeight: 700,
//                         padding: "5px 14px",
//                         borderRadius: 20,
//                         textTransform: "uppercase",
//                         letterSpacing: 0.8,
//                       }}
//                     >
//                       Featured
//                     </span>
//                   </div>
//                   {/* Text half */}
//                   <div
//                     style={{
//                       flex: 1,
//                       padding: "40px 44px",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
//                       <span
//                         style={{
//                           background: "#fef3e2",
//                           color: "#f97316",
//                           fontSize: 11,
//                           fontWeight: 700,
//                           padding: "4px 12px",
//                           borderRadius: 20,
//                         }}
//                       >
//                         {featured._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog"}
//                       </span>
//                       <small style={{ color: "#94a3b8", fontSize: 13 }}>
//                         <i className="ri-calendar-line me-1"></i>
//                         {formatDate(featured.date)}
//                       </small>
//                     </div>
//                     <h2
//                       style={{ fontWeight: 800, fontSize: "clamp(1.2rem,2vw,1.6rem)", color: "#1e293b", lineHeight: 1.35, marginBottom: 16 }}
//                       dangerouslySetInnerHTML={{ __html: featured.title.rendered }}
//                     />
//                     <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>
//                       {stripHtml(featured.excerpt.rendered).substring(0, 200)}...
//                     </p>
//                     <span style={{ color: "#f97316", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
//                       Read Article <i className="ri-arrow-right-line"></i>
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           )}

//           {/* Category Filter */}
//           {categories.length > 2 && (
//             <Row className="mb-5">
//               <Col>
//                 <div className="d-flex flex-wrap gap-2 justify-content-center">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => setActiveCategory(cat)}
//                       style={{
//                         border: activeCategory === cat ? "none" : "1px solid #e2e8f0",
//                         borderRadius: 30,
//                         padding: "9px 22px",
//                         fontSize: 13,
//                         fontWeight: 600,
//                         cursor: "pointer",
//                         background:
//                           activeCategory === cat
//                             ? "linear-gradient(135deg,#f97316,#ea580c)"
//                             : "#fff",
//                         color: activeCategory === cat ? "#fff" : "#64748b",
//                         transition: "all 0.2s",
//                         boxShadow:
//                           activeCategory === cat
//                             ? "0 4px 16px rgba(249,115,22,0.3)"
//                             : "none",
//                       }}
//                     >
//                       {cat}
//                     </button>
//                   ))}
//                 </div>
//               </Col>
//             </Row>
//           )}

//           {/* Loading */}
//           {loading && (
//             <Row className="justify-content-center py-5">
//               <Col md={4} className="text-center">
//                 <div className="spinner-border text-primary mb-3" style={{ width: 48, height: 48 }} role="status" />
//                 <p className="text-muted">Loading blog posts...</p>
//               </Col>
//             </Row>
//           )}

//           {/* Posts Grid */}
//           {!loading && (
//             <Row className="g-4">
//               {(useFallback ? displayPosts : gridPosts).map((post: any, idx: number) => {
//                 const thumb =
//                   post.image ||
//                   post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
//                 const cat =
//                   post.category ||
//                   post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
//                   "Blog";
//                 const title =
//                   typeof post.title === "string"
//                     ? post.title
//                     : post.title.rendered;
//                 const excerpt =
//                   typeof post.excerpt === "string"
//                     ? post.excerpt
//                     : stripHtml(post.excerpt.rendered);
//                 const author =
//                   post.author ||
//                   post._embedded?.author?.[0]?.name ||
//                   "iDICE Team";
//                 const readTime = post.readTime || 5;
//                 const catStyle = getCatStyle(cat);

//                 return (
//                   <Col lg={4} md={6} key={post.id} data-aos="fade-up" data-aos-delay={idx * 60}>
//                     <Link
//                       to={useFallback ? "/blog" : `/blog/${post.id}`}
//                       style={{ textDecoration: "none", display: "block", height: "100%" }}
//                     >
//                       <div
//                         style={{
//                           background: "#fff",
//                           borderRadius: 20,
//                           overflow: "hidden",
//                           height: "100%",
//                           display: "flex",
//                           flexDirection: "column",
//                           border: "1px solid #e2e8f0",
//                           transition: "all 0.3s ease",
//                         }}
//                         onMouseEnter={(e) => {
//                           (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
//                           (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(249,115,22,0.12)";
//                           (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
//                         }}
//                         onMouseLeave={(e) => {
//                           (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
//                           (e.currentTarget as HTMLElement).style.boxShadow = "none";
//                           (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
//                         }}
//                       >
//                         {/* Thumbnail */}
//                         {thumb ? (
//                           <img
//                             src={thumb}
//                             alt={title}
//                             style={{ width: "100%", height: 210, objectFit: "cover" }}
//                           />
//                         ) : (
//                           <div
//                             style={{
//                               height: 210,
//                               background: `linear-gradient(135deg, ${catStyle.bg}, #fff)`,
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                             }}
//                           >
//                             <i
//                               className="ri-article-line"
//                               style={{ fontSize: 56, color: `${catStyle.color}40` }}
//                             ></i>
//                           </div>
//                         )}

//                         <div className="p-4 d-flex flex-column flex-grow-1">
//                           {/* Category + date */}
//                           <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
//                             <span
//                               style={{
//                                 background: catStyle.bg,
//                                 color: catStyle.color,
//                                 fontSize: 11,
//                                 fontWeight: 700,
//                                 padding: "4px 12px",
//                                 borderRadius: 20,
//                                 textTransform: "uppercase",
//                                 letterSpacing: 0.5,
//                               }}
//                             >
//                               {cat}
//                             </span>
//                             <small style={{ color: "#94a3b8", fontSize: 12 }}>
//                               <i className="ri-calendar-line me-1"></i>
//                               {formatDate(post.date)}
//                             </small>
//                           </div>

//                           {/* Title */}
//                           <h5
//                             style={{ fontSize: 17, fontWeight: 700, color: "#1e293b", lineHeight: 1.5, marginBottom: 12 }}
//                             dangerouslySetInnerHTML={{ __html: title }}
//                           />

//                           {/* Excerpt */}
//                           <p
//                             className="text-muted flex-grow-1"
//                             style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}
//                           >
//                             {excerpt.substring(0, 130)}...
//                           </p>

//                           {/* Footer */}
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "space-between",
//                               paddingTop: 16,
//                               borderTop: "1px solid #f1f5f9",
//                             }}
//                           >
//                             <div className="d-flex align-items-center gap-2">
//                               <div
//                                 style={{
//                                   width: 30,
//                                   height: 30,
//                                   borderRadius: "50%",
//                                   background: "#fef3e2",
//                                   display: "flex",
//                                   alignItems: "center",
//                                   justifyContent: "center",
//                                 }}
//                               >
//                                 <i className="ri-user-line" style={{ color: "#f97316", fontSize: 14 }}></i>
//                               </div>
//                               <span style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>
//                                 {author}
//                               </span>
//                             </div>
//                             <span style={{ fontSize: 12, color: "#94a3b8" }}>
//                               <i className="ri-time-line me-1"></i>{readTime} min read
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   </Col>
//                 );
//               })}
//             </Row>
//           )}

//           {/* No posts */}
//           {!loading && displayPosts.length === 0 && (
//             <Row className="justify-content-center py-5">
//               <Col md={6} className="text-center">
//                 <i className="ri-article-line" style={{ fontSize: 64, color: "#cbd5e1", display: "block", marginBottom: 20 }}></i>
//                 <h4 className="fw-bold mb-3">No Posts Yet</h4>
//                 <p className="text-muted">Blog posts will appear here once published via WordPress.</p>
//               </Col>
//             </Row>
//           )}
//         </Container>
//       </section>

//       <Footer />
//       <BackToTop />
//     </>
//   );
// };

// export default BlogPage;

// This empty export statement prevents the isolatedModules error
export {};