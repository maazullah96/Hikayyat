import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CategoryForm from "./CategoryForm";

function Category({ category }) {
  const [editShow, setEditShow] = useState(false);
  // const editId ;
  const [deleteShow, setDeleteShow] = useState(false);
  const handleClose = () => setEditShow(false);

  const foo = (id, title) => {
    console.log("foocalled");
    axios
      .put(`/categories/update/${id}`, { title })
      .then(response => {
        window.location.reload(false);
      })
      .catch(error => {
        console.log(`/categories/update/${id}`);
        console.log(title);

        console.log(error);
      });
  };
  const editHandler = e => {
    // console.log(category);
    setEditShow(true);
  };
  // const link = "/articles/category/" ,{category._id};
  const deleteHandler = e => {
    e.preventDefault();
    setDeleteShow(true);
    axios
      .delete(`/categories/delete/${category._id}`)
      .then(response => {
        console.log(response);
        window.location.reload(false);
        // return <Redirect to="/manage/categories" />;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <CategoryForm
        size="sm"
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        foo={foo}
        category={category}
      ></CategoryForm>
      {/* <Modal
        size="sm"
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Edit Button
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal> */}
      <Modal
        size="lg"
        show={deleteShow}
        onHide={() => setDeleteShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <td>{category.title}</td>
      <td>
        <Button variant="info" onClick={editHandler}>
          Edit
        </Button>
        {/* <Link
          to={`/manage/categories/modular/${category._id}`}
          className="btn btn-tiny btn-default"
        >
          Edit
        </Link> */}
      </td>
      <td>
        <Button variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </td>
    </React.Fragment>
  );
}

export default Category;
