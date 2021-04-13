import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = ({signInOptions, firebaseAuth}) => {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: signInOptions,
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: false
    }
  };

  return (
    <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth}/>
    </div>
  );
}

export default Login;