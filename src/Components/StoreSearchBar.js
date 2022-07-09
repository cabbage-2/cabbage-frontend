import axios from "axios";
import styles from "./StoreSearchBar.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const StoreSearchBar = ({ search, setSearch }) => {
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
            placeholder="Find a restaurant"
          />
          <AiOutlineSearch />
        </div>
      </form>
    </div>
  );
};

export default StoreSearchBar;
