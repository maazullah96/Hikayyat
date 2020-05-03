import React, { Component } from "react";
import axios from "axios";
import Reveal from "reveal.js";
// import revealOptions from "./revealOptions";

import NewSlide from "./NewSlide";

class Excrept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excrepts: [],
      apiCall: "/excrept",
      categoryApi: "/category?category=",
      excreptApi: "/pages?page=",
      apiS: "",
      totalResults: 0,
      currentPage: 1,
      nextPage: 1,
      catApi: "",
      excApi: "",
      // start: this.props.start,
      // end: this.props.start + this.props.amount,
      // amount:this.props.amount
      editShow: false
    };
  }
  componentDidMount() {
    // alert(this.props.category);
    if (this.props.category !== undefined) {
      var catApi =
        this.state.apiCall +
        this.state.categoryApi +
        this.props.category +
        "&page=";
    } else {
      var catApi = this.state.apiCall + "/pages?page=";
    }
    this.setState({
      catApi: catApi
    });
    console.log(catApi + this.state.nextPage + "asdhasdasl");
    axios
      .get(catApi + this.state.nextPage)
      .then(response => {
        console.log(response);
        this.setState({
          excrepts: response.data.excrepts,
          nextPage: response.data.nextPage
        });
      })
      .catch(error => {});

    Reveal.addEventListener("slidechanged", event => {
      var states = Reveal.getState();
      console.log(states["indexh"]);
      if (states["indexh"] >= this.state.excrepts.length) {
        // console.log(
        //   `http://localhost:5000/excrept/pages?page=${this.state.nextPage}`
        // );
        console.log(this.state.catApi + this.state.nextPage);
        axios
          .get(this.state.catApi + this.state.nextPage)
          .then(response => {
            console.log(response);
            this.setState({
              excrepts: [...this.state.excrepts, ...response.data.excrepts],
              nextPage: response.data.nextPage
            });
          })
          .catch(error => {});
      }
    });
  }
  render() {
    const { excrepts } = this.state;
    const excreptsList = excrepts.map(excrept => (
      <NewSlide key={excrept._id} excrept={excrept} />
    ));
    return <>{excreptsList}</>;
  }
}

export default Excrept;
