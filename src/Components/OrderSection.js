import { useState } from "react";
import FoodSearch from "./FoodSearch";
import FoodSearchBar from "./FoodSearchBar";
import styles from "./OrderSection.module.scss";
import PrimaryButton from "./PrimaryButton";

const OrderSection = ({ sel, fn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [foodlist,setFoodlist] = useState([]);
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
        <FoodSearch isOpen={isOpen} setIsOpen={setIsOpen} sel={sel} foodlist={foodlist} setFoodlist={setFoodlist}/>
      </div>
      <div className={styles["foodlist"]}>
      {foodlist.map((item) => (
              console.log(item.label),
              <div
              className={styles["results--item"]}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h1>{item.label}</h1>
                <div style={{ color: "#64748B" }}>{item.hunger}</div>
              </div>
              </div>
        ))
      }
      </div>
      <PrimaryButton text={"Continue"} fn={fn} />
    </div>
  );
};

export default OrderSection;
