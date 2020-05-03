import React from "react";
import styles from "./footer.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const footer = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Collapse className="justify-content-center">
      <Navbar.Text>@Maktub All rights reserved.</Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default footer;
