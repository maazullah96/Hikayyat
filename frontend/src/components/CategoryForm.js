import React, { Component } from "react";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Alert from "react-bootstrap/Alert";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";

function CategoryForm(props) {
  // const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(
    props.category !== undefined ? props.category.title : ""
  );
  const show = props.show;
  // const [show, setShow] = useState(
  //   props.show !== undefined ? props.show : true
  // );
  console.log(show);

  // const handleClose = () => setShow(false);
  // console.log(props);

  const handleSubmit = e => {
    // console.log(title);
    e.preventDefault();
    if (props.category) {
      props.foo(props.category._id, title);
    } else {
      props.foo(title);
    }
  };

  return (
    <Modal show={show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Row>
          <Col md={{ span: 12, offset: 6 }}>
            {props.category !== undefined ? (
              <Modal.Title>Edit Category</Modal.Title>
            ) : (
              <Modal.Title>New Category</Modal.Title>
            )}
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        {/* {errors ? <Alert variant="danger">{errors}</Alert> : null} */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row}>
            <Col md={{ span: 10, offset: 2 }}>
              <Button variant="primary" type="submit" value="Submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default CategoryForm;
