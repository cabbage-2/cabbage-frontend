import { AuthContext, useAuth } from "../AuthContext";
import styles from "./Login.module.scss";

function Login({ signInWithGoogle }) {
  return (
    <div className={styles.container}>
      <div className={styles["login--wrapper"]}>
        <h2>Login</h2>
        <div className={styles["login--form"]}>
          <button
            type="button"
            onClick={signInWithGoogle}
            class={styles["login-with-google-btn"]}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
