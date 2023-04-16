import "./index.css";

// react
import React from "react";
import { createRoot } from "react-dom/client";

// redux
import { Provider } from "react-redux";
import { store } from "./store";

// components
import App from "./App";

// get element and create root
const el = document.getElementById("root");
const root = createRoot(el);

// render root
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
