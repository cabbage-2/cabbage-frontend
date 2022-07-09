import styles from "./Header.module.scss";

const Header = ({ signOut }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.content} ${styles["content--brand"]}`}>
        Cabbage
      </div>
      {signOut && (
        <button
          onClick={signOut}
          className={`${styles.content} ${styles["content--button"]}`}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
