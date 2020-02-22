import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("username is Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Both password need to be the same"
  )
});

class register extends Component {
  submitForm = (values, history) => {
    console.log({ values });
    axios
      .post("http://localhost:8080/register", values)
      .then(res => {
        console.log(res);
        if (res.data.result === "success") {
          swal("Success!", res.data.message, "success").then(value => {
            history.push("/login");
          });
        } else if (res.data.result === "error") {
          swal("Error!", res.data.message, "error");
        }
      })
      .catch(error => {
        console.log(error);
        swal("Error!", "Unexpected error", "error");
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
              Confirm
            </button>
          </div>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

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
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    );
  }
}

export default register;
