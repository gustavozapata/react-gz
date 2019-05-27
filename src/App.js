import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import TodoPreview from "./components/TodoPreview";
import FilesTool from "./components/FilesTool";
import Poll from "./components/Poll";
import Todo from "./components/pages/Todo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <section>
                  <TodoPreview />
                  <Poll />
                  <FilesTool />
                </section>
              </React.Fragment>
            )}
          />
          <Route path="/todo" component={Todo} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
