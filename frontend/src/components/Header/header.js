import React from "react";
import style from "./header.css";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = props => {
  return (
    <header className={style.header}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Maktub</Navbar.Brand>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            Signed in as: <a href="#login">{props.username}</a>
          </Navbar.Text>
        </Navbar.Collapse>

        <Button variant="outline-light" onClick={props.logout}>
          Logout
        </Button>
      </Navbar>
    </header>
  );
};

export default Header;
