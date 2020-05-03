import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";

function GetExcrept(props) {
  // props
  console.log(props);
  const shows = props.show;
  const excrept = props.excrept;
  console.log(excrept);

  // const link = "/articles/Article/" ,{Article._id};
  //   const [show, setShow] = useState(shows);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <Modal show={shows} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{excrept.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={excrept.title} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextAuthor">
            <Form.Label column sm="2">
              Author
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={excrept.author} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextBook">
            <Form.Label column sm="2">
              Book
            </Form.Label>
            <Col sm="10">
              <Form.Control plaintext readOnly defaultValue={excrept.book} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextCategory">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue={excrept.category}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlainDate">
            <Form.Label column sm="2">
              Created At:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                plaintext
                readOnly
                defaultValue={moment(excrept.created_at).format("MMM Do YY")}
              />
            </Col>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              plaintext
              readOnly
              defaultValue={excrept.body}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default GetExcrept;
