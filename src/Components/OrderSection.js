import { useState } from "react";
import FoodSearch from "./FoodSearch";
import FoodSearchBar from "./FoodSearchBar";
import styles from "./OrderSection.module.scss";

const OrderSection = ({ sel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className={styles["header"]}>
        <div>Your Order</div>
        <div onClick={handleOpen} className={styles["header--button"]}>
          + Add More
        </div>
        <FoodSearch isOpen={isOpen} setIsOpen={setIsOpen} sel={sel} />
      </div>
      <div className={styles["foodAdded"]}></div>
    </div>
  );
};

export default OrderSection;
