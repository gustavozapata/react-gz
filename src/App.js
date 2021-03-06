import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

//Components
import TodoPreview from "./components/TodoPreview";
import TheCloud from "./components/TheCloud";
import Poll from "./components/Poll";
import Quiz from "./components/Quiz";
import CommentText from "./components/CommentText";

//Pages
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Todo from "./components/pages/Todo";

//Testing
import Parent from "./learning/Parent";

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
            render={() => (
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
          <Route path="/react-gz/login" component={Login} />
          <Route path="/react-gz/signup" component={Signup} />
          <Route path="/react-gz/todo" component={Todo} />
          <Route path="/react-gz/learning" component={Parent} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
