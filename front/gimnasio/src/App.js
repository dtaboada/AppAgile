import logo from "./logo.svg";
import "./App.css";
import PageHome from "./PageHome.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/login";
import Register from "./auth/register";
import "bootstrap/dist/css/bootstrap.css";

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
