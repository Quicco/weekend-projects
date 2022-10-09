import Button from "./Button";
import "./LoginForm.css";
import { useEffect, useState } from "react";
import LoginPopup from "../Popups/LoginPopup";
import HomePage from "../HomePage/HomePage";

const LoginForm = () => {
  // Component States
  const [input, setInput] = useState("");
  const [pwd, setPwd] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  // Event Handlers
  const onChangeHandler = (event) => {
    setInput(event.target.value);
    /* console.log(event.target.value); */
  };
  const onChangeHandlerPwd = (event) => {
    setPwd(event.target.value);
    /* console.log(event.target.value); */
  };
  const onClickHandler = () => {
    if (!input || !pwd) {
      setLoggedIn((loggedIn) => loggedIn);
    } else {
      setLoggedIn((loggedIn) => !loggedIn);
    }
    setInput("");
    setPwd("");
  };

  return !loggedIn ? (
    <div className="login__page">
      <h1>Welcome to the Travel Lounge</h1>
      <p>Please insert your email and password.</p>

      <div className="login__input">
        <input
          type="email"
          value={input}
          placeholder="example@mail.com"
          onChange={onChangeHandler}
        ></input>
        <input
          type="password"
          value={pwd}
          placeholder="password"
          onChange={onChangeHandlerPwd}
        ></input>
      </div>

      <div className="popup-test">
        <Button onClick={onClickHandler}>Login</Button>
      </div>
    </div>
  ) : (
    <div className="homepage">
      <HomePage />
    </div>
  );
};

export default LoginForm;
