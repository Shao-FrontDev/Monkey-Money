import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NoMatch from "views/404";
import Money from "views/Money";
import Statistics from "views/Statistics";
import Tag from "views/Tag";
import Tags from "views/Tags";

function App() {
  return (
    <Switch>
      <Route exact path="/tags">
        <Tags />
      </Route>
      <Route path="/tags/:tag" component={Tag}>
        <Tag />
      </Route>
      <Route path="/money">
        <Money />
      </Route>
      <Route path="/statistics">
        <Statistics />
      </Route>
      <Redirect exact from="/" to="money"></Redirect>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
