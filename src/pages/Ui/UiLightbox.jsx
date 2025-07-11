import React, { useState } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Map, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import image
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const images = [img1, img2, img3, img4, img5, img6];
const imageZoom = [img3, img7];

const LoadingContainer = () => <div>Loading...</div>;

const UiLightbox = (props) => {
  const selectedPlace = {};

  //meta title
  document.title = "Lightbox | Skote - قالب مدیریتی و داشبورد Vite React ";

  const [photoIndex, setphotoIndex] = useState(0);
  const [isFits, setisFits] = useState(false);
  const [isEffects, setisEffects] = useState(false);
  const [isGallery, setisGallery] = useState(false);
  const [isGalleryZoom, setisGalleryZoom] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [isOpen1, setisOpen1] = useState(false);
  const [modal, setmodal] = useState(false);
  const [map, setMap] = useState(false);
  function tog_map() {
    setMap(!map);
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="المنت های UI" breadcrumbItem="جعبه نور" />

          {isFits ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              enableZoom={false}
              imageCaption={
                "عنوان می توان آن را به هر طرف تراز کرد و حاوی هر HTML باشد"
              }
              onCloseRequest={() => {
                setisFits(!isFits);
              }}
            />
          ) : null}

          {isEffects ? (
            <Lightbox
              mainSrc={images[2]}
              enableZoom={false}
              onCloseRequest={() => {
                setisEffects(!isEffects);
              }}
            />
          ) : null}

          {isGallery ? (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              enableZoom={true}
              onCloseRequest={() => {
                setisGallery(false);
              }}
              onMovePrevRequest={() => {
                setphotoIndex((photoIndex + images.length - 1) % images.length);
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % images.length);
              }}
              imageCaption={"Project " + parseFloat(photoIndex + 1)}
            />
          ) : null}

          {isGalleryZoom ? (
            <Lightbox
              mainSrc={imageZoom[photoIndex]}
              nextSrc={imageZoom[(photoIndex + 1) % imageZoom.length]}
              prevSrc={
                imageZoom[
                  (photoIndex + imageZoom.length - 1) % imageZoom.length
                ]
              }
              onCloseRequest={() => {
                setisGalleryZoom(false);
              }}
              onMovePrevRequest={() => {
                setphotoIndex(
                  (photoIndex + imageZoom.length - 1) % imageZoom.length
                );
              }}
              onMoveNextRequest={() => {
                setphotoIndex((photoIndex + 1) % imageZoom.length);
              }}
            />
          ) : null}

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>لایت باکس تک تصویری</CardTitle>
                  <p className="card-title-desc">
                    سه پنجره بازشو ساده با تنظیمات مختلف مقیاس
                  </p>
                  <Row>
                    <Col className="col-6">
                      <div>
                        <h5 className="mt-0 font-size-14">مناسب (Horz/Vert)</h5>
                        <img
                          onClick={() => {
                            setisFits(true);
                          }}
                          className="img-fluid"
                          alt="Skote"
                          src={img2}
                          width="145"
                        />
                      </div>
                    </Col>
                    <Col className="col-6">
                      <div>
                        <h5 className="mt-0 font-size-14">جلوه ها</h5>
                        <img
                          onClick={() => {
                            setisEffects(true);
                          }}
                          className="img-fluid"
                          alt=""
                          src={img3}
                          width="75"
                        />

                        <CardText className="mt-2 mb-0 text-muted">
                          بدون شکاف، انیمیشن زوم، نماد بستن در بالا سمت راست
                          گوشه
                        </CardText>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">گالری لایت باکس</CardTitle>
                  <p className="card-title-desc">
                    در این مثال، بارگذاری تنبل تصاویر برای این فعال است تصویر
                    بعدی بر اساس جهت حرکت{" "}
                  </p>
                  <div className="popup-gallery d-flex flex-wrap">
                    <div className="img-fluid float-left">
                      <img
                        src={img1}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(0);
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img2}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(1);
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img3}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(2);
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img4}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(3);
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img5}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(4);
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                    <div className="img-fluid float-left">
                      <img
                        src={img6}
                        onClick={() => {
                          setisGallery(true);
                          setphotoIndex(5);
                        }}
                        alt=""
                        width="120"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">گالری زوم</CardTitle>
                  <p className="card-title-desc">
                    افکت زوم فقط با تصاویر کار می کند
                  </p>

                  <div className="zoom-gallery">
                    <img
                      src={img3}
                      className="float-left"
                      onClick={() => {
                        setisGalleryZoom(true);
                        setphotoIndex(0);
                      }}
                      alt=""
                      width="275"
                    />
                    <img
                      src={img7}
                      className="float-left"
                      onClick={() => {
                        setisGalleryZoom(true);
                        setphotoIndex(1);
                      }}
                      alt=""
                      width="275"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    پنجره بازشو با ویدئو یا نقشه
                  </CardTitle>
                  <p className="card-title-desc">
                    در این مثال، بارگذاری تنبل تصاویر برای این فعال است تصویر
                    بعدی بر اساس جهت حرکت{" "}
                  </p>

                  <Row>
                    <Col>
                      <Button
                        className="btn btn-secondary me-1"
                        onClick={() => {
                          setisOpen(!isOpen);
                        }}
                      >
                        ویدیوی یوتیوب را باز کنید
                      </Button>{" "}
                      <Button
                        className="btn btn-secondary me-1"
                        onClick={() => {
                          setisOpen1(!isOpen1);
                        }}
                      >
                        Vimeo Video را باز کنید
                      </Button>{" "}
                      <Button
                        onClick={() => {
                          tog_map();
                        }}
                        className="popup-gmaps btn btn-secondary mo-mb-2"
                      >
                        نقشه گوگل را باز کنید
                      </Button>
                      <ModalVideo
                        videoId="L61p2uyiMSo"
                        channel="youtube"
                        isOpen={isOpen}
                        onClose={() => {
                          setisOpen(!isOpen);
                        }}
                      />
                      <ModalVideo
                        videoId="L61p2uyiMSo"
                        channel="youtube"
                        isOpen={isOpen1}
                        onClose={() => {
                          setisOpen1(false);
                        }}
                      />
                      <Modal
                        centered
                        isOpen={map}
                        size="lg"
                        toggle={() => {
                          tog_map();
                        }}
                      >
                        <ModalHeader toggle={tog_map}>نقشه گوگل</ModalHeader>
                        <ModalBody>
                          <div
                            id="gmaps-markers"
                            className="gmaps"
                            style={{ position: "relative" }}
                          >
                            <Map
                              google={props.google}
                              zoom={14}
                              style={{ width: "100%", height: "100%" }}
                            >
                              <InfoWindow>
                                <div>
                                  <h1>{selectedPlace.name}</h1>
                                </div>
                              </InfoWindow>
                            </Map>
                          </div>
                        </ModalBody>
                      </Modal>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">پنجره با فرم</CardTitle>
                  <div>
                    <Link
                      onClick={() => {
                        setmodal(!modal);
                      }}
                      to="#"
                      className="popup-form btn btn-primary"
                    >
                      فرم پاپ آپ
                    </Link>
                  </div>

                  <Modal
                    size="xl"
                    isOpen={modal}
                    toggle={() => {
                      setmodal(!modal);
                    }}
                    centered
                  >
                    <ModalHeader
                      tag="h4"
                      toggle={() => {
                        setmodal(!modal);
                      }}
                      className="mb-4"
                    >
                      فرم
                    </ModalHeader>
                    <ModalBody>
                      <Form onSubmit={(event) => event.preventDefault()}>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="name">نام</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="وارد کردن نام"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="email">ایمیل</label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="وارد کردن ایمیل"
                              />
                            </div>
                          </Col>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label htmlFor="password">رمز عبور</label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="وارد کردن رمز عبور"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="mb-3">
                              <label htmlFor="subject">موضوع</label>
                              <textarea
                                className="form-control"
                                id="subject"
                                rows="3"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="text-end">
                              <button type="submit" className="btn btn-primary">
                                ارسال
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </ModalBody>
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

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(UiLightbox)
);
