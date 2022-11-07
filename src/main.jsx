import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Import our custom CSS
import "../src/scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="yevenes-consultores">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
