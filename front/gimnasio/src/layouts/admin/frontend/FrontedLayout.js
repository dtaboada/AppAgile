import React from "react";
import publicRoutesList from "../../../routers/Publicroutelist.js";
import { Switch, Route } from "react-router";
import NavBar from "../../../Componentes/nav-bar";

const FrontedLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          {publicRoutesList.map((routedata, idx) => {
            return (
              routedata.component && (
                <Route
                  key={idx}
                  path={routedata.path}
                  exact={routedata.exact}
                  name={routedata.name}
                  render={(props) => <routedata.component {...props} />}
                />
              )
            );
          })}
        </Switch>
      </div>
    </div>
  );
};

export default FrontedLayout;
