import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ currentUser, component: Component, ...rest }) => {
  if (currentUser) {
    console.log("yes");
  } else {
    console.log("no");
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
