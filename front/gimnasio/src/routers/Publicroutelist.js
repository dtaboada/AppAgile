import PageHome from "../Componentes/frontend/PageHome";
import Contacto from "../Componentes/frontend/Contacto";
import Page403 from "../Componentes/error/Page403";
import Page404 from "../Componentes/error/Page404";
import Login from "../auth/login";
import Register from "../auth/register";
import ViewWods from "../Componentes/frontend/ViewWods";
import ViewHour from "../Componentes/frontend/ViewHour";
import ViewVideos from "../Componentes/frontend/ViewDemo/ViewVideos";
import ViewBeneficios from "../Componentes/frontend/ViewBeneficios";
import Noticia from "../Componentes/admin/Noticia";
import ViewNoticias from "../Componentes/frontend/ViewNoticias";

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
  { path: "/noticias", exact: true, name: "Noticias", component: Noticia},
  { path: "/ViewNoticias", exact: true, name: "Noticias", component: ViewNoticias},


];

export default publicRoutesList;
