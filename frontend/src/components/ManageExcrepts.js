import React, { Component } from "react";
import axios from "axios";
import Category from "./Category";
import { Link } from "react-router-dom";
import Excrept from "./Excrept";
import Button from "react-bootstrap/Button";
import ExcreptForm from "./Excreptform";

class ManageExcrepts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excrepts: [],
      editShow: false
    };
  }
  addExcrept() {
    this.setState({ editShow: true });
  }
  addExcrept = this.addExcrept.bind(this);

  setEditShow(vars) {
    this.setState({ editShow: vars });
  }

  addNewExcrept(title, book, category, author, body, keywords) {
    console.log(title, book, category, author, body, keywords);

    axios
      .post("/excrept/", {
        title,
        book,
        category,
        author,
        body,
        keywords
      })
      .then(response => {
        console.log(response);
        window.location.reload(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    console.log("component did mount");
    axios
      .get("/excrept")
      .then(response => {
        console.log(response.data);
        this.setState({
          //   pagetitle: response.data.title,
          excrepts: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { excrepts, editShow } = this.state;
    const excreptsList = excrepts.map(excrept => (
      <tr>
        <Excrept key={excrept._id} excrept={excrept}></Excrept>
      </tr>
    ));
    return (
      <>
        <ExcreptForm
          // size="sm"
          show={editShow}
          onHide={() => this.setEditShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          addNewExcrept={this.addNewExcrept}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Button
                className="float-right"
                variant="primary"
                onClick={this.addExcrept}
              >
                Add Excrept
              </Button>
              {/* <Link to={`/manage/articles/add`} className="btn btn-default">
                Add Article
              </Link> */}
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Excrept Title</th>
                <th>Date Published</th>
                {/* <th>Author</th> */}
                <th>Edit</th>
                <th>Delete</th>

                <th>Author</th>
              </tr>
            </thead>
            <tbody>{excreptsList}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ManageExcrepts;
