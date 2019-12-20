import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Index from "../src/pages/index";
import Details from "../src/pages/orders";
import Orders from "../src/pages/details";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Index />
      </Route>

      <Route exact path="/orders">
        <Details />
      </Route>

      <Route exact path="/details">
        <Orders />
      </Route>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
