import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./pages/NavBar";
import Main from "./pages/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export default class Demo extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar />
          <Main />
        </Router>
      </Wrapper>
    );
  }
}
