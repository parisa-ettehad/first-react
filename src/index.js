import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const customStyle = {
  color: "red"
};

customStyle.color = "blue";

ReactDOM.render(<App />, document.getElementById("root"));
