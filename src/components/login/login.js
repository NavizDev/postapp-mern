import React from "react";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import Form from "./form";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido")
    .required("Email es requerido"),
  password: Yup.string().required("Password es requerido")
});

export default function login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Post</b>App
          </a>
        </div>
        {/* /.login-logo */}

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <Form />

            {/* /.social-auth-links */}
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}

const submitForm = (values, history) => {
  axios
    .post("http://localhost:8080/register", values)
    .then(res => {
      if (res.data.result === "success") {
        swal("Success!", res.data.message, "success").then(value => {
          history.push("/login");
        });
      } else if (res.data.result === "error") {
        swal("Error!", res.data.message, "error");
      }
    })
    .catch(error => {
      swal("Error!", "Error inesperado", "error");
    });
};
