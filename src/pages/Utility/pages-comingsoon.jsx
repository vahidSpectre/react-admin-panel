import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

//Import Countdown
import Countdown from "react-countdown"

//Import Images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import maintanence from "../../assets/images/coming-soon.svg"

const PagesComingsoon = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>خوب است که بروید به </span>
    } else {
      return (
        <>
          <div className="coming-box">
            {days} <span>روز </span>
          </div>{" "}
          <div className="coming-box">
            {hours} <span>ساعت </span>
          </div>{" "}
          <div className="coming-box">
            {minutes} <span>دقیقه </span>
          </div>{" "}
          <div className="coming-box">
            {seconds} <span>ثانیه </span>
          </div>
        </>
      )
    }
  }

    //meta title
    document.title = "Coming Soon | Skote - قالب مدیریتی و داشبورد Vite React ";

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-white">
          <i className="fas fa-home h2" />
        </Link>
      </div>

      <div className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center">
                <Link to="/" className="d-block auth-logo">
                  <img
                    src={logodark}
                    alt=""
                    height="18"
                    className="auth-logo-dark mx-auto"
                  />
                  <img
                    src={logolight}
                    alt=""
                    height="18"
                    className="auth-logo-light mx-auto"
                  />
                </Link>
                <Row className="justify-content-center mt-5">
                  <Col sm="4">
                    <div className="maintenance-img">
                      <img
                        src={maintanence}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
                <h4 className="mt-5">بیایید با Skote شروع کنیم</h4>
                <p className="text-muted">
                  آن را به سادگی به عنوان Occidental در واقع خواهد بود غربی
                </p>

                <Row className="justify-content-center mt-5">
                  <Col md="8">
                    <div className="counter-number">
                      <Countdown date="2026/12/31" renderer={renderer} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default PagesComingsoon
