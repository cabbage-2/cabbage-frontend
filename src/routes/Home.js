import { useState } from "react";
import Header from "../Components/Header";
import RestaurantSearchBar from "../Components/RestaurantSearchBar";
import RestaurantSearchResults from "../Components/RestaurantSearchResults";
import styles from "./Home.module.scss";

const Home = ({ currentUser, signOut }) => {
  const [searchResults, setSearchResults] = useState(["Fooding", "Makan"]);
  return (
    <div className={styles["container"]}>
      <div className={styles["content--wrapper"]}>
        <Header signOut={signOut} />
        <h3 className={styles["content--title"]}>
          Welcome back, {currentUser.displayName}!
        </h3>
        <RestaurantSearchBar />
        <RestaurantSearchResults searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Home;
