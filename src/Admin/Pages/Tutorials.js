import { React, useState, useEffect , useRef} from "react";
import "@styles/react/apps/app-users.scss";
// import './client.css';
import "@styles/react/libs/tables/react-dataTable-component.scss";
import ReactPlayer from 'react-player'

import { MoreHorizontal } from "react-feather";
import {
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Label,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { Card, Col, Row } from "react-bootstrap";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// for spinner
import Spinerr from "../../views/components/spinners/SpinnerGrowing";

const Tutorials = () => {
  const [basicModal, setBasicModal] = useState(false);

  const [defaultData_, setDefaultData_] = useState("");

  // states for update and insert data

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (defaultData_) {
      setTitle(defaultData_.title);
      setUrl(defaultData_.url);
      setDescription(defaultData_.description);
    }
  }, [defaultData_]);

  // post data

  const postData = (e) => {
    e.preventDefault();
    if (!title || !url || !description) {
      toast.error("Please fill out all required fields.");
      return;
    }
    setTitle("");
    setUrl("");
    setDescription("");

    axios
      .post(`${global.BASEURL}createRecord/tutorials`, {
        title,
        url,
        description,
      })
      .then(() => {
        setBasicModal();
        getData();
        toast.success("Data added successfully.");
      })
      .catch((error) => {
        console.error("Error adding data: ", error);
        toast.error("Failed to add data."); // Show error toast
      });
  };

  // get data

  const [isLoading, setIsLoading] = useState(true);

  // show data start code
  const [data, setData] = useState([]);

  function getData() {
    setIsLoading(true);
    axios
      .post(`${global.BASEURL}getRecords/tutorials`)
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
        .post(`${global.BASEURL}deleteRecord/tutorials`, {
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

  // update data

  const updateData = (e) => {
    e.preventDefault();
    const itemId = defaultData_?._id;
    axios
      .post(`${global.BASEURL}updateRecord/tutorials`, {
        id: itemId,
        title,
        url,
        description,
      })
      .then(() => {
        editRisk();
        getData();
        toast.success("Data updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating client:", error);
      });
  };

  // edidt modal

  const [riskModal, setriskModal] = useState(false);

  const editRisk = (result) => {
    setDefaultData_(result);
    setriskModal(!riskModal);
  };

  return (
    <>
      <ToastContainer />

      <div className="d-flex align-align-items-center justify-content-between mt-3 mb-3">
        <h5 className="head_title"> Tutorials</h5>
        <div>
          <Button
            className="default_btn"
            outline
            onClick={() => setBasicModal(!basicModal)}
          >
            Add Tutorial
          </Button>

          <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
            <ModalHeader
              toggle={() => setBasicModal(!basicModal)}
            ></ModalHeader>
            <ModalBody>
              <div className="icon_div_main mb-2">
                <img className="icon_sizee" src="./icons/video.png" alt="" />
              </div>
              <h5 className="modal_title">Add New Tutorials Vides</h5>
              <span className="modal_subtitle">
                Kindaly enter the url , title and description to upload / add
                new tutorials vidoes .
              </span>

              <Form className="d-flex flex-column p-1">
                <Row>
                  <Col className="mb-2" lg="6" md="12">
                    <Label className="value_font input_label">Url</Label>
                    <Input
                      onChange={(e) => setUrl(e.target.value)}
                      type="text"
                      placeholder="Url"
                    />
                  </Col>
                  <Col className="mb-2" lg="6" md="12">
                    <Label className="value_font input_label">Title</Label>
                    <Input
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      placeholder="Title"
                    />
                  </Col>

                  <Col className="mb-2" lg="12">
                    <Label className="value_font input_label">
                      Description
                    </Label>
                    <Input
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      placeholder="Description"
                    />
                  </Col>
                </Row>
                <div className="mx-auto">
                  <Button
                    onClick={postData}
                    type="submit"
                    className="mt-2 default_btn"
                  >
                    Upload
                  </Button>
                </div>
              </Form>
            </ModalBody>
          </Modal>

          {/* edidt modal  */}

          <Modal
            isOpen={riskModal}
            toggle={editRisk} // Use the correct toggle function for the large modal
            size="lg"
          >
            <ModalHeader
              toggle={editRisk} // Use the correct toggle function for the large modal
            ></ModalHeader>
            <ModalBody>
              <h5 className="modal_title">Edit Tutorials Vides</h5>
              <span className="modal_subtitle">
                Enter the correct details of the form which you want to edit.
              </span>

              <Form className="d-flex flex-column p-1">
                <Row>
                  <Col className="mb-2" lg="6" md="12">
                    <Label className="value_font input_label">Url</Label>
                    <Input
                      onChange={(e) => setUrl(e.target.value)}
                      defaultValue={defaultData_?.url}
                      type="text"
                      placeholder="Url"
                    />
                  </Col>
                  <Col className="mb-2" lg="6" md="12">
                    <Label className="value_font input_label">Title</Label>
                    <Input
                      onChange={(e) => setTitle(e.target.value)}
                      defaultValue={defaultData_?.title}
                      type="text"
                      placeholder="Title"
                    />
                  </Col>

                  <Col className="mb-2" lg="12">
                    <Label className="value_font input_label">
                      Description
                    </Label>
                    <Input
                      onChange={(e) => setDescription(e.target.value)}
                      defaultValue={defaultData_?.description}
                      type="text"
                      placeholder="Description"
                    />
                  </Col>
                </Row>
                <div className="mx-auto">
                  <Button
                    onClick={updateData}
                    type="submit"
                    className="mt-2 default_btn"
                  >
                    Submit
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
      </div>
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
        <Row className="gx-5">
          {data.map((item, index) => {
            
            return (
              <Col lg="4" md="6" sm="6" xs="12" key={index} className="mb-2">
                <Card style={{height:"94%"}} key={index}>
                  <div className="video_div">
                    <ReactPlayer  url={item.url} controls={true} />
                  </div>
                  <CardBody>
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="head_title truncate-paragraph_head">{item.title}</h5>
                      <UncontrolledDropdown>
                        <DropdownToggle className="pe-1 " tag="span">
                          <MoreHorizontal size={15} />
                        </DropdownToggle>
                        <DropdownMenu end>
                          <DropdownItem>
                            <div
                              onClick={() => editRisk(item)}
                              className="btn btn-white w-100 p-0 m-0"
                            >
                              <span className="align-middle ms-50">Edit</span>
                            </div>
                          </DropdownItem>

                          <DropdownItem>
                            <div
                              onClick={() => handleDelete(item._id)}
                              className="btn btn-white w-100 p-0 m-0"
                            >
                              Delete
                            </div>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="truncate-paragraph">
                      <p className="modal_subtitle">{item.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default Tutorials;
