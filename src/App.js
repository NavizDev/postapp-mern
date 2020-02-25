import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./components/register/register";
import Login from "./components/login/login";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            {false && <Header />}
            {false && <Sidebar />}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/Login" component={Login} />
            {false && <Footer />}
          </div>
        </Switch>
      </Router>
    );
  }
}
