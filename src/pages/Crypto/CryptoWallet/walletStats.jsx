import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"
import { Link } from "react-router-dom"

const WalletStats = ({ wallet, isMenu, toggleMenu }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <div className="me-4">
            <i className="mdi mdi-account-circle text-primary h1" />
          </div>

          <div className="flex-grow-1">
            <div className="text-muted">
              <h5>{wallet.userName}</h5>
              <p className="mb-1">{wallet.email}</p>
              <p className="mb-0"> شماره شناسه: {wallet.id}</p>
            </div>
          </div>

          <Dropdown isOpen={isMenu} toggle={toggleMenu} className="ms-2">
            <DropdownToggle tag="i" className="text-muted">
              <i className="mdi mdi-dots-horizontal font-size-18" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">اقدامات</DropdownItem>
              <DropdownItem href="#">افدامات دیگر</DropdownItem>
              <DropdownItem href="#">دیگر چیز ها</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardBody>
      <CardBody className="border-top">
        <Row>
          <Col sm="6">
            <div>
              <p className="text-muted mb-2">موجودی موجود</p>
              <h5>{wallet.availableBalance}</h5>
            </div>
          </Col>
          <Col sm="6">
            <div className="text-sm-end mt-4 mt-sm-0">
              <p className="text-muted mb-2">از ماه گذشته</p>
              <h5>
                {wallet.lastMonthDifference}
                <span className="badge bg-success ms-2 align-bottom">
                  {wallet.lastMonthDifferencePercent}
                </span>
              </h5>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="border-top">
        <p className="text-muted mb-4">در این ماه</p>
        <div className="text-center">
          <Row>
            <Col sm="4">
              <div>
                <div className="font-size-24 text-primary mb-2">
                  <i className="bx bx-send" />
                </div>

                <p className="text-muted mb-2">ارسال</p>
                <h5>{wallet.send}</h5>

                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-sm w-md">
                    ارسال
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm="4">
              <div className="mt-4 mt-sm-0">
                <div className="font-size-24 text-primary mb-2">
                  <i className="bx bx-import" />
                </div>

                <p className="text-muted mb-2">دريافت كردن</p>
                <h5>{wallet.receive}</h5>

                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-sm w-md">
                    دريافت كردن
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm="4">
              <div className="mt-4 mt-sm-0">
                <div className="font-size-24 text-primary mb-2">
                  <i className="bx bx-wallet" />
                </div>

                <p className="text-muted mb-2">پرداخت</p>
                <h5>{wallet.withdraw}</h5>

                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-sm w-md">
                    پرداخت
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
}

WalletStats.propTypes = {
  wallet: PropTypes.any,
  isMenu: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default WalletStats
