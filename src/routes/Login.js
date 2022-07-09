import { AuthContext, useAuth } from "../AuthContext";
import Header from "../Components/Header";
import styles from "./Login.module.scss";

function Login({ signInWithGoogle }) {
  return (
    <div className={styles.container}>
      <div className={styles["login--wrapper"]}>
        <Header />
        <h2 className={styles["login--title"]}>Login</h2>
        <div className={styles["login--subtitle"]}>
          Welcome back. Enter your credentials to access your account.
        </div>
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
