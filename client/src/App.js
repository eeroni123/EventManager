import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/layouts/Home";
import About from "./components/layouts/About";
import Layout from "./components/layouts/Layout";
import EventDetail from "./components/presentation/EventDetail";
import EventContainer from "./components/containers/EventContainer";
import EventForm from "./components/containers/EventForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/events/:id" component={EventContainer} />
              <Route path="/submit" component={EventForm} />
            </div>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
