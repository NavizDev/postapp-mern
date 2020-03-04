import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./pages/register/register";
import Login from "./pages/login/login";

const isLoggedIn = () => {
  return sessionStorage.getItem("TOKEN_KEY") != null;
};

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.authenticate = true;
    setTimeout(cb, 100); //fake async
  },
  signout(cb) {
    this.authenticate = false;
    setTimeout(cb, 100);
  }
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            {isLoggedIn() && (
              <>
                <Header /> <Sidebar />
              </>
            )}
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <SecuredRoute exact path="/dashboard" component={Dashboard} />
            {isLoggedIn() && <Footer />}
          </div>
        </Switch>
      </Router>
    );
  }
}
