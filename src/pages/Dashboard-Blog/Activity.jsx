import React from "react"
import { Link } from "react-router-dom"

import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

//SimpleBar
import SimpleBar from "simplebar-react"
import { activityBlogData } from "../../common/data"

const Activity = () => {
  return (
    <React.Fragment>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="d-flex align-items-start">
              <div className="me-2">
                <h5 className="card-title mb-4">فعالیت</h5>
              </div>
              <UncontrolledDropdown className="ms-auto">
                <DropdownToggle
                  className="text-muted font-size-16"
                  tag="a"
                  color="white"
                  type="button"
                >
                  <i className="mdi mdi-dots-horizontal"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end" direction="right">
                  <Link className="dropdown-item" to="#">
                    اقدامات
                  </Link>
                  <Link className="dropdown-item" to="#">
                    اقدامات دیگر
                  </Link>
                  <Link className="dropdown-item" to="#">
                    موارد دیگر
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    لینک های جداگانه
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <SimpleBar className="mt-2" style={{ maxHeight: "280px" }}>
              <ul className="verti-timeline list-unstyled">
                {(activityBlogData || []).map((event, index) => (
                  <li
                    className={`event-list ${event.active ? "active" : ""}`}
                    key={index}
                  >
                    <div className="event-timeline-dot">
                      <i
                        className={`bx ${
                          event.active ? "bxs" : "bx"
                        }-left-arrow-circle font-size-18 ${
                          event.active && "bx-fade-left"
                        }`}
                      ></i>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <h5 className="font-size-14">
                          {event.date}{" "}
                          <i className="bx bx-left-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div className="flex-grow-1">
                        <div>
                          {event.title}{" "}
                          <span className="fw-semibold"> {event.boldText}</span>{" "}
                          {event.text}{" "}
                          {event.link && (
                            <Link to={event.link}>{event.linkText}</Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </SimpleBar>
            <div className="text-center mt-4">
              <Link to="#" className="btn btn-primary  btn-sm">
                مشاهده بیشتر <i className="mdi mdi-arrow-left ms-1"></i>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default Activity
