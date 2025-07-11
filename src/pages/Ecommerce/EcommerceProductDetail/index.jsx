import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../../components/Common/withRouter";
import { Button, Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from "reactstrap";
import classnames from "classnames";
import { isEmpty } from "lodash";

//Import Star Ratings
import StarRatings from "react-star-ratings";

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

//Import actions
import {
  getProductDetail as onGetProductDetail,
  getProductComments as onGetProductComments,
  onAddReply as onAddReplyAction
} from "/src/store/actions"
import RecentProducts from "./RecentProducts"
import Reviews from "./Reviews"

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const EcommerceProductDetail = props => {

  //meta title
  document.title = "جزئیات محصول | Skote - قالب مدیریتی و داشبورد Vite React ";

  const dispatch = useDispatch()

  const EcommerceProductsProperties = createSelector(
    (state) => state.ecommerce,
    (Ecommerce) => ({
      product: Ecommerce.product,
      productComments: Ecommerce.productComments,
    })
  );

  const { product, productComments } = useSelector(EcommerceProductsProperties);

  const [comments, setComments] = useState([]);
  console.log("productComments", productComments);
  useEffect(() => {
    if (productComments) {
      setComments(productComments);
    }
  }, [productComments]);

  const onClickReply = commentId => {
    const modifiedComments = [...comments];

    const commentIdx = (modifiedComments || []).findIndex(
      comment => comment.commentId.toString() === commentId.toString()
    );
    if (commentIdx > -1) {
      if (modifiedComments[commentIdx]) {
        modifiedComments[commentIdx]["showAddComment"] = true;

        for (let i = 0; i < (modifiedComments || []).length; i++) {
          if (i !== commentIdx) {
            modifiedComments[i]["showAddComment"] = false;
          }
        }
      } else {
        modifiedComments[commentIdx]["showAddComment"] = false;
      }
      setComments(modifiedComments);
    }
  };

  const onCancelReply = commentId => {
    if (commentId) {
      const modifiedComments = [...comments];
      for (let i = 0; i < (modifiedComments || []).length; i++) {
        modifiedComments[i]["showAddComment"] = false;
      }
      setComments(modifiedComments);
    }
  };

  const onAddReply = (commentId, replyText) => {
    if (commentId) {
      const productId = params.id || 1;
      dispatch(onAddReplyAction(commentId, productId, replyText));
    }
  };

  const [activeTab, setActiveTab] = useState("1")

  const params = props.router.params;

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProductDetail(params.id))
    } else {
      dispatch(onGetProductDetail(1))
    }
  }, [dispatch, params])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const imageShow = (img, id) => {
    const expandImg = document.getElementById("expandedImg" + id)
    expandImg.src = img
  }

  useEffect(() => {
    dispatch(onGetProductComments())
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="تجارت الکترونیک" breadcrumbItem="جزئیات محصول" />
          {!isEmpty(product) && (
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col xl={6}>
                        <div className="product-detai-imgs">
                          <Row>
                            <Col md={2} sm={3} className="col-4">
                              <Nav className="flex-column" pills>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1");
                                    }}
                                  >
                                    <img
                                      src={product.subImage[0]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(product["subImage"][0], 1);
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleTab("2");
                                    }}
                                  >
                                    <img
                                      src={product.subImage[1]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(product["subImage"][1], 2);
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleTab("3");
                                    }}
                                  >
                                    <img
                                      src={product.subImage[2]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(product["subImage"][2], 3);
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </Col>
                            <Col md={7} sm={9} className="offset-md-1 col-8">
                              <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                  <div>
                                    <img
                                      src={product.image}
                                      alt=""
                                      id="expandedImg1"
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div>
                                    <img
                                      src={product.image}
                                      id="expandedImg2"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div>
                                    <img
                                      src={product.image}
                                      id="expandedImg3"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="4">
                                  <div>
                                    <img
                                      src={product.image}
                                      id="expandedImg4"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                              </TabContent>
                              <div className="text-center">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn mt-2 me-1"
                                >
                                  <i className="bx bx-cart me-2" />
                                  افزودن به سبد خرید
                                </Button>
                                <Button
                                  type="button"
                                  color="success"
                                  className="ms-1 btn mt-2"
                                >
                                  <i className="bx bx-shopping-bag me-2" /> هم
                                  اکنون خریداری کنید
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                      <Col xl="6">
                        <div className="mt-4 mt-xl-3">
                          <Link to="#" className="text-primary">
                            {product.category}
                          </Link>
                          <h4 className="mt-1 mb-3">{product.name}</h4>

                          <div className="text-muted float-start me-3">
                            <StarRatings
                              rating={4}
                              starRatedColor="#F1B44C"
                              starEmptyColor="#74788d"
                              numberOfStars={5}
                              name="rating"
                              starDimension="14px"
                              starSpacing="3px"
                            />
                          </div>
                          <p className="text-muted mb-4">
                            ( {product.reviews} بررسی مشتریان )
                          </p>

                          {!!product.isOffer && (
                            <h6 className="text-success text-uppercase">
                              {product.offer} % تخفیف
                            </h6>
                          )}
                          <h5 className="mb-4">
                            قیمت :{" "}
                            <span className="text-muted me-2">
                              <del>تومان{product.oldPrice} </del>
                            </span>{" "}
                            <b>تومان{product.newPrice} </b>
                          </h5>
                          <p className="text-muted mb-4">
                            برای دستیابی به این امر، داشتن آن ضروری خواهد بود
                            تلفظ دستور زبان یکنواخت و کلمات رایج تر اگر چند زبان
                            با هم ادغام شوند
                          </p>
                          <Row className="mb-3">
                            <Col md="6">
                              {product.features &&
                                product.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                        className={classnames(
                                          item.icon,
                                          "font-size-16 align-middle text-primary me-2"
                                        )}
                                      />
                                      {item.type && `${item.type}: `}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                            <Col md="6">
                              {product.features &&
                                product.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                        className={classnames(
                                          item.icon,
                                          "font-size-16 align-middle text-primary me-2"
                                        )}
                                      />
                                      {item.type && `${item.type}:`}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                          </Row>

                          <div className="product-color">
                            <h5 className="font-size-15">رنگ :</h5>
                            {product.colorOptions &&
                              (product.colorOptions || [])?.map((option, i) => (
                                <Link to="#" className="active" key={i}>
                                  <div className="product-color-item border rounded">
                                    <img
                                      src={option.image}
                                      alt=""
                                      className="avatar-md"
                                    />
                                  </div>
                                  <p>{option.color}</p>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-5">
                      <h5 className="mb-3">مشخصات فنی :</h5>

                      <div className="table-responsive">
                        <Table className="table mb-0 table-bordered">
                          <tbody>
                            {product.specification &&
                              product.specification.map((specification, i) => (
                                <tr key={i}>
                                  <th
                                    scope="row"
                                    style={{ width: "400px" }}
                                    className={"text-capitalize"}
                                  >
                                    {specification.type}
                                  </th>
                                  <td>{specification.value}</td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    <Reviews
                      comments={comments}
                      productId={props.router.params.id || 1}
                      onClickReply={onClickReply}
                      onCancelReply={onCancelReply}
                      onAddReply={onAddReply}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
          <RecentProducts productDetail={productComments || []} />
        </Container>
      </div>
    </React.Fragment>
  );
}

EcommerceProductDetail.propTypes = {
  product: PropTypes.object,
  match: PropTypes.any,
  onGetProductDetail: PropTypes.func,
}

export default withRouter(EcommerceProductDetail)
