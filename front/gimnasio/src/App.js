import "./App.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PublicRoute from "./PublicRoute";

// import MasterLayout from "./layouts/admin/MasterLayout";

import Login from "./auth/login";
import Register from "./auth/register";
import AdminPrivateRoute from "./AdminPrivateRoute.js";
import Page403 from "./Componentes/error/Page403";
import Page404 from "./Componentes/error/Page404";

// import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <div class="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={PageHome} />
          <Route exact path="/contacto" component={Contacto} /> */}
          <AdminPrivateRoute path="/admin" name="Admin" />
          <PublicRoute path="/" name="PageHome" />
          <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404} />

          {/* <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
          /> */}

          {/* <Route exact path="/" component={PageHome}></Route> */}
          {/* <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route> */}
          <Route path="/login">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/" />
            ) : (
              <Register />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
