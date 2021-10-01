import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import swal from "sweetalert";
import masterLayout from "./layouts/admin/MasterLayout";

function AdminPrivateRoute({ ...rest }) {
  const history = useHistory();
  const [Authenticated, setAutenthicated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/checkingAuthenticated").then((res) => {
      if (res.status === 200) {
        setAutenthicated(true);
      }
      setLoading(false);
    });

    return () => {
      setAutenthicated(false);
    };
  }, []);

  axios.interceptors.response.use(
    undefined,
    function axiosRetryInterceptor(err) {
      if (err.response.status === 401) {
        swal("Desautorizarado", err.response.data.message, "warning");
        history.push("/");
      }
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        // Acceso denegado
        swal(
          "Acceso solo para el administrador",
          error.response.data.message,
          "warning"
        );
        history.push("/403");
      } else if (error.response.status === 404) {
        // Pagina no funciona
        swal("404 Error", "Url/Page Not Found", "warning");
        history.push("/404");
      }
      return Promise.reject(error);
    }
  );

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <Route
      {...rest}
      render={({ props, location }) =>
        Authenticated ? (
          <masterLayout {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default AdminPrivateRoute;
