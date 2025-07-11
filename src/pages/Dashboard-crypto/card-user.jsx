import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from "reactstrap"
import { Link } from "react-router-dom"

const CardUser = () => {
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <Dropdown
              isOpen={menu}
              toggle={() => setMenu(!menu)}
              className="float-end ms-2"
            >
              <DropdownToggle tag="i" className="text-muted">
                <i className="mdi mdi-dots-horizontal font-size-18"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">اقدامات</DropdownItem>
                <DropdownItem href="#">اقدامات دیگر</DropdownItem>
                <DropdownItem href="#">موارد دیگر</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div>
              <div className="mb-4 me-3">
                <i className="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div>
                <h5>سارا توسلی</h5>
                <p className="text-muted mb-1">saratavasoli@abc.com</p>
                <p className="text-muted mb-0">شماره شناسایی: #SK0234</p>
              </div>
            </div>
          </CardBody>

          <CardBody className="border-top">
            <Row>
              <div className="col-sm-6">
                <div>
                  <p className="fw-medium mb-2">تعادل :</p>
                  <h4>تومان 6134.39</h4>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mt-4 mt-sm-0">
                  <p className="fw-medium mb-2">سکه :</p>
                  <div className="d-inline-flex align-items-center mt-1">
                    <Link to="#" className="m-1" id="bitcoin">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18">
                          <i className="mdi mdi-bitcoin"></i>
                        </span>
                      </div>
                      <UncontrolledTooltip placement="top" target="bitcoin">
                        بیت کوین
                      </UncontrolledTooltip>
                    </Link>
                    <Link to="#" className="m-1" id="ethereum">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18">
                          <i className="mdi mdi-ethereum"></i>
                        </span>
                      </div>
                      <UncontrolledTooltip placement="top" target="ethereum">
                        اتریوم
                      </UncontrolledTooltip>
                    </Link>
                    <Link to="#" className="m-1" id="litecoin">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-info-subtle text-info font-size-18">
                          <i className="mdi mdi-litecoin"></i>
                        </span>
                      </div>
                      <UncontrolledTooltip placement="top" target="litecoin">
                        لایت کوین
                      </UncontrolledTooltip>
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
          </CardBody>

          <CardFooter className="bg-transparent border-top">
            <div className="text-center">
              <Link to="#" className="btn btn-outline-light me-2 w-md">
                سپرده
              </Link>{" "}
              <Link to="#" className="btn btn-primary me-2 w-md">
                خرید / فروش
              </Link>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default CardUser
