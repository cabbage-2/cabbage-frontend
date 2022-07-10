import StoreSearchBar from "./StoreSearchBar";
import StoreSearchResults from "./StoreSearchResults";
import { useState, useEffect } from "react";
import styles from "./StoreSearch.module.scss";
import { db } from "../firebase-config";
import Modal from "react-modal";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import PrimaryButton from "./PrimaryButton";
import FoodSearchBar from "./FoodSearchBar";
import FoodSearchResults from "./FoodSearchResults";

const FoodSearch = ({ isOpen, setIsOpen, sel }) => {
  const [search, setSearch] = useState("");
  const [foods, setfoods] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const foodsCollectionRef = collection(db, sel);

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    try {
      const data = await getDocs(foodsCollectionRef);
      const results = data.docs.map((doc) => doc);
      console.log("results: ", results);
      setfoods(results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (search == "") {
      setSearchResults([]);
    } else {
      setSearchResults(
        foods.filter((item) => {
          const wordArr = item.split(" ");
          const isMatch = wordArr.some((word) => {
            return word.toLowerCase().startsWith(search.toLowerCase());
          });
          if (isMatch) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [search]);
  return (
    <Modal isOpen={isOpen} style={{ overlay: { background: "#00000030" } }}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <FoodSearchBar search={search} setSearch={setSearch} />
        <div style={{ flexGrow: "1" }}>
          <FoodSearchResults
            searchResults={searchResults}
            hasSearch={search != ""}
          />
        </div>
        <PrimaryButton
          text={"Continue"}
          fn={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </Modal>
  );
};

export default FoodSearch;
