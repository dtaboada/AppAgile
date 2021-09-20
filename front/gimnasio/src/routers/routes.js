import Dashboard from "../Componentes/admin/Dashboard.js";
import Hour from "../Componentes/admin/Hour.js";

const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/admin/hour", exact: true, name: "Hour", component: Hour },
];

export default routes;
