import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/layouts/Home";
import About from "./components/layouts/About";
import Layout from "./components/layouts/Layout";
import EventDetail from "./components/presentation/EventDetail";
import EventContainer from "./components/containers/EventContainer";
import EventForm from "./components/containers/EventForm";
import LocationForm from "./components/containers/LocationForm";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./components/presentation/Login";
import Register from "./components/presentation/Register";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute path="/events/:id" component={EventContainer} />
        <PrivateRoute path="/submit" component={EventForm} />
        <PrivateRoute path="/location/submit" component={LocationForm} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </Provider>
  );
}
