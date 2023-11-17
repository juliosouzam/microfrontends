import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#_mkt-dev-root");
  if (element) {
    mount(element);
  }
}

export { mount };
