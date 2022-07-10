import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ text, fn }) => {
  return (
    <div onClick={fn} className={styles.wrapper}>
      {text}
    </div>
  );
};

export default PrimaryButton;
