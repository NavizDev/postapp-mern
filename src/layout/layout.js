import React from "react";
import { Link } from "react-router-dom";

export default function layout(props) {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <b>Post</b>App
        </div>
        {/* /.login-logo */}

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">{props.title}</p>

            {props.children}
            {/* /.social-auth-links */}
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}
