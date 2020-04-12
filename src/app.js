import React from "react";
import ReactDOM from "react-dom";
import StrParam from "./StrParam";

const App = () => {
  return (
    <div>
      <h1>hello World!</h1>
      <StrParam />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
