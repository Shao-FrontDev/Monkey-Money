import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.header`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  > a {
    padding: 10px;
    margin: 5px;
    border: 1px green solid;
  }
  > a:hover {
    background: yellow;
  }
`;
export default class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
    );
  }
}
