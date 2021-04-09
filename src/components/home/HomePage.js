import React from 'react';
import {useAuth} from "../../context/AuthContext";

const HomePage = () => {

  const {currentUser, logout} = useAuth();

  return(
    <div>
      <h1>My App</h1>
      <p>Welcome {currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => logout()}>Sign-out</a>
    </div>
  );
};

export default HomePage;