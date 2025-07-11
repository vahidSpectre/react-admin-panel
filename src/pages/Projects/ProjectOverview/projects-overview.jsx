import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withRouter from "../../../components/Common/withRouter";
import { isEmpty } from "lodash";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

import { getProjectDetail as onGetProjectDetail } from "/src/store/projects/actions";
import ProjectDetail from "./projectDetail";
import TeamMembers from "./teamMembers";
import OverviewChart from "./overviewChart";
import AttachedFiles from "./attachedFiles";
import Comments from "./comments";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const ProjectsOverview = (props) => {
  //meta title
  document.title =
    "Project Overview | Skote - قالب مدیریتی و داشبورد Vite React ";

  const dispatch = useDispatch();

  const ProjectsDetailProperties = createSelector(
    (state) => state.projects,
      (Projects) => ({
        projectDetail: Projects.projectDetail
      })
  );

  const {
    projectDetail
  } = useSelector(ProjectsDetailProperties);

  const params = props.router.params;

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProjectDetail(params.id));
    } else {
      dispatch(onGetProjectDetail(1)); //remove this after full integration
    }
  }, [onGetProjectDetail]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="پروژه ها" breadcrumbItem="بررسی اجمالی پروژه" />

          {!isEmpty(projectDetail) && (
            <>
              <Row>
                <Col lg="8">
                  <ProjectDetail project={projectDetail} />
                </Col>

                <Col lg="4">
                  <TeamMembers team={projectDetail.team} />
                </Col>
              </Row>

              <Row>
                <Col lg="4">
                  <OverviewChart dataColors='["--bs-primary"]' />
                </Col>

                <Col lg="4">
                  <AttachedFiles files={projectDetail.files} />
                </Col>

                <Col lg="4">
                  <Comments comments={projectDetail.comments} />
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

ProjectsOverview.propTypes = {
  match: PropTypes.object,
};

export default withRouter(ProjectsOverview);
