import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido, ingrese un correo.")
    .required("Email es un campo obligatorio"),
  password: Yup.string().required("Password es un campo requerido")
});
const submitForm = (values, history) => {
  console.log("llege a axios", history);
  axios
    .post("http://localhost:8080/login", values)
    .then(res => {
      if (res.data.result === "success") {
        sessionStorage.setItem("TOKEN_KEY", res.data.token);
        swal("Success!", res.data.message, "success").then(value => {
          history.push("/dashboard");
        });
      } else if (res.data.result === "error") {
        swal("Error!", res.data.message, "error");
      }
    })
    .catch(error => {
      swal("Error!", "Error inesperado", "error");
    });
};
const FormLogin = () => {
  let history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          await submitForm(values, history);
          setSubmitting(false);
        }}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={
                  errors.email && touched.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              {errors.email && touched.email && (
                <small id="passwordHelp" className="text-danger">
                  {errors.email}
                </small>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  errors.password && touched.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              {errors.password && touched.password && (
                <small id="passwordHelp" className="text-danger">
                  {errors.password}
                </small>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              Ingresar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
