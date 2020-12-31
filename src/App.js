import React from 'react';
import Alert from "./components/app/containers/alert";
import Router from './components/router';

function App() {
  return (
    <div className="App">
      <Router />
      <Alert />
    </div>
  );
}

export default App;
