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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkAndRedirect();
    // unsubscribe when component is unmounted
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  const signOut = () => {
    auth.signOut();
  };

  const checkAndRedirect = () => {
    if (!currentUser && window.location.pathname != "/login") {
      window.location = "/login";
    }
  };

  return (
    <div>
      <Router>
        {currentUser ? (
          <div>
            {/*TEMP NAV BAR */}
            {currentUser.displayName} <button onClick={signOut}>signout</button>
          </div>
        ) : (
          ""
        )}
        <Switch>
          <Route exact path="/login" component>
            <Login signInWithGoogle={signInWithGoogle} />
          </Route>
          <Route exact path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
