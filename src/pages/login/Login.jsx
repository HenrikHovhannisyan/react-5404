import React, { memo } from "react";
import Style from "./login.module.css";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section id="NoPage">
      <Header />
      <div className="container max_width">
        <div className="row ps-3 pe-3">
          <div className="col-12 col-lg-6 mx-auto border border-danger border-2 rounded-3 mt-5 p-3 shadow">
            <div className="text-center">
              <h2 className={Style.title}>Welcome back!</h2>
              <p className={Style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberPassword: false,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "This field is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.password) {
                  errors.password = "This field is required";
                } else if (values.password.length < 4) {
                  errors.password = "Password must be more than 4 characters";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  navigate("/");
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="form-text text-danger">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      autoComplete="on"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <div className="form-text text-danger">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            name="rememberPassword"
                            className="form-check-input"
                            id="rememberPassword"
                            value="ok"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberPassword"
                          >
                            Remember Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 text-start text-lg-end">
                        <Link className="text-danger">Forgot password?</Link>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn rightButtons_header_login m-0"
                    disabled={isSubmitting || !dirty}
                  >
                    Log in
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
