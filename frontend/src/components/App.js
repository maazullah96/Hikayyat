import React from "react";
import { Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";
// import Slides from "./Reveales";
import ExcreptForm from "./Excreptform";
import App from "./Slides/App";

export default () => (
  <>
    <Route exact path="/" component={App} />
    <Route exact path="/category/:id" component={App} />

    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
    {/* <Route exact path="/new" component={Reader} /> */}
    <ProtectedRoute path="/dashboard" component={Dashboard} />
    {/* <Route exact path="/manage/categories/modular" component={CategoryForm} /> */}
    <Route exact path="/excrept/" component={ExcreptForm} />
  </>
);
