import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import TodoPreview from "./components/TodoPreview";
import TheCloud from "./components/TheCloud";
import Poll from "./components/Poll";
import Todo from "./components/pages/Todo";
import Quiz from "./components/Quiz";
import CommentText from "./components/CommentText";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route
            exact
            path="/react-gz"
            render={props => (
              <React.Fragment>
                <section className="section-main">
                  <TodoPreview />
                  <Poll />
                  <TheCloud />
                </section>
                <section className="section2">
                  <Quiz />
                </section>
                <section className="section-comments">
                  <CommentText />
                </section>
              </React.Fragment>
            )}
          />
          <Route path="/react-gz/todo" component={Todo} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
