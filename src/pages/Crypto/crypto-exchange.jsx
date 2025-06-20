import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  TabContent,
  TabPane,
  Label,
  Button,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
} from "reactstrap"
import classnames from "classnames"
import ReactApexChart from "react-apexcharts"

//Simple bar
import SimpleBar from "simplebar-react"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Images
import avatar from "../../assets/images/users/avatar-1.jpg"
import { orderbookData } from "../../common/data"

const CryptoExchange = props => {

  //meta title
  document.title = "Exchange | Skote - قالب مدیریتی و داشبورد Vite React ";

  const series = [
    {
      data: [
        { x: new Date(15387786e5), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(15387804e5), y: [6632.01, 6643.59, 6620, 6630.11] },
        {
          x: new Date(15387822e5),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        { x: new Date(1538784e6), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(15387858e5), y: [6638.24, 6640, 6620, 6624.47] },
        {
          x: new Date(15387876e5),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        { x: new Date(15387894e5), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date(15387912e5), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date(1538793e6), y: [6605, 6608.03, 6598.95, 6604.01] },
        { x: new Date(15387948e5), y: [6604.5, 6614.4, 6602.26, 6608.02] },
        {
          x: new Date(15387966e5),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        { x: new Date(15387984e5), y: [6608.91, 6618.99, 6608.01, 6612] },
        { x: new Date(15388002e5), y: [6612, 6615.13, 6605.09, 6612] },
        { x: new Date(1538802e6), y: [6612, 6624.12, 6608.43, 6622.95] },
        { x: new Date(15388038e5), y: [6623.91, 6623.91, 6615, 6615.67] },
        { x: new Date(15388056e5), y: [6618.69, 6618.74, 6610, 6610.4] },
        { x: new Date(15388074e5), y: [6611, 6622.78, 6610.4, 6614.9] },
        { x: new Date(15388092e5), y: [6614.9, 6626.2, 6613.33, 6623.45] },
        { x: new Date(1538811e6), y: [6623.48, 6627, 6618.38, 6620.35] },
        {
          x: new Date(15388128e5),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        { x: new Date(15388146e5), y: [6615.53, 6617.93, 6610, 6615.19] },
        { x: new Date(15388164e5), y: [6615.19, 6621.6, 6608.2, 6620] },
        { x: new Date(15388182e5), y: [6619.54, 6625.17, 6614.15, 6620] },
        { x: new Date(153882e7), y: [6620.33, 6634.15, 6617.24, 6624.61] },
        { x: new Date(15388218e5), y: [6625.95, 6626, 6611.66, 6617.58] },
        { x: new Date(15388236e5), y: [6619, 6625.97, 6595.27, 6598.86] },
        { x: new Date(15388254e5), y: [6598.86, 6598.88, 6570, 6587.16] },
        { x: new Date(15388272e5), y: [6588.86, 6600, 6580, 6593.4] },
        { x: new Date(1538829e6), y: [6593.99, 6598.89, 6585, 6587.81] },
        { x: new Date(15388308e5), y: [6587.81, 6592.73, 6567.14, 6578] },
        { x: new Date(15388326e5), y: [6578.35, 6581.72, 6567.39, 6579] },
        {
          x: new Date(15388344e5),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        { x: new Date(15388362e5), y: [6575.96, 6589, 6571.77, 6588.92] },
        { x: new Date(1538838e6), y: [6588.92, 6594, 6577.55, 6589.22] },
        { x: new Date(15388398e5), y: [6589.3, 6598.89, 6589.1, 6596.08] },
        { x: new Date(15388416e5), y: [6597.5, 6600, 6588.39, 6596.25] },
        { x: new Date(15388434e5), y: [6598.03, 6600, 6588.73, 6595.97] },
        { x: new Date(15388452e5), y: [6595.97, 6602.01, 6588.17, 6602] },
        { x: new Date(1538847e6), y: [6602, 6607, 6596.51, 6599.95] },
        {
          x: new Date(15388488e5),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        { x: new Date(15388506e5), y: [6591.02, 6603.08, 6591, 6591] },
        { x: new Date(15388524e5), y: [6591, 6601.32, 6585, 6592] },
        { x: new Date(15388542e5), y: [6593.13, 6596.01, 6590, 6593.34] },
        { x: new Date(1538856e6), y: [6593.34, 6604.76, 6582.63, 6593.86] },
        {
          x: new Date(15388578e5),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(15388596e5),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        { x: new Date(15388614e5), y: [6596.25, 6604.2, 6590, 6602.99] },
        { x: new Date(15388632e5), y: [6602.99, 6606, 6584.99, 6587.81] },
        { x: new Date(1538865e6), y: [6587.81, 6595, 6583.27, 6591.96] },
        { x: new Date(15388668e5), y: [6591.97, 6596.07, 6585, 6588.39] },
        { x: new Date(15388686e5), y: [6587.6, 6598.21, 6587.6, 6594.27] },
        { x: new Date(15388704e5), y: [6596.44, 6601, 6590, 6596.55] },
        { x: new Date(15388722e5), y: [6598.91, 6605, 6596.61, 6600.02] },
        { x: new Date(1538874e6), y: [6600.55, 6605, 6589.14, 6593.01] },
        { x: new Date(15388758e5), y: [6593.15, 6605, 6592, 6603.06] },
        { x: new Date(15388776e5), y: [6603.07, 6604.5, 6599.09, 6603.89] },
        { x: new Date(15388794e5), y: [6604.44, 6604.44, 6600, 6603.5] },
        { x: new Date(15388812e5), y: [6603.5, 6603.99, 6597.5, 6603.86] },
        { x: new Date(1538883e6), y: [6603.85, 6605, 6600, 6604.07] },
        { x: new Date(15388848e5), y: [6604.98, 6606, 6604.07, 6606] },
      ],
    },
  ]

  const options = {
    chart: { toolbar: !1, zoom: { enabled: !0 } },
    plotOptions: {
      candlestick: { colors: { upward: "#34c38f", downward: "#f46a6a" } },
    },
    xaxis: { type: "datetime" },
    yaxis: { tooltip: { enabled: !0 } },
  }

  const notofications = [
    {
      date: "15 آبان",
      desc: "اگر چندین زبان با هم ترکیب شوند",
    },
    {
      date: "14 آبان",
      desc: "زبان مشترک جدید ساده تر و منظم تر از زبان موجود خواهد بود",
    },
    {
      date: "13 آبان",
      desc: "به نظر می رسد انگلیسی ساده شده به عنوان یک کمبریج ",
    },
    { date: "13 آبان", desc: "برای دستیابی به این امر، لازم است" },
    {
      date: "12 آبان",
      desc: "برای داشتن اطلاعات بیشتر باید در سایت جستجو کنید",
    },
    {
      date: "11 آبان",
      desc: "زبان مشترک جدید ساده تر و منظم تر از زبان موجود خواهد بود",
    },
    {
      date: "10 آبان",
      desc: "به نظر می رسد انگلیسی ساده شده به عنوان یک کمبریج ",
    },
    { date: "9 آبان", desc: "برای دستیابی به این امر، لازم است" },
  ];

  const [isMenu, setisMenu] = useState(false)
  const [activeTab, setActiveTab] = useState("1")

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const toggleMenu = () => {
    setisMenu(!isMenu)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="کریپتو" breadcrumbItem="تبادل" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>سارا توسلی</h5>
                        <p className="mb-1">sara@abc.com</p>
                        <p className="mb-0">شماره شناسایی: #SK0234</p>
                      </div>
                    </div>
                    <Dropdown
                      direction="left"
                      isOpen={isMenu}
                      toggle={toggleMenu}
                    >
                      <DropdownToggle
                        type="button"
                        tag="button"
                        className="btn btn-light"
                      >
                        <i className="mdi mdi-wallet me-1" />
                        <span className="d-none d-sm-inline-block">
                          موجودی کیف پول
                          <i className="mdi mdi-chevron-down" />
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-md dropdown-menu-end">
                        <div className="dropdown-item-text">
                          <div>
                            <p className="text-muted mb-2">موجودی موجود</p>
                            <h5 className="mb-0">تومان 9148.23</h5>
                          </div>
                        </div>

                        <DropdownItem divider />

                        <DropdownItem href="#">
                          BTC : <span className="float-end">1.02356</span>
                        </DropdownItem>
                        <DropdownItem href="#">
                          ETH : <span className="float-end">0.04121</span>
                        </DropdownItem>
                        <DropdownItem href="#">
                          LTC : <span className="float-end">0.00356</span>
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem
                          className="text-primary text-center"
                          href="#"
                        >
                          بیشتر بدانید
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl="8">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">قیمت</h4>

                  <Row>
                    <Col xl="3" sm="4">
                      <div className="d-flex">
                        <div className="avatar-sm me-3">
                          <span className="avatar-title rounded-circle bg-warning-subtle text-warning font-size-22">
                            <i className="mdi mdi-bitcoin" />
                          </span>
                        </div>

                        <div className="flex-grow-1">
                          <p className="text-muted mb-2">بیت کوین</p>
                          <h5>1.02356 BTC</h5>
                        </div>
                      </div>
                    </Col>

                    <Col xl="3" sm="4">
                      <div className="mt-4 mt-sm-0">
                        <p className="text-muted mb-2">تومان</p>
                        <h5>6310.22 تومان</h5>
                      </div>
                    </Col>

                    <Col xl="3" sm="4">
                      <div className="mt-4 mt-sm-0">
                        <p className="text-muted mb-2">24 ساعت گذشته</p>
                        <h5>
                          0.24 % <i className="mdi mdi-arrow-up text-success" />
                        </h5>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <div id="candlestick-chart" dir="ltr">
                      <ReactApexChart
                        series={series}
                        options={options}
                        type="candlestick"
                        height={310}
                        className="apex-charts"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="4">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">خرید / فروش</h4>

                  <div>
                    <p className="text-muted mb-2">
                      <i className="mdi mdi-wallet me-1" />
                      موجودی کیف پول
                    </p>
                    <h5>تومان 9148.23</h5>
                  </div>

                  <div className="mt-4">
                    <Nav pills className="bg-light rounded" role="tablist">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1");
                          }}
                        >
                          خرید
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
                          فروش
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab} className="mt-4">
                      <TabPane tabId="1" id="buy-tab">
                        <h5 className="font-size-14 mb-4">خرید سکه</h5>

                        <div>
                          <div>
                            <Label>اضافه کردن مقدار :</Label>
                            <InputGroup className="mb-3">
                              <Label className="input-group-text">مقدار</Label>
                              <select
                                className="form-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">قیمت</Label>
                              <Input
                                type="text"
                                className="form-control"
                                placeholder="قیمت"
                              />
                              <Label className="input-group-text">تومان</Label>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">مجموع</Label>
                              <Input
                                type="text"
                                className="form-control"
                                placeholder="مجموع"
                              />
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="success"
                              className="w-md"
                            >
                              خرید سکه
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="sell-tab">
                        <h5 className="font-size-14 mb-4">فروش سکه</h5>

                        <div>
                          <div>
                            <Label>افزودن مقدار :</Label>
                            <InputGroup className="mb-3">
                              <Label className="input-group-text">مقدار</Label>
                              <select
                                className="form-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">قیمت</Label>
                              <Input
                                type="text"
                                className="form-control"
                                placeholder="Price"
                              />
                              <Label className="input-group-text">تومان</Label>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">مجموع</Label>
                              <Input
                                type="text"
                                className="form-control"
                                placeholder="Total"
                              />
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="danger"
                              className="w-md"
                            >
                              فروش سکه
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">سفارش کتاب</h4>

                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                        <tr className="text-center">
                          <th colSpan="3">خرید</th>
                          <th colSpan="3">فروش</th>
                        </tr>
                        <tr>
                          <th scope="col">مقدار</th>
                          <th scope="col">مجموع</th>
                          <th scope="col">قیمت</th>
                          <th scope="col">مقدار</th>
                          <th scope="col">مجموع</th>
                          <th scope="col">قیمت</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(orderbookData || []).map((item, index) => (
                          <tr key={index}>
                            <td>{item.column1}</td>
                            <td>{item.column2}</td>
                            <td>{item.column3}</td>
                            <td>{item.column4}</td>
                            <td>{item.column5}</td>
                            <td>{item.column6}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">اعلانات</h4>

                  <SimpleBar style={{ maxHeight: "310px" }}>
                    <ul className="verti-timeline list-unstyled">
                      {notofications.map((notification, key) => (
                        <li key={key} className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-left-arrow-circle font-size-18" />
                          </div>
                          ّّ
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <h5 className="font-size-14">
                                {notification.date}{" "}
                                <i className="bx bx-left-arrow-alt font-size-16 text-primary align-middle ms-2" />
                              </h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>{notification.desc}</div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </SimpleBar>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default CryptoExchange
