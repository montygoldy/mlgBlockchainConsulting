import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Container/Home";
import Layout from "../Layout/Layout";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
