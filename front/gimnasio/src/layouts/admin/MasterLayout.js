import React from "react";
import Bar from "./bar.js";
import Sidebar from "./sidebar.js";
import Footer from "./footer.js";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";

const masterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Bar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>Master file</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default masterLayout;
