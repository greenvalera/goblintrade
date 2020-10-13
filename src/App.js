import React from 'react';
import Alert from "./components/app/containers/alert";
import RegisterPage from "./components/auth/containers/RegisterPage";
import TestButton from "./components/app/components/testButton";

function App() {
  return (
    <div className="App">
        <TestButton />
      <RegisterPage />
      <Alert />
    </div>
  );
}

export default App;
