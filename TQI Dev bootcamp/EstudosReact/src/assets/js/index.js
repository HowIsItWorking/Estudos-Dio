import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import App from "./App";

/*! IMPORTE O ESTILO POR AQUI!!! NUNCA PELO INDEX.HTML!!! */
import "../css/style.css";

const CONTAINER = document.getElementById("root")

const ROOT = createRoot(CONTAINER);

ROOT.render(<App />);