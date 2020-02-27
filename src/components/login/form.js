import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Required"),
  password: Yup.string().required("Required")
});

export default function Register() {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    }
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className={
            errors.email && touched.email
              ? "form-control is-invalid"
              : "form-control"
          }
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope" />
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className={
            errors.password && touched.password
              ? "form-control is-invalid"
              : "form-control"
          }
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
