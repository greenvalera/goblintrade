import React from 'react';
import firebase from "firebase";
import RegisterPage from "./components/waypoint/RegisterPage";

function App() {
    console.log(firebase);
  return (
    <div className="App">
      <RegisterPage />
    </div>
  );
}

export default App;
