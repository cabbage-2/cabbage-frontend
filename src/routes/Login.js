import { AuthContext, useAuth } from "../AuthContext";
// import { signInWithGoogle } from "../firebase-config";

function Login() {
  const signInWithGoogle = useAuth();

  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>sign in</button>
    </div>
  );
}

export default Login;
