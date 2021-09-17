import React from "react";
import "./page-home.css";
import ReactDOM from "react-dom";
import NavBar from "./Componentes/nav-bar";
import { BrowserRouter as Router } from "react-router-dom";

class PageHome extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
      </Router>
    );
  }
}

export default PageHome;
