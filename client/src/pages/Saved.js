import React, { useEffect, useState, Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Saved extends Component {
  state = {
      saved: [],
  }

  componentDidMount() {
      API.getBooks()
          .then(res => {
              this.setState({
                  ...this.state,
                  saved: res.data
              })
          })
  };
}


export default Saved;
