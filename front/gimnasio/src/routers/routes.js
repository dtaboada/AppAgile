import Dashboard from "../Componentes/admin/Dashboard.js";
import Hour from "../Componentes/admin/Hour.js";
import EditEjercicios from "../Componentes/admin/EditEjercicios.js";

const routes = [
  { path: "/admin", exact: true, name: "Admin" },
  {
    path: "/admin/wod-dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/admin/hour", exact: true, name: "Hour", component: Hour },
  {
    path: "/admin/edit-ejercicios/:id",
    exact: true,
    name: "EditEjercicios",
    component: EditEjercicios,
  },

  /* {
     path: "/WODs",
     exact: true,
     name: "Wods",
     component: ViewWods,
   }, */
];

export default routes;
