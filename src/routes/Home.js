import { useState, useContext } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/sidebar";
import Sidebar2 from "../Components/Sidebar2";
import StoreSearch from "../Components/StoreSearch";
import StoreSearchBar from "../Components/StoreSearchBar";
import StoreSearchResults from "../Components/StoreSearchResults";
import styles from "./Home.module.scss";
import { StoreContext } from "../Components/storecontext";
import PreMeal from "../Components/portions";
import PostMeal from "../Components/Submit";
import OrderSection from "../Components/OrderSection";
import { RouteContext } from "../Components/RouteContext";
import EndSection from "../Components/EndSection";

const Home = ({ currentUser, signOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sel, setSel] = useState();
  const [input, setInput] = useState(false);
  const [stage, setStage] = useState(1);

  return (
    <StoreContext.Provider value={{ sel, setSel }}>
      <RouteContext.Provider value={{ stage, setStage }}>
        <div className={styles["container"]}>
          <div className={styles["content--wrapper"]}>
            <Sidebar2 isOpen={isOpen} setIsOpen={setIsOpen} signOut={signOut} />
            <Header signOut={signOut} isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* 1. RESTAURANT SEARCH */}
            {stage === 1 && (
              <div>
                <h3 className={styles["content--title"]}>
                  Welcome back, {currentUser.displayName}!
                </h3>
                <StoreSearch />
              </div>
            )}

            {/* 2. PREMEAL */}
            {sel &&
              stage ===
                2(
                  <div>
                    <PreMeal store={sel} userweight={1} />
                    <OrderSection sel={sel} fn={() => setStage(3)} />
                  </div>
                )}

            {/* 3. POSTMEAL */}
            {stage === 3 && <PostMeal store={sel} userweight={1} />}

            {/*4. SUBMIT AND RETURN */}
            {stage === 4 && <EndSection />}
          </div>
        </div>
      </RouteContext.Provider>
    </StoreContext.Provider>
  );
};

export default Home;
