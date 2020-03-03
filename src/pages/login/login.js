import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/layout";
import FormLogin from "../../components/formLogin/formLogin";

const login = () => {
  return (
    <Layout title="Iniciar Session">
      <FormLogin></FormLogin>
      <p className="mb-1">
        <a href="forgot-password.html">Olvide mi Contraseña</a>
      </p>
      <Link to="/register">
        <p className="mb-0">Registrarme</p>
      </Link>
    </Layout>
  );
};

export default login;
