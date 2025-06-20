import React from "react";
import { Card, CardBody, Col, Form, FormGroup, InputGroup, Label } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const BootstrapDatePicker = () => {
    return (
      <React.Fragment>
        <Col xl="6">
          <Card>
            <CardBody>
              <h4 className="card-title">انتخاب روز</h4>
              <p className="card-title-desc">
                نمونه هایی از datepicker بوت استرپ توییتر
              </p>

              <Form>
                <FormGroup className="mb-4">
                  <Label>عملکرد پیش فرض</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="form-group mb-4">
                  <Label>بسته شدن خودکار</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </div>

                <div className="form-group mb-4">
                  <label>تاریخ چندگانه</label>
                  <div className="input-group">
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        mode: "multiple",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </div>
                </div>

                <FormGroup className="mb-4">
                  <Label>محدوده زمانی</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        mode: "range",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="form-group mb-0">
                  <label>انتخابگر تاریخ خطی</label>
                  <Flatpickr
                    className="form-control d-block"
                    placeholder="dd M,yyyy"
                    options={{
                      inline: true,
                      altInput: true,
                      altFormat: "F j, Y",
                      dateFormat: "Y-m-d",
                    }}
                  />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
}

export default BootstrapDatePicker;