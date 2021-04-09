import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../home/HomePage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Router;