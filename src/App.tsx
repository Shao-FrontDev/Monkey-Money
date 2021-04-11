import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import NoMatch from "views/404";
// import Money from "views/Money";
// import Statistics from "views/Statistics";
// import Tag from "views/Tag";
// import Tags from "views/Tags";

const NoMatch = lazy(() => import("views/404"));
const Money = lazy(() => import("views/Money"));
const Statistics = lazy(() => import("views/Statistics"));
const Tag = lazy(() => import("views/Tag"));
const Tags = lazy(() => import("views/Tags"));

function App() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route path="/tags/:id" component={Tag}>
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
      </Suspense>
    </Switch>
  );
}

export default App;
