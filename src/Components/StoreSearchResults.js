import StoreSearchBar from "./StoreSearchBar";
import styles from "./StoreSearchResults.module.scss";

const StoreSearchResults = ({ searchResults }) => {
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

export default StoreSearchResults;
