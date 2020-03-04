import React from "react";
import { Formik } from "formik";
import { ProfileSchema } from "../../util/validationYUP";

const formProfile = () => {
  return (
    <Formik
      initialValues={{
        id: "",
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        phone: "",
        address: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log({ values });
        setSubmitting(false);
      }}
      validationSchema={ProfileSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <input type="hidden" name="id" value={values._id} />
            <div className="form-group has-feedback">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                value={values.email}
                type="email"
                placeholder="Enter Email"
                className={
                  errors.email && touched.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="email"
              />
              {errors.email && touched.email ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.email}
                </small>
              ) : null}
            </div>
            <div className="form-group has-feedback">
              <label htmlFor="username">Username</label>
              <input
                onChange={handleChange}
                value={values.username}
                type="text"
                placeholder="Enter UserName"
                className={
                  errors.username && touched.username
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="username"
              />
              {errors.username && touched.username ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.username}
                </small>
              ) : null}
            </div>
            <div className="form-group has-feedback">
              <label htmlFor="first_name">First Name</label>
              <input
                onChange={handleChange}
                value={values.first_name}
                type="text"
                placeholder="Enter First Name"
                className={
                  errors.first_name && touched.first_name
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="first_name"
              />
              {errors.first_name && touched.first_name ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.first_name}
                </small>
              ) : null}
            </div>
            <div className="form-group has-feedback">
              <label htmlFor="last_name">Last Name</label>
              <input
                onChange={handleChange}
                value={values.last_name}
                type="text"
                placeholder="Enter Last Name"
                className={
                  errors.last_name && touched.last_name
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="last_name"
              />
              {errors.last_name && touched.last_name ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.last_name}
                </small>
              ) : null}
            </div>
            <div className="form-group has-feedback">
              <label htmlFor="phone">phone number</label>
              <input
                onChange={handleChange}
                value={values.phone}
                type="text"
                className={
                  errors.phone && touched.phone
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="phone"
                placeholder="Enter phone number"
              />
              {errors.phone && touched.phone ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.phone}
                </small>
              ) : null}
            </div>
            <div className="form-group has-feedback">
              <label htmlFor="address">address</label>
              <textarea
                onChange={handleChange}
                value={values.address}
                className={
                  errors.address && touched.address
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="address"
                placeholder="Address"
              />
              {errors.address && touched.address ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.address}
                </small>
              ) : null}
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-block btn-primary"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default formProfile;
