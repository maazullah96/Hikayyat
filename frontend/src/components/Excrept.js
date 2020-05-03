import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import GetExcrept from "./GetExcrept";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ExcreptForm from "./Excreptform";

function Excrept({ excrept }) {
  const [deleteShow, setDeleteShow] = useState(false);
  const handleClose = () => setEditShow(false);

  const EditExcrept = (title, book, category, author, body, keywords) => {
    // const { title, book, category, author, body } = this.state;
    console.log(title, book, category, author, body);

    axios
      .put(`/excrept/update/${excrept._id}`, {
        title,
        book,
        category,
        author,
        body,
        keywords
      })
      .then(response => {
        console.log(response);
        window.location.reload(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteHandler = e => {
    e.preventDefault();
    setDeleteShow(true);
    axios
      .delete(`/excrept/delete/${excrept._id}`)
      .then(response => {
        console.log(response);
        window.location.reload(false);
        // return <Redirect to="/manage/categories" />;
      })
      .catch(error => {
        console.log(error);
      });
  };
  // const link = "/articles/Article/" ,{Article._id};
  // const [shown, setShow] = useState(false);
  const [getShow, setGetShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  // console.log("Before shown" + shown);
  const getHandler = e => {
    setGetShow(true);
    console.log("shown" + getShow);
  };
  const editHandler = e => {
    // console.log(category);
    setEditShow(true);
  };

  return (
    <React.Fragment>
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
      <GetExcrept
        size="sm"
        show={getShow}
        onHide={() => setGetShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        excrept={excrept}
      ></GetExcrept>

      <ExcreptForm
        // size="sm"
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        EditExcrept={EditExcrept}
        excrept={excrept}
      />
      <td>
        <Button variant="primary" onClick={() => setGetShow(true)}>
          Id
        </Button>
        {/* <Link
          to="#"
          onClick={getHandler}
          // className="btn btn-tiny btn-default"
        >
          {excrept._id}
        </Link> */}
      </td>
      <td>{excrept.title}</td>
      <td>{moment(excrept.created_at).format("MMM Do YY")}</td>
      {/* <td>{moment(article.author).format("MMM Do YY")}</td> */}
      <td>
        <Button variant="info" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        {/* <Link
          to={`/manage/articles/edit/${excrept._id}`}
          className="btn btn-tiny btn-default"
        >
          Edit
        </Link>
         */}
      </td>
      <td>
        <Button variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </td>
      <td>{excrept.author}</td>
    </React.Fragment>
  );
}

export default Excrept;
