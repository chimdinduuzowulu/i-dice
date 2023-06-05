import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

//home
const Home = React.lazy(() => import("../pages/Home"));

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
      //root route
      path: "/",
      element: <LoadComponent component={Home} />,
    },
  ]);
};

export default AllRoutes;
