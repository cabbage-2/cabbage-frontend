import axios from "axios";
import styles from "./StoreSearchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const FoodSearchBar = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <form>
        <div className={styles["search--wrapper"]}>
          <input
            className={styles["search--input"]}
            type="search"
            value={search}
            onChange={handleChange}
            placeholder="e.g. fried rice"
          />
          <AiOutlineSearch />
        </div>
      </form>
    </div>
  );
};

export default FoodSearchBar;
