import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

//Import Card
import CardContact from "./card-contact";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import { getUsers as onGetUsers } from "/src/store/contacts/actions";
import Spinners from "../../components/Common/Spinner"

const ContactsGrid = () => {
  //meta title
  document.title = "User Grid | Skote - قالب مدیریتی و داشبورد Vite React ";

  const dispatch = useDispatch();

  const ContactsProperties = createSelector(
    (state) => state.contacts,
    (Contacts) => ({
      users: Contacts.users,
      loading: Contacts.loading
    })
  );

  const {
    users, loading
  } = useSelector(ContactsProperties);
  const [isLoading, setLoading] = useState(loading);

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers());
    }
  }, [dispatch, users]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="مخاطبین" breadcrumbItem="شبکه کاربر" />

          <Row>
            {isLoading ? (
              <Spinners setLoading={setLoading} />
            ) : (
              <>
                <Row>
                  {(users || [])?.map((user, key) => (
                    <CardContact user={user} key={"_user_" + key} />
                  ))}
                </Row>
                <Row>
                  <Col xs="12">
                    <div className="text-center my-3">
                      <Link to="#" className="text-success">
                        <i className="bx bx-hourglass bx-spin me-2" />
                        بارگذاری بیشتر
                      </Link>
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ContactsGrid);
