import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RuledRoute from "./ruledRoute";
import { LoginPage, RegisterPage } from "components/auth";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <RuledRoute exact rule={'authenticated'} path="/" component={() => (
        <h1>Home page</h1>
      )} />
      <RuledRoute rule={'guest'} path="/register" component={RegisterPage} />
      <RuledRoute rule={'guest'} path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;