import { AuthContext, useAuth } from "../AuthContext";
import styles from "./Login.module.scss";

function Login({ signInWithGoogle }) {
  // const signInWithGoogle = useAuth();

  return (
    <div className="container-fluid">
      <h2 className="card-title">Login</h2>
      <button
        type="button"
        onClick={signInWithGoogle}
        class={styles["login-with-google-btn"]}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
