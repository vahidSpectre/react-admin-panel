import React from "react";
import PropTypes from 'prop-types';
import { Col, Container, Row, Alert, Form, Label, Input, FormFeedback } from "reactstrap";

import { Link } from "react-router-dom";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import user from "../../assets/images/users/avatar-1.jpg";
import CarouselPage from "./CarouselPage";

const LockScreen2 = (props) => {

  //meta title
  document.title = "Lock Screen 2 | Skote - قالب مدیریتی و داشبورد Vite React ";

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required("لطفا رمز عبور خود را وارد کنید"),
    }),
    onSubmit: (values) => {
    }
  });
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0">
            <CarouselPage />
            <Col xl={3}>
              <div className="auth-full-page-content p-md-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5">
                      <Link to="/" className="d-block auth-logo">
                        <img
                          src={logoDark}
                          alt=""
                          height="18"
                          className="auth-logo-dark"
                        />
                        <img
                          src={logoLight}
                          alt=""
                          height="18"
                          className="auth-logo-light"
                        />
                      </Link>
                    </div>
                    <div className="my-auto">
                      <div>
                        <h5 className="text-primary">صفحه قفل</h5>
                        <p className="text-muted">
                          رمز عبور خود را وارد کنید تا قفل صفحه باز شود
                        </p>
                      </div>

                      <div className="mt-4">
                        <Form
                          className="form-horizontal"
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                        >
                          {props.error && props.error ? (
                            <Alert color="danger">{props.error}</Alert>
                          ) : null}

                          <div className="user-thumb text-center mb-4">
                            <img
                              src={user}
                              className="rounded-circle img-thumbnail avatar-md"
                              alt="thumbnail"
                            />
                            <h5 className="font-size-15 mt-3">سارا توسلی</h5>
                          </div>

                          <div className="mb-3">
                            <Label className="form-label">رمز عبور</Label>
                            <Input
                              name="password"
                              className="form-control"
                              placeholder="رمز عبور را وارد کنید"
                              type="password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.password || ""}
                              invalid={
                                validation.touched.password &&
                                validation.errors.password
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.password &&
                            validation.errors.password ? (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            ) : null}
                          </div>

                          <div className="text-end">
                            <button
                              className="btn btn-primary w-md"
                              type="submit"
                            >
                              {" "}
                              باز کردن قفل{" "}
                            </button>
                          </div>
                        </Form>
                        <div className="mt-5 text-center">
                          <p>
                           شما نیستید ؟ برگشت{" "}
                            <Link
                              to="pages-register-2"
                              className="fw-medium text-primary"
                            >
                              {" "}
                              ورود{" "}
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 mt-md-5 text-center">
                      <p className="mb-0">
                        © {new Date().getFullYear()} Skote. ساخته شده توسط{" "}
                        <i className="mdi mdi-heart text-danger"></i> 
                        فاطمه کاظمی زاده
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

LockScreen2.propTypes = {
  error: PropTypes.any,
};

export default LockScreen2;
