import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const EmailBasicTemplte = () => {
   //meta title
   document.title="قالب پایه | Skote - قالب مدیریتی و داشبورد Vite React ";
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="قالب ایمیل" breadcrumbItem="قالب پایه" />
          <Row className="email-template">
            <Col md="12">
              <table
                className="body-wrap"
                style={{
                  fontFamily: "'yekan',Helvetica,Arial,sans-serif",
                  boxSizing: "border-box",
                  fontSize: "14px",
                  margin: "0",
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#495057",
                }}
                bgcolor="#f6f6f6"
              >
                <tbody>
                  <tr
                    style={{
                      fontFamily: "'yekan',Helvetica,Arial,sans-serif",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      margin: "0",
                    }}
                  >
                    <td
                      style={{
                        fontFamily:
                          "'yekan',Helvetica,Arial,sans-serif",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        margin: "0",
                        verticalAlign: "top",
                      }}
                      valign="top"
                    ></td>

                    <td
                      className="container"
                      width="600"
                      style={{
                        fontFamily:
                          "'yekan',Helvetica,Arial,sans-serif",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        display: "block",
                        maxWidth: "600px",
                        clear: "both",
                        margin: "0px auto",
                        verticalAlign: "top",
                      }}
                      valign="top"
                    >
                      <div
                        className="content"
                        style={{
                          fontFamily:
                            "'yekan',Helvetica,Arial,sans-serif",
                          boxSizing: "border-box",
                          fontSize: "14px",
                          maxWidth: "600px",
                          display: "block",
                          margin: "0px auto",
                          padding: "20px",
                        }}
                      >
                        <table
                          className="main"
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          itemProp="action"
                          itemScope
                          itemType="http://schema.org/ConfirmAction"
                          style={{
                            fontFamily:
                              "'yekan',Helvetica,Arial,sans-serif",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            borderRadius: "7px",
                            margin: "0px",
                            border: "none",
                          }}
                        >
                          <tbody>
                            <tr
                              style={{
                                fontFamily:
                                  "'yekan',Helvetica,Arial,sans-serif",
                                boxSizing: "border-box",
                                fontSize: "14px",
                                margin: "0px",
                              }}
                            >
                              <td
                                className="content-wrap"
                                style={{
                                  fontFamily:
                                    "'yekan',Helvetica,Arial,sans-serif",
                                  boxSizing: "border-box",
                                  fontSize: "14px",
                                  verticalAlign: "top",
                                  margin: "0px",
                                  padding: "30px",
                                  borderRadius: "7px",
                                  backgroundColor: "#fff",
                                  boxShadow:
                                    "0 0.75rem 1.5rem rgba(18,38,63,.03)",
                                }}
                                valign="top"
                              >
                                <meta
                                  itemProp="name"
                                  content="Confirm Email"
                                  style={{
                                    fontFamily:
                                      "'yekan',Helvetica,Arial,sans-serif",
                                    boxSizing: "border-box",
                                    fontSize: "14px",
                                    margin: "0px",
                                  }}
                                />

                                <table
                                  width="100%"
                                  cellPadding="0"
                                  cellSpacing="0"
                                  style={{
                                    fontFamily:
                                      "'yekan',Helvetica,Arial,sans-serif",
                                    boxSizing: "border-box",
                                    fontSize: "14px",
                                    margin: "0px",
                                  }}
                                >
                                  <tbody>
                                    <tr
                                      style={{
                                        fontFamily:
                                          "yekan',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'yekan',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        برای تایید آدرس ایمیل خود روی لینک زیر
                                        کلیک کنید
                                      </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "yekan',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'yekan',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                    ممکن است لازم باشد اطلاعات مهمی درباره خدمات خود برای شما ارسال کنیم و مهم است که یک آدرس ایمیل دقیق داشته باشیم.
                                      </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "yekan',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        itemProp="handler"
                                        itemScope
                                        itemType="http://schema.org/HttpActionHandler"
                                        style={{
                                          fontFamily:
                                            "'yekan',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        <Link
                                          to="#"
                                          color="primary"
                                          itemProp="url"
                                          style={{
                                            fontFamily:
                                              "'yekan',Helvetica,Arial,sans-serif",
                                            boxSizing: "border-box",
                                            fontSize: "14px",
                                            color: "#FFF",
                                            textDecoration: "none",
                                            lineHeight: "2em",
                                            fontWeight: "bold",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            borderRadius: "5px",
                                            textTransform: "capitalize",
                                            backgroundColor: "#34c38f",
                                            margin: "0",
                                            borderColor: "#34c38f",
                                            borderStyle: "solid",
                                            borderWidth: "8px 16px",
                                          }}
                                        >
                                          تایید آدرس ایمیل
                                        </Link>
                                      </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "yekan',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'yekan',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0 0 20px",
                                        }}
                                        valign="top"
                                      >
                                        <b>Skote</b>
                                        <p>تیم پشتیبانی</p>
                                      </td>
                                    </tr>

                                    <tr
                                      style={{
                                        fontFamily:
                                          "yekan',Helvetica,Arial,sans-serif",
                                        boxSizing: "border-box",
                                        fontSize: "14px",
                                        margin: "0px",
                                      }}
                                    >
                                      <td
                                        className="content-block"
                                        style={{
                                          fontFamily:
                                            "'yekan',Helvetica,Arial,sans-serif",
                                          boxSizing: "border-box",
                                          fontSize: "14px",
                                          verticalAlign: "top",
                                          margin: "0px",
                                          padding: "0",
                                          textAlign: "center",
                                        }}
                                        valign="top"
                                      >
                                        © {new Date().getFullYear()} Skote
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailBasicTemplte;
