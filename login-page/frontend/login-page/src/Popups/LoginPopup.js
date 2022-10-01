import React from "react";
import "./LoginPopup.css";

function LoginPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button>close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default LoginPopup;
