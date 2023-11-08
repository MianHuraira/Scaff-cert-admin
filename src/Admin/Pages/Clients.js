import "@styles/react/apps/app-users.scss";
import ClientDataTable from "./table";
// import './client.css';
import "@styles/react/libs/tables/react-dataTable-component.scss";
import React, { useEffect, useState } from "react";
import "./table.css";
import Select from "react-select";
import { Col, Row } from "react-bootstrap";
import active from "../../Admin/assests/icons/active.png";
import block from "../../Admin/assests/icons/block.png";
import userIcon from "../../Admin/assests/client_icon_modal.png";

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
  InputGroup,
} from "reactstrap";
import { MoreHorizontal } from "react-feather";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// for spinner
import Spinerr from "../../views/components/spinners/SpinnerGrowing";

const Clientpage = () => {

  const [defaultData_, setDefaultData_] = useState("");

  // states for update and insert data

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailSecondary, setEmailSecondary] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (defaultData_) {
      setName(defaultData_.name);
      setEmail(defaultData_.email);
      setEmailSecondary(defaultData_.emailSecondary);
      setPhone(defaultData_.phone);
      setAddress(defaultData_.address);
      setCity(defaultData_.city);
      setState(defaultData_.state);
      setZip_code(defaultData_.zip_code);
      setCountry(defaultData_.country);
      setStatus(defaultData_.status);
    }
  }, [defaultData_]);

  // post data

  const postData = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !emailSecondary ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !zip_code ||
      !country ||
      !status
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }
    setName("");
    setEmail("");
    setEmailSecondary("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    setZip_code("");
    setCountry("");
    setStatus("");

    axios
      .post(`${global.BASEURL}createRecord/adminclient`, {
        name,
        email,
        emailSecondary,
        phone,
        address,
        city,
        state,
        zip_code,
        country,
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

  // insert data end
  // spinnere for get data

  const [isLoading, setIsLoading] = useState(true);

  // show data start code
  const [data, setData] = useState([]);

  function getData() {
    setIsLoading(true);
    axios
      .post(`${global.BASEURL}getRecords/adminclient`)
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

  // delete api
  // update data

  const updateData = (e) => {
    e.preventDefault();
    const itemId = defaultData_?._id;

    axios
      .post(`${global.BASEURL}updateRecord/adminclient`, {
        id: itemId,
        name,
        email,
        emailSecondary,
        phone,
        address,
        city,
        state,
        zip_code,
        country,
        status,
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

  // delet api start

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
        .post(`${global.BASEURL}deleteRecord/adminclient`, {
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

  // end delet api

  let counter = 0;
  const columns = [
    {
      name: "Sr.no",
      selector: (row) => ++counter,
      sortable: "true",
      maxWidth: "2rem",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: "true",
      maxWidth: "3rem",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: "true",
      //   // maxWidth:"6rem"
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: "true",
      // maxWidth:"4rem"
    },

    {
      name: "Adress",
      selector: (row) => row.address,
      sortable: "true",
      // maxWidth:"6rem"
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: "true",
      maxWidth: "2rem",
    },
    {
      name: "Joining Date",
      cell: (row) => row.joining || "N/A",
      sortable: "true",
      maxWidth: "2rem",
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
      // maxWidth: "7rem",
      // minWidth: "2rem",
      cell: (row) => {
        // modal edit

        return (
          <div className="d-flex  w-100">
            <UncontrolledDropdown className="">
              <DropdownToggle className="pe-1 " tag="span">
                <MoreHorizontal size={15} />
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <div
                    onClick={() => editModal(row)}
                    outlinex
                    className="btn btn-white w-100 p-0 m-0"
                  >
                    <span className="align-middle ms-50">Edit</span>
                  </div>
                </DropdownItem>

                <DropdownItem>
                  <div
                    onClick={() => handleDelete(row._id)}
                    className="btn btn-white w-100 p-0 m-0"
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

  // sleect  option
  const selectState = [
    { label: "NSW", value: "NSW" },
    { label: "abc", value: "abc" },
    { label: "asd", value: "asd" },
  ];
  const selectStaus = [
    { label: "Active", value: "Active" },
    { label: "Block", value: "Block" },
  ];

  // Step 2: Add state for managing modal visibility
  const [iseditOpen, setiseditOpen] = useState(false);

  const editModal = (result) => {
    setDefaultData_(result);
    setiseditOpen(!iseditOpen);
  };

  // add data modal

  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

  const toggleLargeModal = () => {
    setIsLargeModalOpen(!isLargeModalOpen);
  };

  return (
    <>
      {/* tostify  */}

      <ToastContainer />

      <div className="d-flex align-align-items-center justify-content-between mt-3 mb-3">
        <h5 className="head_title"> Clients</h5>
        <div className="d-flex align-items-center">
          <div>
            <Button className="default_btn" outline onClick={toggleLargeModal}>
              Add Client
            </Button>

            {/* add client modal */}
            <Modal
              isOpen={isLargeModalOpen}
              toggle={toggleLargeModal}
              size="lg"
            >
              <ModalHeader toggle={toggleLargeModal}></ModalHeader>
              <ModalBody>
                <div className="icon_div_main mb-2">
                  <img className="icon_sizee" src={userIcon} alt="" />
                </div>
                <h5 className="modal_title">Add New Client</h5>
                <span className="modal_subtitle">
                  Eneter the correct details of your client which you want to
                  add.
                </span>

                <Form className="d-flex flex-column p-1">
                  <Row>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Name</Label>
                      <Input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Email Address
                      </Label>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        placeholder="Email Address"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Secondary Email Address
                      </Label>
                      <Input
                        onChange={(e) => setEmailSecondary(e.target.value)}
                        type="email"
                        required
                        placeholder="Secondary Email Address"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Phone Number
                      </Label>
                      <Input
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        required
                        placeholder="Phone Number"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Address</Label>
                      <Input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        required
                        placeholder="Address"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">City</Label>
                      <Input
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        required
                        placeholder="City"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">State</Label>
                      <Select
                        onChange={(selectedOption) =>
                          setState(selectedOption.value)
                        }
                        isClearable={false}
                        classNamePrefix="select"
                        options={selectState}
                        required
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Zip Code</Label>
                      <Input
                        onChange={(e) => setZip_code(e.target.value)}
                        type="number"
                        placeholder="Zip Code"
                        required
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Country</Label>
                      <Input
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                        required
                        placeholder="Country"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Status</Label>
                      <Select
                        onChange={(selectedOption) =>
                          setStatus(selectedOption.value)
                        }
                        isClearable={false}
                        classNamePrefix="select"
                        required
                        options={selectStaus}
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Password</Label>
                      <Input type="password" placeholder="Password" />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Re Password
                      </Label>
                      <Input type="password" placeholder="Re Password" />
                    </Col>
                  </Row>
                  <div className="mx-auto">
                    <Button
                      onClick={postData}
                      type="submit"
                      className="mt-2 default_btn"
                    >
                      Add Client
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
                  <img className="icon_sizee" src={userIcon} alt="" />
                </div>
                <h5 className="modal_title">Edit New Client</h5>
                <span className="modal_subtitle">
                  Eneter the correct details of your client which you want to
                  edit.
                </span>

                <Form className="d-flex flex-column p-1">
                  <Row>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Name</Label>
                      <Input
                        defaultValue={defaultData_?.name}
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Email Address
                      </Label>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue={defaultData_?.email}
                        type="email"
                        placeholder="Email Address"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Secondary Email Address
                      </Label>
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        defaultValue={defaultData_?.emailSecondary}
                        placeholder="Secondary Email Address"
                      />
                    </Col>

                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">
                        Phone Number
                      </Label>
                      <Input
                        onChange={(e) => setPhone(e.target.value)}
                        defaultValue={defaultData_?.phone}
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Address</Label>
                      <Input
                        onChange={(e) => setAddress(e.target.value)}
                        defaultValue={defaultData_?.address}
                        type="text"
                        placeholder="Address"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">City</Label>
                      <Input
                        onChange={(e) => setCity(e.target.value)}
                        defaultValue={defaultData_?.city}
                        type="text"
                        placeholder="City"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">State</Label>
                      <Select
                        onChange={(selectedOption) =>
                          setState(selectedOption.value)
                        }
                        value={selectState.find(
                          (option) => option.value === state
                        )}
                        isClearable={false}
                        classNamePrefix="select"
                        options={selectState}
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Zip Code</Label>
                      <Input
                        onChange={(e) => setZip_code(e.target.value)}
                        defaultValue={defaultData_?.zip_code}
                        type="number"
                        placeholder="Zip Code"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Country</Label>
                      <Input
                        onChange={(e) => setCountry(e.target.value)}
                        defaultValue={defaultData_?.country}
                        type="text"
                        placeholder="Country"
                      />
                    </Col>
                    <Col className="mb-2" lg="6" md="12">
                      <Label className="value_font input_label">Status</Label>
                      <Select
                        onChange={(selectedOption) =>
                          setStatus(selectedOption.value)
                        }
                        value={selectStaus.find(
                          (option) => option.value === status
                        )}
                        isClearable={false}
                        classNamePrefix="select"
                        options={selectStaus}
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

            {/* delete modal */}

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
                  New User
                </DropdownItem>
                <DropdownItem
                  href="/"
                  tag="a"
                  onClick={(e) => e.preventDefault()}
                >
                  Active User
                </DropdownItem>
                <DropdownItem
                  href="/"
                  tag="a"
                  onClick={(e) => e.preventDefault()}
                >
                  Blocked User
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      </div>
      {/* table start */}
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

export default Clientpage;
