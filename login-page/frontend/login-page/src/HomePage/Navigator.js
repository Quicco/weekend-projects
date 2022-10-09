import React from "react";
import "./Navigator.css";

function Navigator({ children, ...props }) {
  return (
    <nav {...props} className="nav">
      {children}
    </nav>
  );
}

export default Navigator;
