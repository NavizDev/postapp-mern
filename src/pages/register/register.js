import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/layout";
import FormRegister from "../../components/formRegister/formRegister";

const register = () => {
  return (
    <Layout title="Registro de Usuarios">
      <FormRegister></FormRegister>
      <Link to="/">
        <p className="mt-2">Iniciar Sesion</p>
      </Link>
    </Layout>
  );
};

export default register;
