import React from "react"
import { Row, Col, Card } from "reactstrap"

//Import Images
import profileImg from "../../assets/images/profile-img.png"

const CardWelcome = () => {
  return (
    <React.Fragment>
      <Col xl="4">
        <Card className="bg-primary bg-primary-subtle">
          <div>
            <Row>
              <Col xs="7">
                <div className="text-primary p-3">
                  <h5 className="text-primary">خوش برگشتی !</h5>
                  <p>داشبورد Skote Saas</p>

                  <ul className="ps-3 mb-0">
                    <li className="py-1">7 + طرح بندی ها</li>
                    <li className="py-1">برنامه های متعدد</li>
                  </ul>
                </div>
              </Col>
              <Col xs="5" className="align-self-end">
                <img src={profileImg} alt="" className="img-fluid" />
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default CardWelcome;