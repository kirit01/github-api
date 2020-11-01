import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer1 from './reducers/rootReducer1'
import rootReducer from './reducers/rootReducer'  

const store1=createStore(rootReducer1);
const store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store1={store1} store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
