import React, {useContext, useState, useEffect} from "react";
import {auth, EmailProviderID} from "../db/init";
import FirebaseuiLogin from "../components/auth/FirebaseuiLogin";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function logout() {
    auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false);
    });

    return () => {
      unsubscribe();
    }
  }, [])

  const value = {
    currentUser,
    logout
  };

  if (loading) return null;

  if (!currentUser) return (
    <FirebaseuiLogin firebaseAuth={auth} signInOptions={[EmailProviderID]}/>
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

