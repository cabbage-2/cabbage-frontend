import axios from "axios";
import styles from "./RestaurantSearchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const RestaurantSearchBar = () => {
  return (
    <div>
      <form>
        <div className={styles["search--wrapper"]}>
          <input
            className={styles["search--input"]}
            type="search"
            placeholder="Find a restaurant"
          />
          <AiOutlineSearch />
        </div>
      </form>
    </div>
  );
};

export default RestaurantSearchBar;
