import React, { Component } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Message from "./Message";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin: 5px;
  background: yellowgreen;
  border-radius: 5px;
  > a {
    margin: 5px;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <>
        <Nav>
          <Link to="/home/message/tom/18">Home</Link>
          <Link to="/home/news">News</Link>
        </Nav>
        <div>
          <Route
            path="/home/message/:name/:age"
            component={Message}
          />
          <Route path="/home/news" component={News} />
        </div>
      </>
    );
  }
}

function News() {
  return <>News</>;
}
