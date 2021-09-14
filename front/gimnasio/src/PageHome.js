import React from "react";
import "./page-home.css";
import ReactDOM from "react-dom";
import NavBar from "./Componentes/nav-bar";

class PageHome extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Hola</h1>
      </div>
    );
  }
}

export default PageHome;
