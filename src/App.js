import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import { auth } from "./firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ProtectedRoute from "./ProtectedRoute";
import RestaurantSearchBar from "./Components/RestaurantSearchBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // unsubscribe when component is unmounted
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("current user: ", user);
    });
    return unsubscribe;
  }, []);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      {currentUser ? (
        <Home currentUser={currentUser} signOut={signOut} />
      ) : (
        <Login signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
}

export default App;
