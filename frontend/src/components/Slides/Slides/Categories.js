import React, { Component } from 'react';

import axios from 'axios';
import NewSlide from './NewSlide';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      editShow: false,
    };
  }
  handleClose() {
    this.setState({ editShow: false });
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/categories')
      .then(response => {
        this.setState({
          categories: response.data.category,
        });
        console.log(response.data.category);
      })
      .catch(error => {
        console.log(error);
      });
  }

  
  render() {
    const { categories } = this.state;

    const categoriesList = categories.map(category => (
      <NewSlide key={category._id} category={category.title} />
    ));
    return <>{categoriesList}</>;
  }
}

export default Categories;
