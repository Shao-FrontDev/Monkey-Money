import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NoMatch from "views/404";
import Money from "views/Money";
import Statistics from "views/Statistics";
import Tags from "views/Tags";

function App() {
  return (
    <Switch>
      <Route path="/tags">
        <Tags />
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
