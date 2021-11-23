import PageHome from "../Componentes/frontend/PageHome";
import Contacto from "../Componentes/frontend/Contacto";
import Page403 from "../Componentes/error/Page403";
import Page404 from "../Componentes/error/Page404";
import Login from "../auth/login";
import Register from "../auth/register";
import ViewWods from "../Componentes/frontend/ViewWods";
import ViewHour from "../Componentes/frontend/ViewHour";
<<<<<<< HEAD
import ViewVideos from "../Componentes/frontend/ViewDemo/ViewVideos";
=======
import ViewBeneficios from "../Componentes/frontend/ViewBeneficios";
>>>>>>> 4b1b19614bea1ccdc13af8fa22762e529853f8f5

const publicRoutesList = [
  { path: "/", exact: true, name: "Home", component: PageHome },
  { path: "/contacto", exact: true, name: "Contacto", component: Contacto },
  { path: "/DemoWod", exact: true, name: "ViewVideos", component: ViewVideos},
  { path: "/403", exact: true, name: "Page403", component: Page403 },
  { path: "/404", exact: true, name: "Page404", component: Page404 },
  { path: "/login", exact: true, name: "Login", component: Login },
  { path: "/register", exact: true, name: "Register", component: Register },
  { path: "/wods", exact: true, name: "Wods", component: ViewWods },
  { path: "/horarios", exact: true, name: "Horarios", component: ViewHour },
  { path: "/beneficios", exact: true, name: "Beneficios", component: ViewBeneficios},
];

export default publicRoutesList;
