import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username demasiado pequeño!")
    .max(20, "Username es demasiado largo!")
    .required("Username es un campo requerido"),
  email: Yup.string()
    .email("Email invalido")
    .required("Email es un campo requerido"),
  password: Yup.string().required("Password es un campo requerido"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Ambas contraseñas deben ser iguales")
    .required("Confirmar Password es requerido")
});

class formRegister extends Component {
  submitForm = (values, history) => {
    axios
      .post("http://localhost:8080/register", values)
      .then(res => {
        if (res.data.result === "success") {
          swal("Success!", res.data.message, "success").then(value => {
            history.push("/");
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        swal("Error!", "Error inesperado", "error");
      });
  };

  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Username"
            className={
              errors.username && touched.username
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.username && touched.username ? (
            <small id="passwordHelp" className="text-danger">
              {errors.username}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
            className={
              errors.email && touched.email
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.email && touched.email ? (
            <small id="passwordHelp" className="text-danger">
              {errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Password"
            className={
              errors.password && touched.password
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.password && touched.password ? (
            <small id="passwordHelp" className="text-danger">
              {errors.password}
            </small>
          ) : null}
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            placeholder="Confirm Password"
            className={
              errors.confirm_password && touched.confirm_password
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.confirm_password && touched.confirm_password ? (
            <small id="passwordHelp" className="text-danger">
              {errors.confirm_password}
            </small>
          ) : null}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Crear usuario
            </button>
          </div>
        </div>
      </form>
    );
  };

  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirm_password: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          this.submitForm(values, this.props.history);
          setSubmitting(false);
        }}
        validationSchema={SignupSchema}
      >
        {props => this.showForm(props)}
      </Formik>
    );
  }
}

export default formRegister;
