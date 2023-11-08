/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import "./dashboard.css";
import ChartjsRadarChart from "../../views/charts/chart-js/ChartjsDoughnutChart";
import ChartjsLineChart from "../../views/charts/chart-js/ChartjsLineChart";
import ChartjsBarChart from "../../views/charts/chart-js/ChartjsBarChart";
import "@styles/react/apps/app-users.scss";
import ClientDataTable from "../Pages/table";
import redflag from "../../Admin/assests/icons/red-flag.png";
import greenflag from "../../Admin/assests/icons/green-flag.png";
import calendar from "../../Admin/assests/icons/calendar.png";

import "@styles/react/libs/tables/react-dataTable-component.scss";

import { Link } from "react-router-dom";

import {
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { MoreHorizontal, Trash, Edit2 } from "react-feather";


const AdminDashboard = () => {
  const tooltipShadow = "rgba(0, 0, 0, 0.1)";
  const successColorShade = "#00cc66";
  const warningLightColor = "#ffcc00";
  const primary = "#007bff";
  const labelColor = "#333";
  const gridLineColor = "#ccc";
  const warningColorShade = "#ffcc00";
  const lineChartDanger = "#ff0000";
  const lineChartPrimary = "#007bff";
  const successColor = "#00cc66";
  const gridLineColors = "#ccc";
  const labelColors = "#333";
  // TABLE DATA

  const [isLoading, setIsLoading] = useState(false);

  let data = [
    {
      srno: "09",
      name: "Atif",
      title: "Long issue",
      description: "lorem",
      Date: "20 Jun 2023",
      status: "Solved",
    },
    {
      srno: "08",
      name: "Huraira",
      title: " issue",
      description: "lorem",
      Date: "22 Jan 2021",
      status: "Unsolved",
    },
  ];

  const title = "dashboard";

  const columns = [
    {
      name: "Sr.no",
      selector: (row) => row.srno,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: "true",
      // maxWidth:"6rem"
    },

    {
      name: "Discription",
      selector: (row) => row.description,
      sortable: "true",
      // maxWidth:"6rem"
    },

    {
      name: "Date",
      selector: (row) => row.Date,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="d-flex align-items-center">
          {row.status === "Solved" ? (
            <>
              <img
                src={greenflag}
                alt="Solved"
                width="16"
                height="16"
                className="me-1"
              />
              <span>{row.status}</span>
            </>
          ) : (
            <>
              <img
                src={redflag}
                alt="Unsolved"
                width="16"
                height="16"
                className="me-1"
              />
              <span>{row.status}</span>
            </>
          )}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      allowOverflow: true,
      maxWidth: "7rem",
      minWidth: "2rem",
      cell: () => {
        return (
          <div className="d-flex justify-content-end w-100">
            <UncontrolledDropdown className="">
              <DropdownToggle className="pe-1 " tag="span">
                <MoreHorizontal size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <Link
                    to="./client-edit"
                    className="btn btn-white p-0 m-0 w-100"
                  >
                    <Edit2 size={15} />
                    <span className="align-middle ms-50 pe-2 ">Edit</span>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Trash size={15} />
                  <span className="align-middle ms-50">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        );
      },
    },
  ];

  // style img

  return (
    <>
      <div>
        {isLoading ? (
          <div className="mt-3 d-flex justify-content-center align-items-center vh-75 w-100">
            <Spinner animation="border" variant="dart" size="lg" />
          </div>
        ) : (
          <>
            <Row className="justify-content-center">
              <Col lg="3" md="6" sm="6" xs="12" className="mb-2">
                <ChartjsRadarChart
                  tooltipShadow={tooltipShadow}
                  successColorShade={successColorShade}
                  warningLightColor={warningLightColor}
                  primary={primary}
                />
              </Col>

              <Col lg="6" md="6" sm="6" xs="12" className="mb-2">
                <ChartjsLineChart
                  labelColor={labelColor}
                  gridLineColor={gridLineColor}
                  warningColorShade={warningColorShade}
                  lineChartDanger={lineChartDanger}
                  lineChartPrimary={lineChartPrimary}
                />
              </Col>

              <Col lg="3" md="6" sm="6" xs="12" className="mb-2">
                <ChartjsBarChart
                  success={successColor}
                  gridLineColor={gridLineColors}
                  labelColor={labelColors}
                />
              </Col>
            </Row>
            <div className="d-flex align-align-items-center justify-content-between mt-3 mb-3">
              <h5 className="head_title">Support Request</h5>
              <div className="d-flex align-items-center justify-content-between">
                <div className="me-2">
                  <div className="calendar_main">
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "15px",
                        marginLeft: "10px",
                      }}
                      src={calendar}
                      alt="calendar"
                    />

                    <UncontrolledButtonDropdown>
                      <DropdownToggle className="calndar_drop" caret>
                        Month
                      </DropdownToggle>
                      <DropdownMenu>
                        {/* Add your second dropdown items here */}
                        <DropdownItem
                          href="/"
                          tag="a"
                          onClick={(e) => e.preventDefault()}
                        >
                          Option 1
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          tag="a"
                          onClick={(e) => e.preventDefault()}
                        >
                          Option 2
                        </DropdownItem>
                        <DropdownItem
                          href="/"
                          tag="a"
                          onClick={(e) => e.preventDefault()}
                        >
                          Option 3
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </div>

                <div className="filter_icon">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle className="filter_btn">
                      <img
                        className="filter_img"
                        src="./icons/filter_icon.png"
                      />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        href="/"
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        All
                      </DropdownItem>
                      <DropdownItem
                        href="/"
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        Solved
                      </DropdownItem>
                      <DropdownItem
                        href="/"
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        UnSolved
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </div>
            </div>
            <ClientDataTable columns={columns} data={data} />
          </>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
