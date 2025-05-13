import React from "react";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { Container, Row, Col, CardBody, Card, Button, Form, Label, Input, FormFeedback } from "reactstrap";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";
import avatar from "../../assets/images/users/avatar-1.jpg";
import { Link } from "react-router-dom";

const LockScreen = () => {

  //meta title
  document.title="Lock Screen | Skote - قالب مدیریتی و داشبورد Vite React ";

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
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6" xl="5">
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col xs="7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">صفحه قفل</h5>
                        <p>رمز عبور خود را وارد کنید تا قفل صفحه باز شود</p>
                      </div>
                    </Col>
                    <Col xs="5" className="align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="user-thumb text-center mb-4">
                        <img
                          src={avatar}
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
                        <Col xs="12" className="text-end">
                          <Button
                            color="primary"
                            className=" w-md "
                            type="submit"
                          >
                            باز کردن قفل
                          </Button>
                        </Col>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  شما نیستید ؟ بازگشت{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    {" "}
                   ورود{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. ساخته شده توسط{" "}
                  <i className="mdi mdi-heart text-danger" />  فاطمه کاظمی زاده
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default LockScreen;
