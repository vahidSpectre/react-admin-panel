import React from "react"
import { Link } from "react-router-dom"
import {
  Table,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap"


const RecentFile = props => {
  const recentfile = [
    {
      id: 1,
      icon: "mdi mdi-file-document font-size-16 align-middle text-primary me-2",
      file: "index.html",
      date: "12-10-1400, 09:45",
      size: "09",
    },
    {
      id: 2,
      icon: "mdi mdi-folder-zip font-size-16 align-middle text-warning me-2",
      file: "Project-A.zip",
      date: "11-10-1402, 17:05",
      size: "115",
    },
    {
      id: 3,
      icon: "mdi mdi-image font-size-16 align-middle text-muted me-2",
      file: "Img-1.jpeg",
      date: "11-10-1402, 13:26",
      size: "86",
    },
    {
      id: 4,
      icon: "mdi mdi-text-box font-size-16 align-middle text-muted me-2",
      file: "update list.txt",
      date: "10-10-1402, 11:32",
      size: "08",
    },
    {
      id: 5,
      icon: "mdi mdi-folder font-size-16 align-middle text-warning me-2",
      file: "Project B",
      date: "10-10-1400, 10:51",
      size: "72",
    },
    {
      id: 6,
      icon: "mdi mdi-text-box font-size-16 align-middle text-muted me-2",
      file: "Changes list.txt",
      date: "09-10-1400, 17:05",
      size: "07",
    },
    {
      id: 7,
      icon: "mdi mdi-image font-size-16 align-middle text-success me-2",
      file: "Img-2.png",
      date: "09-10-1400, 15:12",
      size: "31",
    },
    {
      id: 8,
      icon: "mdi mdi-folder font-size-16 align-middle text-warning me-2",
      file: "Project C",
      date: "09-10-1400, 10:11",
      size: "20",
    },
    {
      id: 9,
      icon: "bx bxs-file font-size-16 align-middle text-primary me-2",
      file: "starter-page.html",
      date: "08-10-1400, 03:22",
      size: "11",
    },
  ];
  return (
    <React.Fragment>
      <div className="mt-4">
        <div className="d-flex flex-wrap">
          <h5 className="font-size-16 me-3">فایل های اخیر</h5>

          <div className="ms-auto">
            <Link to="#" className="fw-medium text-reset">
              مشاهده همه
            </Link>
          </div>
        </div>
        <hr className="mt-2" />

        <div className="table-responsive">
          <Table className="table align-middle table-nowrap table-hover mb-0">
            <thead>
              <tr>
                <th scope="col">نام</th>
                <th scope="col">تاریخ اصلاح شده</th>
                <th scope="col" colSpan="2">
                  سایز
                </th>
              </tr>
            </thead>
            <tbody>
              {recentfile.map((item, key) => (
                <tr key={key}>
                  <td>
                    <Link to="#" className="text-dark fw-medium">
                      <i className={item.icon}></i> {item.file}
                    </Link>
                  </td>
                  <td>{item.date}</td>
                  <td>{item.size} KB</td>
                  <td>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="a"
                        className="font-size-16 text-muted"
                        role="button"
                      >
                        <i className="mdi mdi-dots-horizontal"></i>
                      </DropdownToggle>

                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">باز کردن</DropdownItem>
                        <DropdownItem href="#">ویرایش</DropdownItem>
                        <DropdownItem href="#">تغییر نام</DropdownItem>
                        <div className="dropdown-divider"></div>
                        <DropdownItem href="#">حذف</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RecentFile;
