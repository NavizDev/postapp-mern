import React, { Component } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Header />
            <Sidebar />
            <Route path="/dashboard" component={Dashboard} />
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}
