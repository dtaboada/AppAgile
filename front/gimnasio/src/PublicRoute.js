import React from "react";
import { Route } from "react-router-dom";
import FrontedLayout from "./layouts/admin/frontend/FrontedLayout";

function PublicRoute({ ...rest }) {
  return <Route {...rest} render={(props) => <FrontedLayout {...props} />} />;
}

export default PublicRoute;
