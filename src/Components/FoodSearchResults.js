import StoreSearchBar from "./StoreSearchBar";
import React, { useState, useContext } from "react";
import styles from "./StoreSearchResults.module.scss";
import StoreSearch from "./StoreSearch";
import { StoreProvider, StoreContext } from "./storecontext";

const FoodSearchResults = ({
  searchResults,
  hasSearch,
  foodlist,
  setFoodlist,
}) => {
  const length = searchResults.length;
  const { sel, setSel } = useContext(StoreContext);
  const buttonStyle = {
    // backgroundColor: "#F7F8F9",
    // borderRadius: "50%",
    padding: "20px",
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#64748B",
    fontSize: "16px",
  };

  const handleAdd = (item) => {
    setFoodlist(current => [...current,item]);
  };
  return (
    <div className={styles["container"]}>
      {hasSearch && (
        <div className={styles["results--wrapper"]}>
          <div className={styles["results--count"]}>
            {length} Result{length == 1 ? "" : "s"}
          </div>
          <div>
            {searchResults.map((item) => {
              const portion = item.hunger*0.15;
              return(
              <div
                className={styles["results--item"]}
                onClick={() => {
                  setSel({ item }["item"]);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>{item.label}</div>
                  <div style={{ color: "#64748B" }}>{portion} of your regular meal</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div onClick={() => handleAdd({item})} style={buttonStyle}>
                    +
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodSearchResults;
