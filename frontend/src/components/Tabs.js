import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ManageExcrepts from "./ManageExcrepts";
import Categories from "./Categories";

function Tabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="articles">
      <Row style={{ padding: "1rem" }}>
        <Col sm={1}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="categories">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="articles">Articles</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="categories">
              <Categories />
            </Tab.Pane>
            <Tab.Pane eventKey="articles">
              <ManageExcrepts />
              {/* <Sonnet /> */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
export default Tabs;
