import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="lg:container mx-auto">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddProduct} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
