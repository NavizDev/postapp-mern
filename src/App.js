import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {false && <Header />}
          {false && <Sidebar />}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          {false && <Footer />}
        </Switch>
      </Router>
    );
  }
}
