import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { legacy_createStore as createStore } from "redux";
import reducers from "./ex070/redux/reducers";

const store = createStore(reducers);
const root = createRoot(document.getElementById("root"));

const listner = () => {
  root.render(<App store={store} />);
};

store.subscribe(listner);
listner();
