import { React, useState, useEffect } from "react";
import "@styles/react/apps/app-users.scss";
import ClientDataTable from "./table";

import "@styles/react/libs/tables/react-dataTable-component.scss";

import {
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { Col, Row } from "react-bootstrap";
import Select from "react-select";
import active from "../../Admin/assests/icons/active.png";
import block from "../../Admin/assests/icons/block.png";
import { MoreHorizontal } from "react-feather";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// for spinner
import Spinerr from "../../views/components/spinners/SpinnerGrowing";

const Subscriptions = () => {
  const [defaultData_, setDefaultData_] = useState("");

  // states for update and insert data

  const [name, setName] = useState("");
  const [year_rate, setYear_rate] = useState("");
  const [year_currency, setYear_currency] = useState("");
  const [month_rate, setMonth_rate] = useState("");
  const [month_currency, setMonth_currency] = useState("");
  const [period, setPeriod] = useState("");
  const [city, setCity] = useState("");
  const [photo_limit, setPhoto_limit] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    if (defaultData_) {
      setName(defaultData_.name);
      setYear_rate(defaultData_.year_rate);
      setYear_currency(defaultData_.year_currency);
      setMonth_rate(defaultData_.month_rate);
      setMonth_currency(defaultData_.month_currency);
      setPeriod(defaultData_.period);
      setCity(defaultData_.city);
      setPhoto_limit(defaultData_.photo_limit);
      setDescription(defaultData_.description);
      setFeatures(defaultData_.features);
      setStatus(defaultData_.status);
    }
  }, [defaultData_]);

  // post data

  const postData = (e) => {
    e.preventDefault();
    if (
      !name ||
      !year_rate ||
      !year_currency ||
      !month_rate ||
      !month_currency ||
      !period ||
      !city ||
      !photo_limit ||
      !description ||
      !features
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }
    setName("");
    setYear_rate("");
    setYear_currency("");
    setMonth_rate("");
    setMonth_currency("");
    setPeriod("");
    setCity("");
    setPhoto_limit("");
    setDescription("");
    setFeatures("");
    // setStatus("");

    axios
      .post(`${global.BASEURL}createRecord/adminsubscription`, {
        name,
        year_rate,
        year_currency,
        month_rate,
        month_currency,
        period,
        city,
        photo_limit,
        description,
        features,
        status,
      })
      .then(() => {
        toggleLargeModal();
        getData();
        toast.success("Data added successfully.");
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
        toast.error("Failed to add data."); // Show error toast
      });
  };

  const [isLoading, setIsLoading] = useState(true);

  // get data

  const [data, setData] = useState([]);

  function getData() {
    setIsLoading(true);
    axios
      .post(`${global.BASEURL}getRecords/adminsubscription`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setIsLoading(false); // Hide spinner after data is fetched
      });
  }

  useEffect(() => {
    getData();
  }, []);

  // update data

  const updateData = (e) => {
    e.preventDefault();
    const itemId = defaultData_?._id;

    axios
      .post(`${global.BASEURL}updateRecord/adminsubscription`, {
        id: itemId,
        name,
        year_rate,
        year_currency,
        month_rate,
        month_currency,
        period,
        city,
        photo_limit,
        description,
        features,
      })
      .then(() => {
        editModal();
        getData();
        toast.success("Data updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating client:", error);
      });
  };

  // end

  // delet data

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const handleDelete = (id) => {
    setDeleteItemId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Close the delete confirmation modal
    setIsDeleteModalOpen(false);

    // Delete the item
    if (deleteItemId) {
      axios
        .post(`${global.BASEURL}deleteRecord/adminsubscription`, {
          id: deleteItemId,
        })
        .then(() => {
          getData();
          toast.success("Data deleted successfully."); // Show success toast
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          toast.error("Failed to delete data."); // Show error toast
        });
    }
  };

  // end
  let counter = 0;
  const columns = [
    {
      name: "Sr.no",
      selector: (row) => ++counter,
      sortable: "true",
      maxWidth:"2rem"
    },
    {
      name: "Subscription Name",
      selector: (row) => row.name,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "Subscriptoin Rate",
      selector: (row) => row.year_rate,
      sortable: "true",
      // maxWidth:"6rem"
    },

    {
      name: "Job Qty",
      selector: (row) => row.city,
      sortable: "true",
      // maxWidth:"6rem"
    },

    {
      name: "Subscription Duration",
      selector: (row) => row.period,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "Photo Limit",
      cell: (row) => row.photo_limit,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="d-flex align-items-center">
          {row.status === "Active" ? (
            <>
              <img
                src={active}
                alt="active"
                width="11"
                height="11"
                className="me-1"
              />
              <span>{row.status}</span>
            </>
          ) : (
            <>
              <img
                src={block}
                alt="block"
                width="11"
                height="11"
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
      cell: (row) => {
        return (
          <div className="d-flex justify-content-end w-100">
            <UncontrolledDropdown className="">
              <DropdownToggle className="pe-1 " tag="span">
                <MoreHorizontal size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <div
                    className="btn btn-white p-0 m-0 w-100"
                    onClick={() => editModal(row)}
                  >
                    <span className="align-middle ms-50">Edit</span>
                  </div>
                </DropdownItem>
                <DropdownItem>
                  <div
                    onClick={() => handleDelete(row._id)}
                    className="btn btn-white p-0 m-0 w-100"
                  >
                    <span className="align-middle ms-50">Delete</span>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        );
      },
    },
  ];

  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

  // Step 3: Function to toggle the modal visibility
  const toggleLargeModal = () => {
    setIsLargeModalOpen(!isLargeModalOpen);
  };

  // edit modal

  const [iseditOpen, setiseditOpen] = useState(false);

  const editModal = (result) => {
    setDefaultData_(result);
    setiseditOpen(!iseditOpen);
  };

  const yearly = [
    { label: "AUD", value: "AUD" },
    { label: "USD", value: "abc" },
    { label: "EUR", value: "EUR" },
    { label: "GBR", value: "GBR" },
    { label: "CAD", value: "CAD" },
  ];
  const monthly_a = [
    { label: "AUD", value: "AUD" },
    { label: "USD", value: "abc" },
    { label: "EUR", value: "EUR" },
    { label: "GBR", value: "GBR" },
    { label: "CAD", value: "CAD" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#2873B9",
      border: "0px",
      borderRadius: "0px 5px 5px 0px",
    }),
  };

  return (
    <>
      <ToastContainer />

      <div className="d-flex align-align-items-center justify-content-between mt-3 mb-3">
        <h5 className="head_title">Subscription</h5>
        <div className="d-flex align-items-center">
          <div>
            <Button className="default_btn" outline onClick={toggleLargeModal}>
              Add Subscription
            </Button>

            <Modal
              isOpen={isLargeModalOpen}
              toggle={toggleLargeModal} // Use the correct toggle function for the large modal
              size="lg"
            >
              <ModalHeader
                toggle={toggleLargeModal} // Use the correct toggle function for the large modal
              ></ModalHeader>
              <ModalBody>
                <div className="icon_div_main mb-2">
                  <img className="icon_sizee" src="./icons/dollar.png" alt="" />
                </div>
                <h5 className="modal_title">Add New Subscription Plan</h5>
                <span className="modal_subtitle">
                  Eneter the correct details for adding new subscription plan to
                  your system.
                </span>

                <Form className="d-flex flex-column p-1">
                  <Row>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Subscription Plan Name
                      </Label>
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Subscription Plan Name"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Subscription Rate Yearly
                      </Label>
                      <div className="d-flex align-items-center main_select_div">
                        <Input
                          onChange={(e) => setYear_rate(e.target.value)}
                          type="number"
                          className="border-0"
                          placeholder="Yearly"
                        />
                        <div
                          className="custom_select"
                          style={{ width: "12rem" }}
                        >
                          <Select
                            onChange={(selectedOption) =>
                              setYear_currency(selectedOption.value)
                            }
                            isClearable={false}
                            classNamePrefix="select"
                            options={yearly}
                            styles={customStyles}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Monthly</Label>
                      <div className="d-flex align-items-center main_select_div">
                        <Input
                          onChange={(e) => setMonth_rate(e.target.value)}
                          className="border-0"
                          type="number"
                          placeholder="Monthly"
                        />
                        <div
                          className="custom_select"
                          style={{ width: "12rem" }}
                        >
                          <Select
                            onChange={(selectedOption) =>
                              setMonth_currency(selectedOption.value)
                            }
                            isClearable={false}
                            classNamePrefix="select"
                            options={monthly_a}
                            styles={customStyles}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Subscription Period (Years)
                      </Label>
                      <Input
                        onChange={(e) => setPeriod(e.target.value)}
                        type="number"
                        placeholder="Subscription Period"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Job Qty</Label>
                      <Input
                        onChange={(e) => setCity(e.target.value)}
                        type="number"
                        placeholder="Job Qty"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Photo Limit
                      </Label>
                      <Input
                        onChange={(e) => setPhoto_limit(e.target.value)}
                        type="number"
                        placeholder="Photo Limit"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Description
                      </Label>
                      <Input
                        onChange={(e) => setDescription(e.target.value)}
                        type="textarea"
                        placeholder="Description"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        List Of Feature
                      </Label>
                      <Input
                        onChange={(e) => setFeatures(e.target.value)}
                        type="textarea"
                        placeholder="List Of Feature"
                      />
                    </Col>
                  </Row>
                  <div className="mx-auto">
                    <Button
                      onClick={postData}
                      type="submit"
                      className="mt-2 default_btn"
                    >
                      Add Plan
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </Modal>

            {/* edit modal */}
            <Modal isOpen={iseditOpen} toggle={editModal} size="lg">
              <ModalHeader toggle={editModal}></ModalHeader>
              <ModalBody>
                <div className="icon_div_main mb-2">
                  {/* <img className="icon_sizee" src={userIcon} alt="" /> */}
                </div>
                <h5 className="modal_title">Edit New Client</h5>
                <span className="modal_subtitle">
                  Eneter the correct details of your client which you want to
                  edit.
                </span>

                <Form className="d-flex flex-column p-1">
                  <Row>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Subscription Plan Name
                      </Label>
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={defaultData_?.name}
                        type="text"
                        placeholder="Subscription Plan Name"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Subscription Rate Yearly
                      </Label>
                      <div className="d-flex align-items-center main_select_div">
                        <Input
                          onChange={(e) => setYear_rate(e.target.value)}
                          defaultValue={defaultData_?.year_rate}
                          type="number"
                          className="border-0"
                          placeholder="Yearly"
                        />
                        <div
                          className="custom_select"
                          style={{ width: "12rem" }}
                        >
                          <Select
                            onChange={(selectedOption) =>
                              setYear_currency(selectedOption.value)
                            }
                            value={yearly.find(
                              (option) => option.value === year_currency
                            )}
                            isClearable={false}
                            classNamePrefix="select"
                            options={yearly}
                            styles={customStyles}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Monthly</Label>
                      <div className="d-flex align-items-center main_select_div">
                        <Input
                          onChange={(e) => setMonth_rate(e.target.value)}
                          defaultValue={defaultData_?.month_rate}
                          className="border-0"
                          type="number"
                          placeholder="Monthly"
                        />
                        <div
                          className="custom_select"
                          style={{ width: "12rem" }}
                        >
                          <Select
                            onChange={(selectedOption) =>
                              setMonth_currency(selectedOption.value)
                            }
                            value={monthly_a.find(
                              (option) => option.value === month_currency
                            )}
                            isC
                            isClearable={false}
                            classNamePrefix="select"
                            options={monthly_a}
                            styles={customStyles}
                          />
                        </div>
                      </div>
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Subscription Period (Years)
                      </Label>
                      <Input
                        onChange={(e) => setPeriod(e.target.value)}
                        defaultValue={defaultData_?.period}
                        type="number"
                        placeholder="Subscription Period"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Job Qty</Label>
                      <Input
                        onChange={(e) => setCity(e.target.value)}
                        defaultValue={defaultData_?.city}
                        type="number"
                        placeholder="Job Qty"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Photo Limit
                      </Label>
                      <Input
                        onChange={(e) => setPhoto_limit(e.target.value)}
                        defaultValue={defaultData_?.photo_limit}
                        type="number"
                        placeholder="Photo Limit"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Description
                      </Label>
                      <Input
                        onChange={(e) => setDescription(e.target.value)}
                        defaultValue={defaultData_?.description}
                        type="textarea"
                        placeholder="Description"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        List Of Feature
                      </Label>
                      <Input
                        onChange={(e) => setFeatures(e.target.value)}
                        defaultValue={defaultData_?.features}
                        type="textarea"
                        placeholder="List Of Feature"
                      />
                    </Col>
                  </Row>
                  <div className="mx-auto">
                    <Button
                      onClick={updateData}
                      type="submit"
                      className="mt-2 default_btn"
                    >
                      Update
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </Modal>

            <Modal isOpen={isDeleteModalOpen}>
              <ModalHeader>Delete Confirmation</ModalHeader>
              <ModalBody>Are you sure you want to delete this item?</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onClick={() => handleDeleteConfirm(deleteItemId)}
                >
                  Yes
                </Button>
                <Button
                  color="secondary"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  No
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="ms-2">
            <UncontrolledButtonDropdown>
              <DropdownToggle className="filter_btn">
                <img className="filter_img" src="./icons/filter_icon.png" />
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
                  Active
                </DropdownItem>
                <DropdownItem
                  href="/"
                  tag="a"
                  onClick={(e) => e.preventDefault()}
                >
                  Pending
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      </div>
      {/* table */}

      <div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Spinerr />
          </div>
        ) : data.length === 0 ? (
          <p>There is no data to show.</p>
        ) : (
          <ClientDataTable columns={columns} data={data} />
        )}
      </div>
    </>
  );
};

export default Subscriptions;
