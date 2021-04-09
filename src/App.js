import React from 'react';
import Alert from "./components/app/containers/alert";
import Router from './components/router';
import {AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router />
        <Alert />
      </AuthProvider>
    </div>
  );
}

export default App;
