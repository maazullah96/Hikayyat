import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faBars } from "@fortawesome/free-solid-svg-icons";

import SideNav from "./SideNav/SideNav";

export default function NavHeader(props) {
  // const randomfunc = () => {
  //   return "#/".concat(Math.floor(Math.random() * 5).toString());
  // };

  return (
    <div id="container">
      <a id="left" href="/#">
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "30px", color: "#000000" }}
          onClick={props.onOpenNav}
        />
      </a>

      <a
        id="center"
        href="/#"
        style={{
          fontSize: "30px",
          color: "#000000"
        }}
      >
        The Hikayat : Life is a Parable
      </a>

      <a
        class="right"
        href={"#/".concat(Math.floor(Math.random() * 5).toString())}
        style={{ float: "right", marginRight: "5%" }}
      >
        <FontAwesomeIcon
          icon={faSync}
          style={{ fontSize: "30px", color: "#000000" }}
        />
      </a>
      <SideNav {...props} />
    </div>
  );
}
