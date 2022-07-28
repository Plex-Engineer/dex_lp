import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import "index.scss";
import { config } from "global/config/networks";
import { DAppProvider } from "@usedapp/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
