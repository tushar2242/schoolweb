import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./components/js/AllCss";
import SetRoute from "./components/Routes/SetRoute";
// import { Provider } from "react-redux";
// import store from "./components/redux/post/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <SetRoute />
  </BrowserRouter>
);
