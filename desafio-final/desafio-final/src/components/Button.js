import { useState } from "react";

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
