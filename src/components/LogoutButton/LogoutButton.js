import React from "react";
import swal from "sweetalert";
import { withRouter, useHistory } from "react-router-dom";

const Logout = history => {
  swal("Esta seguro de cerrar Session?", {
    buttons: {
      nope: {
        text: "Volver atras",
        value: "nope"
      },
      sure: {
        text: "Estoy Seguro",
        value: "sure"
      }
    }
  }).then(value => {
    switch (value) {
      case "sure":
        swal("Session cerrada con éxito", "success").then(val => {
          sessionStorage.removeItem("TOKEN_KEY");
          return history.push("/");
        });
        break;
      case "nope":
        swal("Ok", "success");
        break;
      default:
        swal("Got away safely!");
    }
  });
};

const LogoutButton = () => {
  let history = useHistory();

  return (
    <div href="#" onClick={() => Logout(history)} className="dropdown-item">
      <i className="fas fa-sign-out-alt mr-2" /> Cerrar Session
    </div>
  );
};

export default withRouter(LogoutButton);
