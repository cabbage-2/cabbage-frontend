import StoreSearchBar from "./StoreSearchBar";
import StoreSearchResults from "./StoreSearchResults";
import { useState, useEffect } from "react";
import styles from "./StoreSearch.module.scss";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const StoreSearch = () => {
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  const [searchResults, setSearchResults] = useState(["Fooding", "Makan"]);

  const storesCollectionRef = collection(db, "Stores");

  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    try {
      const data = await getDocs(storesCollectionRef);
      const results = data.docs.map((doc) => doc.id);
      console.log(results);
      setStores(results);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (search == "") {
      setSearchResults([]);
    } else {
      setSearchResults(
        stores.filter((item) => {
          const wordArr = item.split(" ");
          const isMatch = wordArr.some((word) => {
            return word.toLowerCase().startsWith(search.toLowerCase());
          });
          console.log(isMatch);
          if (isMatch) {
            console.log("hi");
            return true;
          } else {
            console.log("ho");
            return false;
          }
        })
      );
    }
  }, [search]);
  return (
    <div>
      <StoreSearchBar search={search} setSearch={setSearch} />
      <StoreSearchResults
        searchResults={searchResults}
        hasSearch={search != ""}
      />
    </div>
  );
};

export default StoreSearch;
