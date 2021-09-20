import React from "react";
import Bar from "./bar.js";
import Sidebar from "./sidebar.js";
import Footer from "./footer.js";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";

import routes from "../../routers/routes.js";
import { Switch, Route, Redirect } from "react-router";

const masterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Bar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <Switch>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  )
                );
              })}
              <Redirect from="/admin" to="/admin" />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default masterLayout;
