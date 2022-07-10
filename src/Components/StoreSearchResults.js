import StoreSearchBar from "./StoreSearchBar";
import React, { useState, useContext } from "react";
import styles from "./StoreSearchResults.module.scss";
import StoreSearch from "./StoreSearch";
import { StoreProvider, StoreContext } from "./storecontext";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { RouteContext } from "./RouteContext";

const StoreSearchResults = ({ searchResults, hasSearch }) => {
  const { stage, setStage } = useContext(RouteContext);
  const length = searchResults.length;
  const { sel, setSel } = useContext(StoreContext);
  return (
    <div className={styles["container"]}>
      {hasSearch && (
        <div className={styles["results--wrapper"]}>
          <div className={styles["results--count"]}>
            {length} Result{length == 1 ? "" : "s"}
          </div>
          <div>
            {searchResults.map((item) => (
              <div
                className={styles["results--item"]}
                onClick={() => {
                  setStage(2);
                  setSel({ item }["item"]);
                }}
              >
                {item}
                {/* <button onClick={() => setSel(null)}>{sel}</button> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreSearchResults;
