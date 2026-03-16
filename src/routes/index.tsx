import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout";


//pages//pages
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));


const ProgramComponents = React.lazy(() => import("../components/ProgramComponents"));
const Agencies = React.lazy(() => import("../components/Agencies"));
const News = React.lazy(() => import("../components/News"));
const Partnership = React.lazy(() => import("../components/Partnership"));
const Contact = React.lazy(() => import("../components/Contact"));
const Faq = React.lazy(() => import("../components/Faqs"));

const loading = () => <div className=""></div>;

type LoadingComponentProps = {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadingComponentProps) => {
  return (
    <Suspense fallback={loading()}>
      <Component />
    </Suspense>
  );
};

const AllRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LoadComponent component={Home} /> },
        { path: "about", element: <LoadComponent component={About} /> },
        {
          path: "program-components",
          element: <LoadComponent component={ProgramComponents} />,
        },
        { path: "agencies", element: <LoadComponent component={Agencies} /> },
        { path: "news", element: <LoadComponent component={News} /> },
        {
          path: "partnership",
          element: <LoadComponent component={Partnership} />,
        },
        { path: "contact", element: <LoadComponent component={Contact} /> },
        { path: "faq", element: <LoadComponent component={Faq} /> },
      ],
    },
  ]);
};

export default AllRoutes;
