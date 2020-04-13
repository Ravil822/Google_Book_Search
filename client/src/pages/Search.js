import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Search extends Component {
  state = {
    search: "",
    results: [],
    savedSearch: localStorage.getItem("savedSearch")
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.getBooks(this.state.savedSearch)
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value })
  }

  getBooks = (search) => {
    API.googleBook(search)
      .then(res => {
        this.setState({
          search: '',
          results: res.data.items,
        })
      })

  }

  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("savedSearch", this.state.search);
    this.getBooks(this.state.search);
  }


  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} searchtext={
          this.state.search
        } />
      </div>
    );
  }
}







export default Search;
