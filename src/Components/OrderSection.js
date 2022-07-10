import { useState } from "react";
import FoodSearch from "./FoodSearch";
import FoodSearchBar from "./FoodSearchBar";
import styles from "./OrderSection.module.scss";
import PrimaryButton from "./PrimaryButton";

const OrderSection = ({ sel, fn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div className="orDiv">
      <div className={styles["header"]}>
        <div>Your Order</div>
        <div onClick={handleOpen} className={styles["header--button"]}>
          + Add More
        </div>
        <FoodSearch isOpen={isOpen} setIsOpen={setIsOpen} sel={sel} />
      </div>
      <div className={styles["foodlist"]}></div>
      <PrimaryButton text={"Continue"} fn={fn} />
    </div>
  );
};

export default OrderSection;
