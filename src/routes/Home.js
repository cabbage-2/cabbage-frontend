import { useState, useContext } from "react";
import Header from "../Components/Header";
import StoreSearch from "../Components/StoreSearch";
import StoreSearchBar from "../Components/StoreSearchBar";
import StoreSearchResults from "../Components/StoreSearchResults";
import styles from "./Home.module.scss";
import {StoreContext} from "../Components/storecontext";
import PreMeal from "../Components/portions";

const Home = ({ currentUser, signOut }) => {
  const [sel,setSel] = useState("makan")
  return (
    <StoreContext.Provider value={{sel, setSel}}>
      <div className={styles["container"]}>
        <div className={styles["content--wrapper"]}>
          <Header signOut={signOut} />
          <h3 className={styles["content--title"]}>
            Welcome back, {currentUser.displayName} {sel}!
          </h3>
          <StoreSearch />
        </div>
      <PreMeal store={sel} userweight={1}/>
      </div>
    </StoreContext.Provider>
  );
};

export default Home;
