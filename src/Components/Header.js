import styles from "./Header.module.scss";
import { MdMenu } from "react-icons/md";

const Header = ({ signOut, isOpen, setIsOpen }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.content} ${styles["content--brand"]}`}>
        Cabbage
      </div>
      {signOut && (
        <button
          className={`${styles.content} ${styles["content--button"]}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MdMenu color={"#510438"} size={"20px"} />
        </button>
      )}
    </div>
  );
};

export default Header;
