import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Label,
  Button,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

//Dropzone
import Dropzone from "react-dropzone";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import images
import verificationImg from "../../assets/images/verification-img.png";

const CryptoKYCApplication = props => {

  //meta title
  document.title="KYC Application | Skote - قالب مدیریتی و داشبورد Vite React ";

  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const togglemodal = () => {
    setModal(!modal);
  };

  const [passedSteps, setPassedSteps] = useState([1]);

  const toggleTab = tab => {
    if (activeTab !== tab) {
      const modifiedSteps = [...passedSteps];
      modifiedSteps.push(tab);
      setActiveTab(tab);
      setPassedSteps(modifiedSteps);
    }
  };

  const handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(files);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="کریپتو" breadcrumbItem="برنامه KYC" />

          <Row className="justify-content-center mt-lg-5">
            <Col xl="5" sm="8">
              <Card>
                <CardBody>
                  <div className="text-center">
                    <Row className="justify-content-center">
                      <Col lg="10">
                        <h4 className="mt-4 fw-semibold">تأیید KYC</h4>
                        <p className="text-muted mt-3">
                          برای امنیت درگاه تاییدیه فقط به ایمیل کاربر دارای کیف
                          پول ارسال می گردد تا از هر گونه اشکال جلوگیری شود .
                        </p>

                        <div className="mt-4">
                          {/* button triggers modal */}
                          <Button
                            type="button"
                            color="primary"
                            onClick={togglemodal}
                          >
                            برای تأیید اینجا را کلیک کنید
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 mb-2">
                      <Col sm="6" xs="8">
                        <div>
                          <img
                            src={verificationImg}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  {/* modal */}
                  <Modal
                    isOpen={modal}
                    role="dialog"
                    size="lg"
                    autoFocus={true}
                    centered
                    id="verificationModal"
                    toggle={togglemodal}
                  >
                    <div className="modal-content">
                      <ModalHeader toggle={togglemodal}>
                        حساب کاربری خودراتایید کنید
                      </ModalHeader>
                      <ModalBody>
                        <div id="kyc-verify-wizard" className="wizard clearfix">
                          <div className="steps clearfix">
                            <ul>
                              <NavItem
                                className={classnames({
                                  current: activeTab === 1,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 1,
                                  })}
                                  onClick={() => {
                                    toggleTab(1);
                                  }}
                                  disabled={!passedSteps.includes(1)}
                                >
                                  <span className="number">1.</span>
                                  اطلاعات شخصی
                                </NavLink>
                              </NavItem>
                              <NavItem
                                className={classnames({
                                  current: activeTab === 2,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 2,
                                  })}
                                  onClick={() => {
                                    toggleTab(2);
                                  }}
                                  disabled={!passedSteps.includes(2)}
                                >
                                  <span className="number">2.</span>
                                  تایید ایمیل
                                </NavLink>
                              </NavItem>
                              <NavItem
                                className={classnames({
                                  current: activeTab === 3,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 3,
                                  })}
                                  onClick={() => {
                                    toggleTab(3);
                                  }}
                                  disabled={!passedSteps.includes(3)}
                                >
                                  <span className="number">3.</span>
                                  تأیید سند
                                </NavLink>
                              </NavItem>
                            </ul>
                          </div>
                          <div className="content clearfix">
                            <TabContent
                              activeTab={activeTab}
                              className="twitter-bs-wizard-tab-content"
                            >
                              <TabPane tabId={1} id="personal-info">
                                <Form>
                                  <Row>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycfirstname-input"
                                          className="form-label"
                                        >
                                          نام
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kycfirstname-input"
                                          placeholder="نام خود را وارد کنید"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kyclastname-input"
                                          className="form-label"
                                        >
                                          نام خانواگی
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kyclastname-input"
                                          placeholder="نام خانواگی خود را وارد کنید"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycphoneno-input"
                                          className="form-label"
                                        >
                                          تلفن همراه
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kycphoneno-input"
                                          placeholder="شماره تلقن خود را وارد کنید"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycbirthdate-input"
                                          className="form-label"
                                        >
                                          تاریخ تولد
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kycbirthdate-input"
                                          placeholder="تاریخ تولد خود را وارد کنید"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="12">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycselectcity-input"
                                          className="form-label"
                                        >
                                          شهر
                                        </Label>
                                        <select
                                          className="form-select"
                                          id="kycselectcity-input"
                                        >
                                          <option>تهران</option>
                                          <option>مشهد</option>
                                          <option>اصفهان</option>
                                        </select>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Form>
                              </TabPane>
                              <TabPane tabId={2} id="confirm-email">
                                <div>
                                  <Form>
                                    <Row>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="basicpill-pancard-input">
                                            PAN کارت
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-pancard-input"
                                            placeholder="PAN Card No."
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="basicpill-vatno-input">
                                            شماره VAT/TIN
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-vatno-input"
                                            placeholder="VAT/TIN شماره"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="basicpill-cstno-input">
                                            CST شماره.
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-cstno-input"
                                            placeholder="CST شماره"
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="basicpill-servicetax-input">
                                            شماره مالیات خدمات
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-servicetax-input"
                                            placeholder="شماره مالیات خدمات"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="basicpill-companyuin-input">
                                            UIN شرکت
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-companyuin-input"
                                            placeholder="شرکت UIN"
                                          />
                                        </div>
                                      </Col>
                                      <Col lg={6}>
                                        <div className="mb-3">
                                          <Label htmlFor="basicpill-declaration-input">
                                            اعلام
                                          </Label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            id="basicpill-Declaration-input"
                                            placeholder="اعلام"
                                          />
                                        </div>
                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </TabPane>
                              <TabPane tabId={3} id="doc-verification">
                                <h5 className="font-size-14 mb-3">
                                  فایل سند را برای تأیید بارگذاری کنید
                                </h5>
                                <div className="kyc-doc-verification mb-3">
                                  <Dropzone
                                    onDrop={(acceptedFiles) =>
                                      handleAcceptedFiles(acceptedFiles)
                                    }
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div className="dropzone">
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          <input {...getInputProps()} />
                                          <div className="mb-3">
                                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                          </div>
                                          <h4>
                                            فایل ها را اینجا رها کنید یا برای
                                            آپلود کلیک کنید
                                          </h4>
                                        </div>
                                      </div>
                                    )}
                                  </Dropzone>
                                  <div
                                    className="dropzone-previews mt-3"
                                    id="file-previews"
                                  >
                                    {selectedFiles.map((f, i) => {
                                      return (
                                        <Card
                                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                          key={i + "-file"}
                                        >
                                          <div className="p-2">
                                            <Row className="align-items-center">
                                              <Col className="col-auto">
                                                <img
                                                  data-dz-thumbnail=""
                                                  height="80"
                                                  className="avatar-sm rounded bg-light"
                                                  alt={f.name}
                                                  src={f.preview}
                                                />
                                              </Col>
                                              <Col>
                                                <Link
                                                  to="#"
                                                  className="text-muted font-weight-bold"
                                                >
                                                  {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
                                                </p>
                                              </Col>
                                            </Row>
                                          </div>
                                        </Card>
                                      );
                                    })}
                                  </div>
                                </div>
                              </TabPane>
                            </TabContent>
                          </div>
                          <div className="actions clearfix">
                            <ul role="menu" aria-label="Pagination">
                              <li
                                className={
                                  activeTab === 1
                                    ? "previous disabled"
                                    : "previous"
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab - 1);
                                  }}
                                >
                                  قبلی
                                </Link>
                              </li>
                              <li
                                className={
                                  activeTab === 3 ? "next disabled" : "next"
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab + 1);
                                  }}
                                >
                                  بعدی
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                    </div>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CryptoKYCApplication;
