import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Input,
  CardTitle,
  InputGroup,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Product Images
import img1 from "../../assets/images/product/img-1.png";
import img2 from "../../assets/images/product/img-2.png";
import img3 from "../../assets/images/product/img-3.png";
import img4 from "../../assets/images/product/img-4.png";
import img5 from "../../assets/images/product/img-5.png";
import img6 from "../../assets/images/product/img-6.png";

const productListvar = [
  {
    id: 1,
    img: img1,
    name: "تیشرت نیم آستین",
    color: "قهوه ای",
    price: "450",
    data_attr: 2,
    total: 900,
  },
  {
    id: 2,
    img: img2,
    name: "تی شرت آبی روشن",
    color: "آبی روشن",
    price: "225",
    data_attr: 1,
    total: 225,
  },
  {
    id: 3,
    img: img3,
    name: "تیشرت رنگ مشکی",
    color: "مشکی",
    price: "152",
    data_attr: 2,
    total: 304,
  },
  {
    id: 4,
    img: img4,
    name: "هودی (آبی)",
    color: "آبی",
    price: "145",
    data_attr: 2,
    total: 290,
  },
  {
    id: 5,
    img: img5,
    name: "تی شرت نیم آستین",
    color: "نارنجی روشن",
    price: "138",
    data_attr: 1,
    total: 138,
  },
  {
    id: 6,
    img: img6,
    name: "تی شرت رنگ سبز",
    color: "سبز",
    price: "152",
    data_attr: 2,
    total: 304,
  },
];

const EcommerceCart = () => {

  //meta title
  document.title = "سبد خرید | Skote - قالب مدیریتی و داشبورد Vite React ";

  const [productList, setproductList] = useState(productListvar);
  const [dic, setDic] = useState(0);
  const [tax, setTax] = useState(0);
  const [charge, setCharge] = useState(0);

  const assigned = (productList || [])?.map((item) => item.total);
  let subTotal = 0;
  for (let i = 0; i < assigned.length; i++) {
    subTotal += Math.round(assigned[i]);
  }

  useEffect(() => {
    let dic = (0.15 * subTotal);
    let tax = (0.125 * subTotal);
    if (subTotal !== 0) {
      setCharge(65)
    } else {
      setCharge(0)
    }
    setDic(dic);
    setTax(tax);

  }, [subTotal])


  function removeCartItem(id) {
    dispatch(onDeleteCart(id))
  }

  function countUP(id, prev_data_attr, price) {
    setproductList(
      (productList || [])?.map((count) => {
        return count.id === id ? { ...count, data_attr: prev_data_attr + 1, total: (prev_data_attr + 1) * price } : count
      })
    );
  }

  function countDown(id, prev_data_attr, price) {
    setproductList(
      (productList || [])?.map((count) =>
        count.id === id && count.data_attr > 0 ? { ...count, data_attr: prev_data_attr - 1, total: (prev_data_attr - 1) * price } : count
      )
    );
  }


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="تجارت الکترونیک" breadcrumbItem="سبد خرید" />

          <Row>
            <Col lx="8">
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table align-middle mb-0 table-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>محصول</th>
                          <th>خلاصه محصول</th>
                          <th>قیمت</th>
                          <th>تعداد</th>
                          <th colSpan="2">مجموع</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(productList || [])?.map((product) => {
                          return (
                            <tr key={product.id}>
                              <td>
                                <img
                                  src={product.img}
                                  alt="product-img"
                                  title="product-img"
                                  className="avatar-md"
                                />
                              </td>
                              <td>
                                <h5 className="font-size-14 text-truncate">
                                  <Link
                                    to={
                                      "/ecommerce-product-detail/" + product.id
                                    }
                                    className="text-dark"
                                  >
                                    {product.name}
                                  </Link>
                                </h5>
                                <p className="mb-0">
                                  {" "}
                                  رنگ :
                                  <span className="fw-medium">
                                    {" "}
                                    {product.color}{" "}
                                  </span>
                                </p>
                              </td>
                              <td>تومان {product.price}</td>
                              <td>
                                <div style={{ width: "120px" }}>
                                  <InputGroup>
                                    <div className="input-group-prepend">
                                      <Button
                                        type="button"
                                        color="primary"
                                        onClick={() =>
                                          countUP(
                                            product.id,
                                            product.data_attr,
                                            product.price
                                          )
                                        }
                                      >
                                        +{" "}
                                      </Button>
                                    </div>
                                    <Input
                                      type="text"
                                      value={product.data_attr}
                                      name="demo_vertical"
                                      readOnly
                                    />
                                    <div className="input-group-append">
                                      <Button
                                        type="button"
                                        color="primary"
                                        onClick={() =>
                                          countDown(
                                            product.id,
                                            product.data_attr,
                                            product.price
                                          )
                                        }
                                      >
                                        -
                                      </Button>
                                    </div>
                                  </InputGroup>
                                </div>
                              </td>
                              <td>تومان {product.total}</td>
                              <td>
                                <Link
                                  to="#"
                                  onClick={() => removeCartItem(product.id)}
                                  className="action-icon text-danger"
                                >
                                  <i className="mdi mdi-trash-can font-size-18" />
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <Row className="mt-4">
                    <Col sm="6">
                      <Link
                        to="/ecommerce-products"
                        className="btn btn-secondary"
                      >
                        <i className="mdi mdi-arrow-right me-1" /> ادامه خرید{" "}
                      </Link>
                    </Col>
                    <Col sm="6">
                      <div className="text-sm-end mt-2 mt-sm-0">
                        <Link
                          to="/ecommerce-checkout"
                          className="btn btn-success"
                        >
                          <i className="mdi mdi-cart-arrow-right me-1" /> تسویه حساب{" "}
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">جزئیات کارت</CardTitle>

                  <div className="card bg-primary text-white visa-card mb-0">
                    <CardBody>
                      <div>
                        <i className="bx bxl-visa visa-pattern" />

                        <div className="float-end">
                          <i className="bx bxl-visa visa-logo display-3" />
                        </div>

                        <div>
                          <i
                            className="bx bx-chip h1 text-warning"
                            style={{ lineHeight: 1 }}
                          />
                        </div>
                      </div>

                      <Row className="mt-5">
                        <Col xs="4">
                          <p>
                            <i className="fas fa-star-of-life m-1" />
                            <i className="fas fa-star-of-life m-1" />
                            <i className="fas fa-star-of-life m-1" />
                          </p>
                        </Col>
                        <Col xs="4">
                          <p>
                            <i className="fas fa-star-of-life m-1" />
                            <i className="fas fa-star-of-life m-1" />
                            <i className="fas fa-star-of-life m-1" />
                          </p>
                        </Col>
                        <Col xs="4">
                          <p>
                            <i className="fas fa-star-of-life m-1" />
                            <i className="fas fa-star-of-life m-1" />
                            <i className="fas fa-star-of-life m-1" />
                          </p>
                        </Col>
                      </Row>

                      <div className="mt-5">
                        <h5 className="text-white float-end mb-0">12/22</h5>
                        <h5 className="text-white mb-0">احسان امرایی</h5>
                      </div>
                    </CardBody>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle className="mb-3">خلاصه سفارش</CardTitle>

                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <tbody>
                        <tr>
                        <td>مجموع کل :</td>
                          <td>تومان {subTotal || ""}</td>
                        </tr>
                        <tr>
                          <td>تخفیف : </td>
                          <td>- تومان {dic.toFixed(2) || ""}</td>
                        </tr>
                        <tr>
                          <td>هزینه حمل و نقل :</td>
                          <td>تومان {charge || ""}</td>
                        </tr>
                        <tr>
                          <td>مالیات تخمینی : </td>
                          <td>تومان {tax.toFixed(2) || ""}</td>
                        </tr>
                        <tr>
                          <th>مجموع :</th>
                          <th>
                            تومان {(subTotal + charge + tax - dic).toFixed(2) || ""}
                          </th>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceCart;
