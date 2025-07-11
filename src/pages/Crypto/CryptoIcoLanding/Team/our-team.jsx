import React from "react"
import { Container, Row, Col, Card, CardBody, CardFooter, UncontrolledTooltip } from "reactstrap"

//Import Images
import { Link } from "react-router-dom"
import { icoLandingTeam } from "../../../../common/data";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import "../../../../../node_modules/swiper/swiper.scss";

const OurTeam = () => { 

  return (
    <React.Fragment>
      <section className="section" id="team">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">تیم</div>
                <h4>با تیم ما آشنا شوید</h4>
              </div>
            </Col>
          </Row>

          <Col lg={12}>
            <Swiper
              slidesPerView={1}
              spaceBetween={25}
              navigation
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                678: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              modules={[Pagination, Navigation]}
              className="owl-carousel owl-theme events navs-carousel"
              id="team-carousel"
              dir="ltr"
            >
              {icoLandingTeam.map((item, key) => (
                <SwiperSlide key={key} className="item">
                  <Card className="text-center team-box">
                    <CardBody>
                      <div>
                        <img src={item.img} alt="" className="rounded w-100" />
                      </div>

                      <div className="mt-3">
                        <h5>{item.author}</h5>
                        <p className="text-muted mb-0">{item.post}</p>
                      </div>
                    </CardBody>
                    <CardFooter className="bg-transparent border-top">
                      <div className="d-flex mb-0 team-social-links">
                        <div className="flex-fill">
                          <Link to="#" id="facebook">
                            <i className="mdi mdi-facebook"></i>
                          </Link>
                        </div>
                        <UncontrolledTooltip placement="top" target="facebook">
                          فیس بوک
                        </UncontrolledTooltip>

                        <div className="flex-fill">
                          <Link to="#" id="linkedin">
                            <i className="mdi mdi-linkedin"></i>
                          </Link>
                        </div>
                        <UncontrolledTooltip placement="top" target="linkedin">
                          لینکدین
                        </UncontrolledTooltip>

                        <div className="flex-fill">
                          <Link to="#" id="google">
                            <i className="mdi mdi-google"></i>
                          </Link>
                        </div>
                        <UncontrolledTooltip placement="top" target="google">
                          گوگل
                        </UncontrolledTooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default OurTeam
