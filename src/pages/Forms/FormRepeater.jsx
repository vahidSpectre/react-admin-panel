import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  Container,
  FormFeedback,
} from "reactstrap";

import { useFormik } from "formik";
import * as Yup from 'yup';

import Breadcrumbs from "../../components/Common/Breadcrumb";

const FormRepeater = () => {

  document.title = "Form Repeater | Skote - قالب مدیریتی و داشبورد Vite React "

  const [rows1, setRows1] = useState([{ id: 1, phone: "" }]);

  const handleAddRowNested = () => {
    const newRow = { id: Math.floor(Math.random() * (30 - 20)) + 20, phone: "" };
    setRows1([...rows1, newRow]);
  }

  const handleRemoveRow = (id) => {
    const updatedRows = rows1.filter((row) => row.id !== id);
    setRows1(updatedRows);
  }

  // Function to handle changes in input fields
  const handleInputChangeNested = (id, name, value) => {
    const updatedRows = rows1.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows1(updatedRows);
  };

  //Nested form
  const nestedForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "",
      msg: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("این فیلد الزامی است"),
      email: Yup.string()
        .email()
        .matches(/^(?!.*@[^,]*,)/)
        .required("لطفا آدرس اییمیل خود را وارد نمایید"),
      gender: Yup.string().required("این فیلد الزامی است"),
      msg: Yup.string().required("این فیلد الزامی است"),
    }),

    onSubmit: (value) => {
      nestedForm.resetForm();
    },
  });

  // Example
  const [formRows, setFormRows] = useState([
    { id: 1, name: "", email: "", subject: "", resume: "", message: "" }
  ]);
  const onAddFormRow = () => {
    const newRow = { id: Math.floor(Math.random() * (30 - 20)) + 20, name: "", email: "", subject: "", resume: "", message: "" };
    setFormRows([...formRows, newRow]);
  };

  const onDeleteFormRow = (id) => {
    const updatedRows = formRows.filter((row) => row.id !== id);
    setFormRows(updatedRows);
  };

  // Function to handle changes in input fields
  const handleInputChange = (id, name, value) => {
    const updatedRows = formRows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setFormRows(updatedRows);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="فرم ها" breadcrumbItem="تکرار کننده فرم" />
          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <h6 className="mb-4 card-title">مثال</h6>
                  <Form className="repeater" encType="multipart/form-data">
                    <div>
                      {(formRows || []).map((formRow, key) => (
                        <Row key={key}>
                          <Col lg={2} className="mb-3">
                            <label htmlFor="name">نام</label>
                            <input
                              type="text"
                              id="name"
                              name={`name_${formRow.id}`}
                              value={formRow.name}
                              onChange={(e) =>
                                handleInputChange(
                                  formRow.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              placeholder="نام را وارد کنید"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="email">ایمیل</label>
                            <input
                              type="email"
                              id="email"
                              name={`email_${formRow.id}`}
                              value={formRow.email}
                              onChange={(e) =>
                                handleInputChange(
                                  formRow.id,
                                  "email",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              placeholder="ایمیل را وارد کنید"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="subject">موضوع</label>
                            <input
                              type="text"
                              id="subject"
                              name={`subject_${formRow.id}`}
                              value={formRow.subject}
                              onChange={(e) =>
                                handleInputChange(
                                  formRow.id,
                                  "subject",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              placeholder="موضوع را وارد کنید"
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="resume">رزومه</label>
                            <input
                              type="file"
                              className="form-control"
                              id="resume"
                              name={`resume_${formRow.id}`}
                              value={formRow.resume}
                              onChange={(e) =>
                                handleInputChange(
                                  formRow.id,
                                  "resume",
                                  e.target.value
                                )
                              }
                            />
                          </Col>

                          <Col lg={2} className="mb-3">
                            <label htmlFor="message">پیام</label>
                            <textarea
                              id="message"
                              name={`message_${formRow.id}`}
                              value={formRow.message}
                              onChange={(e) =>
                                handleInputChange(
                                  formRow.id,
                                  "message",
                                  e.target.value
                                )
                              }
                              className="form-control"
                              placeholder="پیام را وارد کنید"
                            ></textarea>
                          </Col>

                          <Col lg={2} className="align-self-center">
                            <div className="d-grid">
                              <input
                                type="button"
                                className="btn btn-primary"
                                value="حذف"
                                onClick={() => onDeleteFormRow(formRow.id)}
                              />
                            </div>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <input
                      type="button"
                      className="btn btn-success mt-3 mt-lg-0"
                      value="افزودن"
                      onClick={() => onAddFormRow()}
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <h6 className="mb-4 card-title">تو در تو</h6>
                  <Form
                    className="outer-repeater"
                    onSubmit={nestedForm.handleSubmit}
                  >
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <div className="mb-3">
                          <Label htmlFor="formName">نام : </Label>
                          <Input
                            type="text"
                            name="name"
                            id="formName"
                            placeholder="نام خود را وارد کنید..."
                            className="form-control"
                            value={nestedForm.values.name}
                            onChange={nestedForm.handleChange}
                            onBlur={nestedForm.handleBlur}
                            invalid={
                              nestedForm.touched.name && nestedForm.errors.name
                                ? true
                                : false
                            }
                          />
                          {nestedForm.errors.name && nestedForm.touched.name ? (
                            <FormFeedback type="invalid">
                              {nestedForm.errors.name}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="formEmail">ایمیل :</Label>
                          <Input
                            type="email"
                            id="formEmail"
                            name="email"
                            placeholder="ایمیل خود را وارد کنید..."
                            className="form-control"
                            value={nestedForm.values.email}
                            onChange={nestedForm.handleChange}
                            onBlur={nestedForm.handleBlur}
                            invalid={
                              nestedForm.touched.email &&
                              nestedForm.errors.email
                                ? true
                                : false
                            }
                          />
                          {nestedForm.errors.email &&
                          nestedForm.touched.email ? (
                            <FormFeedback type="invalid">
                              {nestedForm.errors.email}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="inner-repeater mb-4">
                          <Label>شماره تلفن :</Label>
                          <table style={{ width: "100%" }}>
                            <tbody>
                              {(rows1 || []).map((formRow, key) => (
                                <tr key={key}>
                                  <td>
                                    <Row className="mb-2">
                                      <Col md="10" xs="8">
                                        <Input
                                          type="text"
                                          name={`phone${formRow.id}`}
                                          value={formRow.phone}
                                          className="inner form-control"
                                          placeholder="شماره تلفن خود را وارد کنید..."
                                          onChange={(e) =>
                                            handleInputChangeNested(
                                              formRow.id,
                                              "phone",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Col>
                                      <Col md="2" xs="4">
                                        <div className="d-grid">
                                          <Button
                                            color="primary"
                                            className="btn-block inner"
                                            id="unknown-btn"
                                            style={{ width: "100%" }}
                                            onClick={() =>
                                              handleRemoveRow(formRow.id)
                                            }
                                          >
                                            حذف
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <Button
                            onClick={() => {
                              handleAddRowNested();
                            }}
                            color="success"
                            className="mt-1"
                          >
                            افزودن عدد
                          </Button>
                        </div>

                        <div className="mb-3">
                          <Label className="d-block mb-3">جنسیت :</Label>
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="customRadioInline1"
                              className="form-check-input"
                              name="customRadioInline1 gender"
                              value={nestedForm.values.gender}
                              onChange={nestedForm.handleChange}
                              onBlur={nestedForm.handleBlur}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadioInline1"
                            >
                              مرد
                            </label>
                          </div>
                          &nbsp;
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              className="form-check-input"
                              id="customRadioInline2"
                              name="customRadioInline1 gender"
                              value={nestedForm.values.gender}
                              onChange={nestedForm.handleChange}
                              onBlur={nestedForm.handleBlur}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadioInline2"
                            >
                              زن
                            </label>
                          </div>
                          <div>
                            {nestedForm.errors.gender &&
                            nestedForm.touched.gender ? (
                              <FormFeedback type="invalid">
                                {nestedForm.errors.gender}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="formMessage">پیام :</Label>
                          <Input
                            type="textarea"
                            id="formMessage"
                            name="msg"
                            className="form-control"
                            rows="3"
                            placeholder="پیام را وارد کنید"
                            value={nestedForm.values.msg}
                            onChange={nestedForm.handleChange}
                            onBlur={nestedForm.handleBlur}
                            invalid={
                              nestedForm.touched.msg && nestedForm.errors.msg
                                ? true
                                : false
                            }
                          />
                          {nestedForm.errors.msg && nestedForm.touched.msg ? (
                            <FormFeedback type="invalid">
                              {nestedForm.errors.msg}
                            </FormFeedback>
                          ) : null}
                        </div>
                        <Button type="submit" color="primary">
                          ارسال
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormRepeater;
