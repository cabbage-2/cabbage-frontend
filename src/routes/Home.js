import Header from "../Components/Header";
import styles from "./Home.module.scss";

const Home = ({ currentUser, signOut }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content--wrapper"]}>
        <Header signOut={signOut} />
        <h3>Welcome back, {currentUser.displayName}!</h3>
      </div>
    </div>
  );
};

export default Home;
