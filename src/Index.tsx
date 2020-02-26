import * as React from "react";
import * as ReactDOM from "react-dom";
import { Routes } from "./Routes";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById("app")
);
