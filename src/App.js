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
import Dashboard from "./pages/dashboard/dashboard";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";

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
            <SecuredRoute exact path="/profile" component={Profile} />
            {isLoggedIn() && <Footer />}
          </div>
        </Switch>
      </Router>
    );
  }
}
