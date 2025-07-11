import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import withRouter from "../../../components/Common/withRouter";
import "/src/assets/scss/datatables.scss";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";
import { getWallet as onGetWallet } from "/src/store/actions";
import WalletActivities from "./walletActivities";
import WalletStats from "./walletStats";
import WalletOverView from "./walletOverView";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const CryptoWallet = () => {
  //meta title
  document.title = "کیف پول| Skote - قالب مدیریتی و داشبورد Vite React ";

  const dispatch = useDispatch();

  const CryptoProperties = createSelector(
    (state) => state.crypto,
    (Crypto) => ({
      wallet: Crypto.wallet,
      loading: Crypto.loading
    })
  );

  const {
    wallet, loading
  } = useSelector(CryptoProperties);
  const [isLoading, setLoading] = useState(loading)
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    dispatch(onGetWallet());
  }, [onGetWallet]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="کریپتو" breadcrumbItem="کیف پول" />
          {!isEmpty(wallet) && (
            <Row>
              <Col xl="4">
                <WalletStats
                  wallet={wallet}
                  isMenu={isMenu}
                  toggleMenu={toggleMenu}
                />
              </Col>
              <Col xl="8">
                <Row>
                  <Col sm="4">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="me-3 align-self-center">
                            <i className="mdi mdi-bitcoin h2 text-warning mb-0" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">کیف پول بیت کوین</p>
                            <h5 className="mb-0">
                              1.02356 BTC{" "}
                              <span className="font-size-14 text-muted">
                                = تومان 9148.00
                              </span>
                            </h5>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="me-3 align-self-center">
                            <i className="mdi mdi-ethereum h2 text-primary mb-0" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">کیف پول اتریوم</p>
                            <h5 className="mb-0">
                              0.04121 ETH{" "}
                              <span className="font-size-14 text-muted">
                                = تومان 8235.00
                              </span>
                            </h5>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="me-3 align-self-center">
                            <i className="mdi mdi-litecoin h2 text-info mb-0" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">کیف پول لایت کوین</p>
                            <h5 className="mb-0">
                              0.00356 BTC{" "}
                              <span className="font-size-14 text-muted">
                                = تومان 4721.00
                              </span>
                            </h5>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <WalletOverView wallet={wallet} />
              </Col>
            </Row>
          )}
          <Row>
            <Col lg="12">
              {!isEmpty(wallet["walletHistory"]) && (
                <WalletActivities
                  isLoading={isLoading}
                  setLoading={setLoading}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

CryptoWallet.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
};

export default withRouter(CryptoWallet);
