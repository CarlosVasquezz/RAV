import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Asegúrate de importar los estilos globales si los tienes

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
