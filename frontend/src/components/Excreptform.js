import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Select from "react-select";
// import Creatable, { makeCreatableSelect } from "react-select/creatable";
import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null
};
const createOption = label => ({
  label,
  value: label
});

// import { useState, } from 'react';
function ExcreptForm(props) {
  // const [validated, setValidated] = useState(false);
  // const inputValue
  const [inputValue, setInputValue] = useState("");

  const filterOptions = [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
    { value: "bat", label: "Bat" }
  ];

  const [stateOptions, setStateValues] = useState(filterOptions);
  const [multiValue, setMultiValue] = useState([]);
  //   console.log(initialValue.length);

  useEffect(() => {
    setStateValues(filterOptions);
  }, []);

  const [title, setTitle] = useState(
    props.excrept !== undefined ? props.excrept.title : ""
  );

  const [book, setBook] = useState(
    props.excrept !== undefined ? props.excrept.book : ""
  );
  const [category, setCategory] = useState(
    props.excrept !== undefined ? props.excrept.category : ""
  );

  const [author, setAuthor] = useState(
    props.excrept !== undefined ? props.excrept.author : ""
  );

  const [body, setBody] = useState(
    props.excrept !== undefined ? props.excrept.body : ""
  );

  const [categories, setCategories] = useState([]);

  // const ke
  const [keywords, setKeywords] = useState(
    // []
    props.excrept !== undefined ? props.excrept.keywords : []
  );

  var Data = ["this", "example", "isnt", "funny"];

  // const [value, setValue] = useState(
  //   []
  //   // props.excrept !== undefined ? props.excrept.keywords.map(createOption) : []
  // );
  // const [value, setValue] = useState([]);
  // const items => keywords.map(createOption);

  // const setValue => myData.map( r => <li> r </li> );

  const handleChange = e => {
    console.group("Value Changed");
    console.log(keywords);
    console.log(e);
    // console.log(e.value);
    var keyArray = [];
    if (e) {
      var keyArray = e.map(function(item) {
        return item["value"];
      });
      // console.log(keyArray);
    }
    setKeywords(keyArray);

    // console.groupEnd();
    // setValue(value);

    // setKeywords(value);
    // console.log(keywords);
    // this.setState({ value });
  };

  const handleInputChange = keywords => {
    setInputValue(keywords);
    // setKeywords(keywords);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/categories/");
      // console.log(result.data);
      setCategories(result.data.category);
    };

    fetchData();
  }, []);

  const show = props.show;
  // console.log(props);
  const handleKeyDown = event => {
    // const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        setInputValue("");
        // if (keywords) {
        console.log(keywords + "shhhhhhhhhhhhhhhh");
        setKeywords([...keywords, inputValue]);
        // }
        // else {
        // console.log(keywords + "ssssssssssssssss");
        // setKeywords([inputValue]);
        // }
        event.preventDefault();
    }
  };
  const handleSubmit = e => {
    console.log(title, book, category, author, body, keywords);
    e.preventDefault();
    if (props.excrept) {
      props.EditExcrept(title, book, category, author, body, keywords);
    } else {
      props.addNewExcrept(title, book, category, author, body, keywords);
    }
  };

  return (
    <Modal show={show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Row>
          <Col md={{ span: 12, offset: 6 }}>
            {props.excrept !== undefined ? (
              <Modal.Title>Edit Excrept</Modal.Title>
            ) : (
              <Modal.Title>New Excrept</Modal.Title>
            )}
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body>
        {/* {errors ? <Alert variant="danger">{errors}</Alert> : null} */}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom00">
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
          <Form.Group controlId="validationCustom01">
            <Form.Label>Author:</Form.Label>
            <Form.Control
              required
              type="text"
              name="author"
              placeholder="Add Author"
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="validationCustom02">
            <Form.Label>Add Book:</Form.Label>
            <Form.Control
              required
              type="text"
              name="book"
              placeholder="Add Book"
              value={book}
              onChange={e => setBook(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Category</Form.Label>
            <Form.Control
              as="select"
              defaultValue={category === "" ? categories[0] : category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(item => (
                <option key={item._id}>{item.title}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Select Keywords</Form.Label>
            {/* <Creatable
              name="filters"
              placeholder="Filters"
              value={multiValue}
              options={stateOptions}
              onChange={setMultiValue}
              multi
            /> */}
            <CreatableSelect
              components={components}
              inputValue={inputValue}
              isClearable
              isMulti
              menuIsOpen={false}
              onChange={handleChange}
              // onChange={value => handleChange(value)}
              // onChange={value => handleChange(value || [])}
              onInputChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type something and press enter..."
              // value={value}
              value={keywords ? keywords.map(createOption) : ""}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add Book Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
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
export default ExcreptForm;
