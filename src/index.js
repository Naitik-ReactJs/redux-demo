import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "../src/redux/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.subscribe(() => {
  console.log(store.getState(), "updated state");
});
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
