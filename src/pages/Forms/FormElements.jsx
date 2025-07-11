import React, { useState } from "react";

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormElements = () => {

  //meta title
  document.title = "Form Elements | Skote - قالب مدیریتی و داشبورد Vite React "

  const [customchkPrimary, setcustomchkPrimary] = useState(true);
  const [customchkSuccess, setcustomchkSuccess] = useState(true);
  const [customchkInfo, setcustomchkInfo] = useState(true);
  const [customchkWarning, setcustomchkWarning] = useState(true);
  const [customchkDanger, setcustomchkDanger] = useState(true);
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true);
  const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true);
  const [customOutlineInfo, setcustomOutlineInfo] = useState(true);
  const [customOutlineWarning, setcustomOutlineWarning] = useState(true);
  const [customOutlineDanger, setcustomOutlineDanger] = useState(true);
  const [toggleSwitch, settoggleSwitch] = useState(true);
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="فرم ها" breadcrumbItem="عناصر فرم" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">ورودی های متنی</CardTitle>
                  <p className="card-title-desc">
                    در اینجا نمونه هایی از <code>.form control</code> اعمال می
                    شود هر HTML5 متنی <code>&lt;ورودی&gt;</code>{" "}
                    <code>نوع</code>
                  </p>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      متن
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="لورم ایپسوم"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-search-input"
                      className="col-md-2 col-form-label"
                    >
                      جستجو
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="search"
                        defaultValue="چگونه از وب عکس بگیرم"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-email-input"
                      className="col-md-2 col-form-label"
                    >
                      ایمیل
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="email"
                        defaultValue="bootstrap@example.com"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-url-input"
                      className="col-md-2 col-form-label"
                    >
                      آدرس سایت
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="url"
                        defaultValue="https://getbootstrap.com"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-tel-input"
                      className="col-md-2 col-form-label"
                    >
                      تلفن
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="tel"
                        defaultValue="(+98) 0919123456"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-password-input"
                      className="col-md-2 col-form-label"
                    >
                      رمز عبور
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="password"
                        defaultValue="hunter2"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-number-input"
                      className="col-md-2 col-form-label"
                    >
                      شماره
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue="42"
                        id="example-number-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-datetime-local-input"
                      className="col-md-2 col-form-label"
                    >
                      تاریخ و زمان
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="datetime-local"
                        defaultValue="2019-08-19T13:45:00"
                        id="example-datetime-local-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-date-input"
                      className="col-md-2 col-form-label"
                    >
                      تاریخ
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="date"
                        defaultValue="1402-08-19"
                        id="example-date-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-month-input"
                      className="col-md-2 col-form-label"
                    >
                      ماه
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="month"
                        defaultValue="1402-08"
                        id="example-month-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-week-input"
                      className="col-md-2 col-form-label"
                    >
                      هفته
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="week"
                        defaultValue="1402-W33"
                        id="example-week-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-time-input"
                      className="col-md-2 col-form-label"
                    >
                      زمان
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="time"
                        defaultValue="13:45:00"
                        id="example-time-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-color-input"
                      className="col-md-2 col-form-label"
                    >
                      رنگ
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control form-control-color mw-100"
                        type="color"
                        defaultValue="#556ee6"
                        id="example-color-input"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">انتخاب</label>
                    <div className="col-md-10">
                      <select className="form-control">
                        <option>انتخاب</option>
                        <option>انتخاب زیاد</option>
                        <option>انتخاب کم</option>
                      </select>
                    </div>
                  </Row>
                  <Row>
                    <label className="col-md-2 col-form-label">
                      فهرست های داده
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="تهران" />
                        <option value="مشهد" />
                        <option value="ایلام" />
                        <option value="اصفهان" />
                        <option value="قزوین" />
                      </datalist>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Siسایز بندیzing</CardTitle>
                  <p className="card-title-desc">
                    ارتفاع را با استفاده از className like تنظیم کنید{" "}
                    <code>.form-control-lg</code> و{" "}
                    <code>.form-control-sm</code>.
                  </p>
                  <div>
                    <Row>
                      <Col lg={6}>
                        <div>
                          <label className="form-label">ورودی پیش فرض</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Default input"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <div className="mt-4">
                          <label className="form-label">ورودی کوچک</label>
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            placeholder=".form-control-sm"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mt-4">
                          <label className="form-label">ورودی بزرگ</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder=".form-control-lg"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">ورودی های محدوده</CardTitle>
                  <p className="card-title-desc">
                    Create custom{" "}
                    <code>&lt;نوع ورودی=&quot;محدوده&ldquo;&gt;</code>
                    کنترل ها با <code>.form range</code>
                  </p>

                  <Row>
                    <Col lg={6}>
                      <div>
                        <Label htmlFor="customRange1" className="form-label">
                          محدوده نمونه
                        </Label>
                        <Input
                          type="range"
                          className="form-range"
                          id="customRange1"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <Label htmlFor="disabledRange" className="form-label">
                          Eange غیر فعال
                        </Label>
                        <Input
                          type="range"
                          className="form-range"
                          id="disabledRange"
                          disabled
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col lg={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">حداقل و حداکثر</h5>
                        <p className="card-title-desc">
                          ورودی های محدوده دارای مقادیر ضمنی برای min و max-0
                          هستند و به ترتیب 100
                        </p>
                        <input
                          type="range"
                          className="form-range"
                          min="0"
                          max="5"
                          id="customRange2"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">مراحل</h5>
                        <p className="card-title-desc">
                          به طور پیش فرض، محدوده ورودی "snap" را به مقادیر صحیح
                          وارد می کند. به این را تغییر دهید، می توانید یک{" "}
                          <code>گام</code> را مشخص کنید ارزش
                        </p>
                        <input
                          type="range"
                          className="form-range"
                          min="0"
                          max="5"
                          id="customRange2"
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle>چک باکس ها</CardTitle>

                  <Row>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">
                          <i className="mdi mdi-arrow-right text-primary mr-1"></i>{" "}
                          چک باکس های فرم
                        </h5>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            چک باکس فرم
                          </label>
                        </div>
                        <div className="form-check form-check-end">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck2"
                          >
                            چک باکس های فرم
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">
                          <i className="mdi mdi-arrow-right text-primary mr-1"></i>{" "}
                          چک باکس های فرم به راست
                        </h5>
                        <div className="form-check form-check-right mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="CustomCheck1"
                          />
                          <label className="form-check-label">
                            چک باکس فرم به راست
                          </label>
                        </div>

                        <div className="form-check form-check-right">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck2"
                          >
                            چک باکس فرم علامت زده شده سمت راست
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary"></i>{" "}
                          رنگ های چک باکس های فرم
                        </h5>
                        <p className="sub-header mb-4">
                          className <code>.form-check-* </code> را برای یک رنگ
                          اضافه کنید چک باکس ها
                        </p>

                        <div>
                          <div className="form-check form-check-primary mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor1"
                              checked={customchkPrimary}
                              onChange={() => {
                                setcustomchkPrimary(!customchkPrimary);
                              }}
                            />

                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor1"
                            >
                              چک باکس اولیه
                            </label>
                          </div>
                          <div className="form-check form-check-success mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor2"
                              checked={customchkSuccess}
                              onChange={() => {
                                setcustomchkSuccess(!customchkSuccess);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor2"
                            >
                              چک باکس موفقیت
                            </label>
                          </div>
                          <div className="form-check form-check-info mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor3"
                              checked={customchkInfo}
                              onChange={() => {
                                setcustomchkInfo(!customchkInfo);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor3"
                            >
                              چک باکس اطلاعات
                            </label>
                          </div>
                          <div className="form-check form-check-warning mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor4"
                              checked={customchkWarning}
                              onChange={() => {
                                setcustomchkWarning(!customchkWarning);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor4"
                            >
                              چک باکس هشدار
                            </label>
                          </div>
                          <div className="form-check form-check-danger">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheckcolor5"
                              checked={customchkDanger}
                              onChange={() => {
                                setcustomchkDanger(!customchkDanger);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheckcolor5"
                            >
                              چک باکس خطر
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary"></i>{" "}
                          طرح چک باکس های فرم
                        </h5>
                        <p className="sub-header mb-4">
                          اضافه کردن className{" "}
                          <code>.form چک باکس طرح کلی</code> و
                          <code>.form را علامت بزنید * </code> را برای یک جعبه
                          انتخاب رنگ
                        </p>

                        <div>
                          <div className="form-check form-checkbox-outline form-check-primary mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor1"
                              checked={customOutlinePrimary}
                              onChange={() => {
                                setcustomOutlinePrimary(!customOutlinePrimary);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor1"
                            >
                              چک باکس Outline Primary
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-success mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor2"
                              checked={customOutlineSuccess}
                              onChange={() => {
                                setcustomOutlineSuccess(!customOutlineSuccess);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor2"
                            >
                              چک باکس طرح موفقیت
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-info mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor3"
                              checked={customOutlineInfo}
                              onChange={() => {
                                setcustomOutlineInfo(!customOutlineInfo);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor3"
                            >
                              چک باکس اطلاعات طرح کلی
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-warning mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor4"
                              checked={customOutlineWarning}
                              onChange={() => {
                                setcustomOutlineWarning(!customOutlineWarning);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor4"
                            >
                              طرح چک باکس هشدار
                            </label>
                          </div>
                          <div className="form-check form-checkbox-outline form-check-danger">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck-outlinecolor5"
                              checked={customOutlineDanger}
                              onChange={() => {
                                setcustomOutlineDanger(!customOutlineDanger);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck-outlinecolor5"
                            >
                              چک باکس خطر طرح کلی
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">دکمه های رادیویی</CardTitle>

                  <Row>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">رادیو فرم</h5>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios1"
                          >
                            رادیو فرم
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleRadios2"
                          >
                            فرم رادیو های علامت زده شده
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4">
                          رادیو فرم سمت راست
                        </h5>
                        <div>
                          <div className="form-check form-check-right mb-3">
                            <input
                              type="radio"
                              id="customRadio1"
                              name="customRadio"
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadio1"
                            >
                              رادیو فرم سمت راست
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="form-check form-check-right">
                            <input
                              type="radio"
                              id="customRadio2"
                              name="customRadio"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadio2"
                            >
                              رادیو فرم راست علامت زده شده
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary ms-1"></i>
                          رنگ رادیو فرم
                        </h5>
                        <p className="sub-header mb-4">
                          کلاس <code>.form-radio-* </code> را برای یک رنگ اضافه
                          کنید رادیوها
                        </p>

                        <div>
                          <div className="form-check form-radio-primary mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor1"
                              name="customRadiocolor1"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor1"
                            >
                              Radio اولیه
                            </label>
                          </div>
                          <div className="form-check form-radio-success mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor2"
                              name="customRadiocolor2"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor2"
                            >
                              Radio موفقیت
                            </label>
                          </div>
                          <div className="form-check form-radio-info mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor3"
                              name="customRadiocolor3"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor3"
                            >
                              Radio اطلاعات
                            </label>
                          </div>
                          <div className="form-check form-radio-warning mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor4"
                              name="customRadiocolor4"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor4"
                            >
                              Radio هشدار
                            </label>
                          </div>
                          <div className="form-check form-radio-danger mb-3">
                            <input
                              type="radio"
                              id="customRadiocolor5"
                              name="customRadiocolor5"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiocolor5"
                            >
                              Radio خطر
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} sm={6}>
                      <div className="mt-4">
                        <h5 className="font-size-14">
                          <i className="mdi mdi-arrow-right text-primary ms-1"></i>{" "}
                          طراح رادیو فرم ها
                        </h5>
                        <p className="sub-header mb-4">
                          اضافه کردن className <code>فرم طرح کلی رادیویی</code>{" "}
                          & رادیو <code>.form * </code> برای یک رنگ کادرهای
                          انتخاب
                        </p>

                        <div>
                          <div className="form-check form-radio-outline form-radio-primary mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor1"
                              name="customRadiooutlinecolor1"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor1"
                            >
                              رادیو طرح اولیه
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-success mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor2"
                              name="customRadiooutlinecolor2"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor2"
                            >
                              رادیو طرح موفقیت
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-info mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor3"
                              name="customRadiooutlinecolor3"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor3"
                            >
                              رادیو طرح اطلاعات
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-warning mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor4"
                              name="customRadiooutlinecolor4"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor4"
                            >
                              رادیو طرح هشدار
                            </label>
                          </div>
                          <div className="form-check form-radio-outline form-radio-danger mb-3">
                            <input
                              type="radio"
                              id="customRadiooutlinecolor5"
                              name="customRadiooutlinecolor5"
                              className="form-check-input"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customRadiooutlinecolor5"
                            >
                              رادیو طرح خطر
                            </label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">تغییر وضعیت</CardTitle>
                  <p className="card-title-desc">
                    یک سوئیچ دارای نشانه گذاری یک چک باکس سفارشی است اما از{" "}
                    استفاده می کند. کلاس <code>.form سوئیچ</code> برای رندر کردن
                    سوئیچ تعویض. سوئیچ ها از ویژگی <code>غیرفعال</code> نیز
                    پشتیبانی می کنند
                  </p>
                  <Row>
                    <Col sm={6}>
                      <div>
                        <h5 className="font-size-14 mb-3">
                          نمونه های تغییر وضعیت
                        </h5>
                        <div className="form-check form-switch mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitch1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitch1"
                          >
                            ورودی چک باکس سوئیچ پیش فرض
                          </label>
                        </div>
                        <div className="form-check form-switch mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitch2"
                            defaultChecked
                            onClick={(e) => {
                              settoggleSwitch(!toggleSwitch);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitch2"
                          >
                            ورودی چک باکس سوئیچ علامت زده شد
                          </label>
                        </div>
                      </div>
                      <div className="form-check form-switch mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDisabled"
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckDisabled"
                        >
                          ورودی چک باکس سوئیچ غیرفعال شد
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckCheckedDisabled"
                          checked
                          disabled
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckCheckedDisabled"
                        >
                          ورودی چک باکس سوئیچ علامت‌دار غیرفعال شد
                        </label>
                      </div>
                    </Col>

                    <Col sm={6}>
                      <div className="mt-4 mt-lg-0">
                        <h5 className="font-size-14 mb-3">
                          سایزبندی تغییر وضعیت
                        </h5>

                        <div className="form-check form-switch mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitchsizesm"
                            defaultChecked
                            // onClick={() => {
                            //   this.setState({
                            //     toggleSwitchSize: !this.state
                            //       .toggleSwitchSize,
                            //   })
                            // }}
                            onClick={(e) => {
                              settoggleSwitchSize(!toggleSwitchSize);
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchsizesm"
                          >
                            سوئیچ سایز کوچک
                          </label>
                        </div>

                        <div className="form-check form-switch form-switch-md mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitchsizemd"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchsizemd"
                          >
                            سوئیچ سایز متوسط
                          </label>
                        </div>

                        <div className="form-check form-switch form-switch-lg mb-3">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customSwitchsizelg"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchsizelg"
                          >
                            سوئیچ سایز بزرگ
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">مرورگر فایل</CardTitle>
                  <div>
                    <h5 className="font-size-14">
                      <i className="mdi mdi-arrow-right text-primary"></i> ورودی
                      فایل پیش فرض
                    </h5>
                    <div className="row">
                      <Col sm={6}>
                        <div className="mt-3">
                          <Label htmlFor="formFile" className="form-label">
                            نمونه ورودی فایل پیش فرض
                          </Label>
                          <Input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                      </Col>
                    </div>

                    <div className="row">
                      <Col sm={6}>
                        <div className="mt-4">
                          <div>
                            <Label htmlFor="formFileSm" className="form-label">
                              نمونه ورودی فایل کوچک
                            </Label>
                            <Input
                              className="form-control form-control-sm"
                              id="formFileSm"
                              type="file"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="mt-4">
                          <div>
                            <Label htmlFor="formFileLg" className="form-label">
                              نمونه ورودی فایل بزرگ
                            </Label>
                            <Input
                              className="form-control form-control-lg"
                              id="formFileLg"
                              type="file"
                            />
                          </div>
                        </div>
                      </Col>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <h5 className="font-size-14 mb-0">
                      <i className="mdi mdi-arrow-right text-primary"></i> ورودی
                      فایل سفارشی
                    </h5>
                  </div>

                  <Row>
                    <Col sm={6}>
                      <div className="mt-4">
                        <div>
                          <Label className="form-label">با برچسب</Label>
                          <div className="input-group mb-3">
                            <Label
                              className="input-group-text"
                              htmlFor="inputGroupFile01"
                            >
                              بارگذاری
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="inputGroupFile01"
                            />
                          </div>
                          <div className="input-group">
                            <Input
                              type="file"
                              className="form-control"
                              id="inputGroupFile02"
                            />
                            <Label
                              className="input-group-text"
                              htmlFor="inputGroupFile02"
                            >
                              بارگذاری
                            </Label>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col sm={6}>
                      <div className="mt-4">
                        <div>
                          <Label className="form-label">با دکمه</Label>
                          <div className="input-group mb-3">
                            <button
                              className="btn btn-primary"
                              type="button"
                              id="inputGroupFileAddon03"
                            >
                              دکمه
                            </button>
                            <Input
                              type="file"
                              className="form-control"
                              id="inputGroupFile03"
                              aria-describedby="inputGroupFileAddon03"
                              aria-label="Upload"
                            />
                          </div>
                          <div className="input-group">
                            <Input
                              type="file"
                              className="form-control"
                              id="inputGroupFile04"
                              aria-describedby="inputGroupFileAddon04"
                              aria-label="Upload"
                            />
                            <button
                              className="btn btn-primary"
                              type="button"
                              id="inputGroupFileAddon04"
                            >
                              دکمه
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default FormElements
