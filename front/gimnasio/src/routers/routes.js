import Dashboard from "../Componentes/admin/Dashboard.js";
import Hour from "../Componentes/admin/Hour.js";
import EditEjercicios from "../Componentes/admin/EditEjercicios.js";
import EditHorarios from "../Componentes/admin/EditHorarios.js"
import Beneficio from "../Componentes/admin/Beneficio"
import EditBeneficio from "../Componentes/admin/EditBeneficio"
import Noticia from "../Componentes/admin/Noticia.js";
import ViewNoticias from "../Componentes/frontend/ViewNoticias.js";
import EditNoticias from "../Componentes/admin/EditNoticias.js";
import VerNoticias from "../Componentes/frontend/VerNoticias.js";

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
  {
    path: "/admin/edit-horarios/:id",
    exact: true,
    name: "EditHorarios",
    component: EditHorarios,
  },
  {
    path: "/admin/beneficios",
    exact: true,
    name: "beneficios",
    component: Beneficio,
  },

  {
    path: "/admin/edit-beneficio/:id",
    exact: true,
    name: "EditBeneficios",
    component: EditBeneficio,
  },
  {
    path: "/admin/noticias",
    exact: true,
    name: "noticias",
    component: Noticia,
  },
  {
    path: "/admin/ViewNoticias",
    exact: true,
    name: "noticias",
    component: ViewNoticias,
  },
  {
    path: "/admin/edit-noticias/:id",
    exact: true,
    name: "EditNoticias",
    component: EditNoticias,
  },
  {
    path: "/admin/VerNoticias",
    exact: true,
    name: "VerNoticias",
    component: VerNoticias,
  },

  /* {
     path: "/WODs",
     exact: true,
     name: "Wods",
     component: ViewWods,
   }, */
];

export default routes;
