import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Register from "./components/Register";

import * as loginActions from "./actions/login.action"
import Profile from "./components/Profile";

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // ternary condition
      loginActions.isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // ternary condition
      loginActions.isLoggedIn() ? (
        <Redirect to="/" />
      ) : (
        <Login {...props} />
      )
    }
  />
);
const RegisterRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // ternary condition
      loginActions.isLoggedIn() ? (
        <Redirect to="/register" />
      ) : (
        <Register {...props} />
      )
    }
  />
);
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="lg:container mx-auto">
          <Switch>
            <Route path="/" exact component={Home} />
            <LoginRoute path="/login" component={Login} />
            <RegisterRoute path="/register" component={Register} />
            <SecuredRoute path="/add" component={AddProduct} />
            <SecuredRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
