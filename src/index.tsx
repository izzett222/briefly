import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "@reach/dialog/styles.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
