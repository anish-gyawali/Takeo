import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CountProvider from "./context/CountProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CountProvider>
    <App />
  </CountProvider>
);
