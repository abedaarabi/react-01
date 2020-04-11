import React from "react";
import ReactDOM from "react-dom";
import Abed from "./Abed";

const App = () => {
  return (
    <div>
      <h1>hello World!</h1>
      <Abed />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
