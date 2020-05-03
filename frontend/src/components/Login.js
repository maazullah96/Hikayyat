import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/session";
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
  login: user => dispatch(login(user))
});
const Login = ({ errors, login }) => {
  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value
    };
    console.log(user);
    login(user);
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Row>
            <Col md={{ span: 12, offset: 6 }}>
              <Modal.Title>Login</Modal.Title>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          {errors ? <Alert variant="danger">{errors}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group as={Row}>
              {/* <Col as={Col} md="3"> */}
              <Col md={{ span: 6, offset: 0 }}>
                <Form.Text className="text-muted">
                  Don't have an account?
                  <Link to="/signup"> Register</Link>
                </Form.Text>
              </Col>
              <Col md={{ span: 4, offset: 2 }}>
                <Button variant="primary" type="submit" value="Submit">
                  Login
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    // {/* //   <h1>Login</h1>
    //   <p>{errors}</p>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Email:
    //       <input type="email" name="email" />
    //     </label>
    //     <label>
    //       Password:
    //       <input type="password" name="password" />
    //     </label>
    //     <input type="submit" value="Submit" />
    //   </form> */}
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
