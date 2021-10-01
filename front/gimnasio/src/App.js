import logo from "./logo.svg";
import "./App.css";
import PageHome from "./PageHome.js";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./auth/login";
import Register from "./auth/register";
import "bootstrap/dist/css/bootstrap.css";
import Page403 from "./Componentes/error/Page403";
import Page404 from "./Componentes/error/Page404";
import axios from "axios";
import AdminPrivateRoute from "./AdminPrivateRoute";
import masterLayout from "./layouts/admin/MasterLayout";

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
          <Route exact path="/" component={PageHome} />
          {/* <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
          /> */}

          <Route exact path="/" component={PageHome}></Route>
          <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404} />

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
              <Register path="/admin" name="Admin" />
            )}
          </Route>

          <AdminPrivateRoute />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
