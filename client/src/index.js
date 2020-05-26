import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./style.css";
import store from "./redux/store";
import App from "./App";
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
