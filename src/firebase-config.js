import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLYtE81jgtQz1o5lGZF98f92oNdBtezQg",
  authDomain: "cabbage-a6580.firebaseapp.com",
  projectId: "cabbage-a6580",
  storageBucket: "cabbage-a6580.appspot.com",
  messagingSenderId: "734596272743",
  appId: "1:734596272743:web:44ad922ecaa3d3319afac2",
  measurementId: "G-BZXW9J9NW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
    })
    .catch((error) => {
      console.log(error);
    });
};
