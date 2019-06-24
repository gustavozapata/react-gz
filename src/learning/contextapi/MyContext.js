import React, { Component } from "react";

//1. we create a new context
const MyContext = React.createContext();

//2. we create a provider component
class MyProvider extends Component {
  state = {
    nombre: "Tavo",
    age: 30,
    male: true
  };
  render() {
    return (
      //3. return the context provider
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        <h1>MyProvider</h1>
        <br />
        <h3>state = &#123;</h3>
        <h3 className="indent">nombre: Tavo</h3>
        <h3 className="indent">age: 30</h3>
        <h3 className="indent">male: true</h3>
        <h2>&#125;</h2>
        <br />
        <h2>
          &lt;MyContext.Provider value=&#123;&#123;state: this.state,
          growYearOlder&#40;&#41; =&gt; age+1&#125;&#125;&gt;
        </h2>
        <br />
        {this.props.children}
        <h2>&lt;/MyContext.Provider&gt;</h2>
      </MyContext.Provider>
    );
  }
}

export { MyContext };

export default MyProvider;
