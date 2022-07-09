import RestaurantSearchBar from "./RestaurantSearchBar";
import styles from "./RestaurantSearchResults.module.scss";

const RestaurantSearchResults = ({ searchResults }) => {
  const length = searchResults.length;
  return (
    <div className={styles["container"]}>
      <div className={styles["results--wrapper"]}>
        <div className={styles["results--count"]}>
          {length} Result{length == 1 ? "" : "s"}
        </div>
        <div>
          {searchResults.map((item) => (
            <div className={styles["results--item"]}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantSearchResults;
