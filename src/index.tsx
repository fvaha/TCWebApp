import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { LangProvider } from "./components/LanguageContext"; // <- new line

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
