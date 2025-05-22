import { lazy } from "react";
import { Route } from "react-router-dom";
import RoutesWithNotFound from "../../utilities/RoutesWithNotFound.utility";
import { PublicRoutes } from "../../routes/routes";

const Login = lazy(() => import("./Login/Login"));
// const Benefits = lazy(() => import("./Benefits/Benefits"));
const KeepAlive = lazy(() => import("./KeepAlive/KeepAlive"));
const AffiliateLevelOne = lazy(() => import("./AffiliateSystem/AffiliateProgram"));

function Public() {
  return (
    <RoutesWithNotFound>
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      {/* <Route path={PublicRoutes.BENEFITS} element={<Benefits />} /> */}
      <Route path={PublicRoutes.KEEP_ALIVE} element={<KeepAlive />} />
      <Route path={PublicRoutes.BENEFITS} element={<AffiliateLevelOne />} />
    </RoutesWithNotFound>
  );
}

export default Public;
