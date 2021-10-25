import Dashboard from "../Componentes/admin/Dashboard.js";
import Hour from "../Componentes/admin/Hour.js";
import ModiHour from "../Componentes/admin/ModiHour.js";

const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  {
    path: "/admin/wod-dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/admin/hour", exact: true, name: "Hour", component: Hour },
  /* {
     path: "/WODs",
     exact: true,
     name: "Wods",
     component: ViewWods,
   }, */

   { path: "/admin/modihour", exact: true, name: "ModiHour", component: ModiHour }, 


];

export default routes;
