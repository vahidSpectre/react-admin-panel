import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import { isEmpty, map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Image
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import { getInvoiceDetail as onGetInvoiceDetail } from "../../store/invoices/actions";
//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const InvoiceDetail = (props) => {
  //meta title
  document.title = "جزئیات فاکتور| Skote - قالب مدیریتی و داشبورد Vite React ";

  const dispatch = useDispatch();

  const InvoicesDetailProperties = createSelector(
    (state) => state.invoices,
    (Invoices) => ({
      invoiceDetail: Invoices.invoiceDetail,
    })
  );

  const { invoiceDetail } = useSelector(InvoicesDetailProperties);

  const params = props.router.params;

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetInvoiceDetail(params.id));
    } else {
      dispatch(onGetInvoiceDetail(1)); //remove this after full integration
    }
  }, [onGetInvoiceDetail]);

  //Print the Invoice
  const printInvoice = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="فاکتور ها" breadcrumbItem="جزئیات فاکتور" />
          {!isEmpty(invoiceDetail) && (
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="invoice-title">
                      <h4 className="float-end font-size-16">
                        سفارش # {invoiceDetail.orderId}
                      </h4>
                      <div className="auth-logo mb-4">
                        <img
                          src={logoDark}
                          alt="logo"
                          className="auth-logo-dark"
                          height="20"
                        />
                        <img
                          src={logoLight}
                          alt="logo"
                          className="auth-logo-light"
                          height="20"
                        />
                      </div>
                    </div>
                    <hr />
                    <Row>
                      <Col sm={6}>
                        <address>
                          <strong>صورت حساب داده شده برای:</strong>
                          <br />
                          {map(
                            invoiceDetail.billingAddress.split(","),
                            (item, key) => (
                              <React.Fragment key={key}>
                                <span>{item}</span>
                                <br />
                              </React.Fragment>
                            )
                          )}
                        </address>
                      </Col>
                      <Col sm={6} className="text-sm-end">
                        <address>
                          <strong>فرستاده شده به:</strong>
                          <br />
                          {map(
                            invoiceDetail.shippingAddress.split(","),
                            (item, key) => (
                              <React.Fragment key={key}>
                                <span>{item}</span>
                                <br />
                              </React.Fragment>
                            )
                          )}
                        </address>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6} className="mt-3">
                        <address>
                          <strong>روش پرداخت:</strong>
                          <br />
                          {invoiceDetail.card}
                          <br />
                          {invoiceDetail.email}
                        </address>
                      </Col>
                      <Col sm={6} className="mt-3 text-sm-end">
                        <address>
                          <strong>تاریخ سفارش:</strong>
                          <br />
                          {invoiceDetail.orderDate}
                          <br />
                          <br />
                        </address>
                      </Col>
                    </Row>
                    <div className="py-2 mt-3">
                      <h3 className="font-size-15 fw-bold">خلاصه سفارش</h3>
                    </div>
                    <div className="table-responsive">
                      <Table className="table-nowrap">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>شماره.</th>
                            <th>آیتم</th>
                            <th className="text-end">قیمت</th>
                          </tr>
                        </thead>
                        <tbody>
                          {map(
                            invoiceDetail.orderSummary.items,
                            (item, key) => (
                              <tr key={key}>
                                <td>0{item.id}</td>
                                <td>{item.item}</td>
                                <td className="text-end">{item.price}</td>
                              </tr>
                            )
                          )}
                          <tr>
                            <td colSpan={2} className="text-end">
                              زیر مجموع
                            </td>
                            <td className="text-end">
                              {invoiceDetail.orderSummary.subTotal}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2} className="border-0 text-end">
                              <strong>حمل دریایی</strong>
                            </td>
                            <td className="border-0 text-end">
                              {invoiceDetail.orderSummary.shipping}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2} className="border-0 text-end">
                              <strong>مجموع</strong>
                            </td>
                            <td className="border-0 text-end">
                              <h4 className="m-0">
                                {invoiceDetail.orderSummary.total}
                              </h4>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="d-print-none">
                      <div className="float-end">
                        <Link
                          to="#"
                          onClick={printInvoice}
                          className="btn btn-success  me-2"
                        >
                          <i className="fa fa-print" />
                        </Link>
                        <Link to="#" className="btn btn-primary w-md ">
                          ارسال
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

InvoiceDetail.propTypes = {
  match: PropTypes.any,
};

export default withRouter(InvoiceDetail);
