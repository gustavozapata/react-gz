import React, { Component } from "react";

class Quiz extends Component {
  state = {};
  render() {
    return (
      <div className="quiz">
        <h1>EL PEQUEÑO QUIZ</h1>
        <div className="elQuiz">
          <h3>Test your Programming IQ by taking this Quiz</h3>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Quiz;
