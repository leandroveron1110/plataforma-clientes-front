import { lazy } from "react";
import { Route } from "react-router-dom";
import RoutesWithNotFound from "../../utilities/RoutesWithNotFound.utility";
import { PublicRoutes } from "../../routes/routes";

const Login = lazy(() => import("./Login/Login"));

function Public() {
  return (
    <RoutesWithNotFound>
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
    </RoutesWithNotFound>
  );
}

export default Public;
