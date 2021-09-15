import logo from "./logo.svg";
import "./App.css";
import PageHome from "./PageHome.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div class="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PageHome}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
