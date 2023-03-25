import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@/styles.scss";
import AppSettingsHoc from "./components/AppSettingsHOC/AppSettingsHOC.component";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppSettingsHoc>
      <App />
    </AppSettingsHoc>
  </React.StrictMode>
);
