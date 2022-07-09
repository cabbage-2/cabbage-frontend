import { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/sidebar";
import Sidebar2 from "../Components/Sidebar2";
import StoreSearch from "../Components/StoreSearch";
import StoreSearchBar from "../Components/StoreSearchBar";
import StoreSearchResults from "../Components/StoreSearchResults";
import styles from "./Home.module.scss";

const Home = ({ currentUser, signOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles["container"]}>
      <div className={styles["content--wrapper"]}>
        <Sidebar2 isOpen={isOpen} setIsOpen={setIsOpen} signOut={signOut} />
        <Header signOut={signOut} isOpen={isOpen} setIsOpen={setIsOpen} />
        <h3 className={styles["content--title"]}>
          Welcome back, {currentUser.displayName}!
        </h3>
        <StoreSearch />
      </div>
    </div>
  );
};

export default Home;
