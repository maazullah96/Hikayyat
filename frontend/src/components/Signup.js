import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/session";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const Signup = ({ errors, signup }) => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);

  const handleSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      const user = {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
      };
      signup(user);
    }
  };
  return (
    <Modal show={show}>
      <Modal.Header>
        <Row>
          <Col md={{ span: 12, offset: 6 }}>
            <Modal.Title>SignUp</Modal.Title>
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        {errors ? <Alert variant="danger">{errors}</Alert> : null}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="username"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group as={Row}>
            {/* <Col as={Col} md="3"> */}
            <Col md={{ span: 6, offset: 0 }}>
              <Form.Text className="text-muted">
                Already have an account?
                <Link to="/login">Login</Link>
              </Form.Text>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <Button variant="primary" type="submit" value="Submit">
                SignUp
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
