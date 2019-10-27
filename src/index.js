import React from "react";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Uberviz from "./uberviz";
// import Uberflagged from "./uberflagged";
import ScrollToTop from "./components/scrollToTop";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/uberviz" component={Uberviz} />
          {/* <Route path="/uberflagged" component={Uberflagged} />
          <Route component={Error} /> */}
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
