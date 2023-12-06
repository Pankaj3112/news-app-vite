import { createContext, useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import { login, register, logout, googleAuth } from "../auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout, googleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
