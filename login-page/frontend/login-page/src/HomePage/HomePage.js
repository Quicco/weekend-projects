import React, { useState } from "react";
import Button from "../Components/Button";
import LoginForm from "../Components/LoginForm";
import Sidebar from "./Navigator";
import "../Components/Button.css";
import Navigator from "./Navigator";

function HomePage() {
  const [loggedIn, setLoggedIn] = useState(true);

  const onClickHandler = () => {
    setLoggedIn((loggedIn) => !loggedIn);
  };

  return (
    <div className="homepage">
      {loggedIn && (
        <Navigator>
          <div className="toggle">
            <button>Toggle</button>
          </div>
          <p>Latest News</p>
          <p>Friends</p>
          <p>Friends</p>
          <p>Friends</p>
        </Navigator>
      )}

      {loggedIn ? (
        <Button onClick={onClickHandler}>Logout</Button>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default HomePage;
