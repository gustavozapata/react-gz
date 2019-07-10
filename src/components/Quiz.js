import React, { Component } from "react";

class Quiz extends Component {
  state = {
    begingQuiz: false
  };

  begingQuiz = () => {
    this.setState({ begingQuiz: true });
  };

  render() {
    return (
      <div className="quiz">
        <h1>EL PEQUEÑO QUIZ</h1>
        <div className="elQuiz">
          {this.state.begingQuiz ? (
            <div
              style={{
                fontWeight: 600,
                textAlign: "left",
                margin: "25px"
              }}
            >
              <p>What is a Hook in React?</p>
              <ul style={{ margin: "20px" }}>
                <li>a. A Component</li>
                <li>b. A function</li>
                <li>c. A Class</li>
              </ul>
            </div>
          ) : (
            <div>
              <h3>Test your Programming IQ by taking this Quiz</h3>
              <button onClick={this.begingQuiz}>Start</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
