import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

import axios from "axios";
import Category from "./Category";

class Categories extends Component {
  constructor(props) {
    super(props);
    // const [editShow, setEditShow] = useState(false);

    this.state = {
      categories: [],
      editShow: false
    };
  }
  handleClose() {
    this.setState({ editShow: false });
  }
  // setEditShow=()
  setEditShow(vars) {
    this.setState({ editShow: vars });
  }
  addCategeory() {
    this.setState({ editShow: true });
  }
  addCategeory = this.addCategeory.bind(this);
  foo(title) {
    axios
      .post("/categories", {
        title
      })
      .then(response => {
        window.location.reload(false);
      })
      .catch(error => {
      });
  }
  componentDidMount() {
    axios
      .get("/categories/")
      .then(response => {
        this.setState({
          categories: response.data.category
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { categories, editShow } = this.state;

    const categoriesList = categories.map(category => (
      <tr>
        <Category key={category._id} category={category} />
      </tr>
    ));
    return (
      <>
        <CategoryForm
          // size="sm"
          show={editShow}
          onHide={() => this.setEditShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          foo={this.foo}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Button
                className="float-right"
                variant="primary"
                onClick={this.addCategeory}
              >
                Add Category
              </Button>
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Category Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{categoriesList}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Categories;
