import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

export default class Main extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/about" component={Display} />
          <Route path="/home" component={Home} />
          <Redirect to="home" />
        </Switch>
      </>
    );
  }
}

function Display() {
  return <div>Display</div>;
}
