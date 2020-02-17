import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer classname="main-footer">
        <strong>
          Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div classname="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.0.2
        </div>
      </footer>
    );
  }
}

export default Footer;
