import React, { useState } from "react";

const ToggleWithHooks = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h2 style={toggleStyle(toggle)}>React Hooks</h2>
      <br />
      <p>
        React Hooks allows us to use state in a functional components (in other
        words, without using a class)
      </p>
      <br />
      <code>
        const [toggle, setToggle] = useState(false); <br />
        &lt;input onChange=&#123;e => setToggle(!toggle)&#125;
        checked=&#123;toggle&#125; /&gt;
      </code>
      <br />
      <br />
      <label>
        <input
          onChange={e => setToggle(!toggle)}
          type="checkbox"
          checked={toggle}
        />
        <span>{` ${JSON.stringify(toggle)}`}</span>
      </label>
    </div>
  );
};

const toggleStyle = toggle => {
  return {
    color: toggle ? "var(--navy)" : "black"
  };
};

export default ToggleWithHooks;
