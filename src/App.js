import React, { Component } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TodoPreview from "./components/TodoPreview";
import FilesTool from "./components/FilesTool";
import Poll from "./components/Poll";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <section>
          <TodoPreview />
          <Poll />
          <FilesTool />
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;
