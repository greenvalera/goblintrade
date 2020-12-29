import React from "react";
import {BrowserRouter, Switch } from "react-router-dom";
import RuledRoute from "./ruledRoute";
import RegisterPage from "../../auth/containers/RegisterPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <RuledRoute exact rule={'authenticated'} path="/" component={() => (
        <h1>Home page</h1>
      )} />
      <RuledRoute rule={'guest'} path="/register" component={RegisterPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;