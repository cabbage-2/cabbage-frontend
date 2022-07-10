import StoreSearchBar from "./StoreSearchBar";
import StoreSearchResults from "./StoreSearchResults";
import { useState, useEffect } from "react";
import styles from "./StoreSearch.module.scss";
import { db } from "../firebase-config";
import Modal from "react-modal";
import PrimaryButton from "./PrimaryButton";
import FoodSearchBar from "./FoodSearchBar";
import FoodSearchResults from "./FoodSearchResults";

import {
  addDoc,
  collection,
  query,
  getDocs,
  QuerySnapshot,
  serverTimestamp,
  where,
  get,
  forEach,
  doc,
  getDoc,
} from "firebase/firestore";
import Select from "react-select";
import Dropdown from "./select";

const FoodSearch = ({ isOpen, setIsOpen, sel, foodlist, setFoodlist }) => {
  const [hunger, setHunger] = useState(0);
  const [name, setName] = useState();
  const [test, setTest] = useState();
  const foodsRef = collection(db, `Stores/${sel}/Foods`);
  const [food, setFood] = useState(["Loading"]);
  // const [fds, setFds] = useState([]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getFood(); // Run! Like go get some data from an API.
  }, []);

  const getFood = async () => {
    try {
      const q = query(foodsRef, where("foodName", "!=", ""));
      const data = await getDocs(q);
      const array = data.docs.map((doc) => ({
        id: doc.id,
        label: doc.data().foodName,
        hunger: doc.data().hungerlevel,
        weight: doc.data().userweight,
      }));
      console.log(array);
      setFood(array);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (search == "") {
      setSearchResults([]);
    } else {
      setSearchResults(
        food.filter((item) => {
          const wordArr = item.label.split(" ");
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
    <Modal isOpen={isOpen} className="Modal" >
      <div style={{ display: "flex", flexDirection: "column", height: "100%",}}>
        <FoodSearchBar search={search} setSearch={setSearch} />
        <div style={{ flexGrow: "1" }}>
          <FoodSearchResults
            searchResults={searchResults}
            hasSearch={search != ""}
            foodlist={foodlist}
            setFoodlist={setFoodlist}
          />
        </div>
        <PrimaryButton
          text={"Add Item(s)"}
          fn={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </Modal>
  );
};

export default FoodSearch;
