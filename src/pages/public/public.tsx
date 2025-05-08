import { lazy } from "react";
import { Route } from "react-router-dom";
import RoutesWithNotFound from "../../utilities/RoutesWithNotFound.utility";
import { PublicRoutes } from "../../routes/routes";

const Login = lazy(() => import("./Login/Login"));
const Benefits = lazy(()=> import("./Benefits/Benefits"))

function Public() {
  return (
    <RoutesWithNotFound>
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route path={PublicRoutes.BENEFITS} element={<Benefits />} />
    </RoutesWithNotFound>
  );
}

export default Public;
