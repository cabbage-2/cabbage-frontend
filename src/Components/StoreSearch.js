import StoreSearchBar from "./StoreSearchBar";
import StoreSearchResults from "./StoreSearchResults";
import { useState } from "react";
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
  const [Stores, setStores] = useState([]);
  const [searchResults, setSearchResults] = useState(["Fooding", "Makan"]);

  const storesCollectionRef = collection(db, "Stores");

  const getStores = async () => {
    try {
      const data = await getDocs(storesCollectionRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <StoreSearchBar />
      <StoreSearchResults searchResults={searchResults} />
    </div>
  );
};

export default StoreSearch;
