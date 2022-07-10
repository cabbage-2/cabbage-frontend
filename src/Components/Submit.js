import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
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
// import Select from 'react-select';
// import Creatable, {useCreatable} from 'react-select/creatable';
import Dropdown from "./select2";

function FormCheck(props) {
  const [hunger, setHunger] = useState(0);
  const [name, setName] = useState();
  const [test, setTest] = useState();
  const foodsRef = collection(db, `Stores/${props.store}/Foods`);
  const [food, setFood] = useState(["Loading"]);
  const [fds, setFds] = useState([]);
  const [fullness, setFullness] = useState(0);
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
      //   console.log(food);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(
    () => {
      getFood(); // Run! Like go get some data from an API.
    },
    { food }
  );

  return (
    <div className="form">
      <div className="form-body">
        <h1 className="">How hungry are you right now (5 being highest)</h1>
        <div className="entry flex flex-row w-screen items-center justify-center">
          <div
            className={`portionbtn ${hunger === 1 ? "btn-selected" : ""}`}
            onClick={() => setHunger(1)}
          >
            1
          </div>
          <div
            className={`portionbtn ${hunger === 2 ? "btn-selected" : ""}`}
            onClick={() => setHunger(2)}
          >
            2
          </div>
          <div
            className={`portionbtn ${hunger === 3 ? "btn-selected" : ""}`}
            onClick={() => setHunger(3)}
          >
            3
          </div>
          <div
            className={`portionbtn ${hunger === 4 ? "btn-selected" : ""}`}
            onClick={() => setHunger(4)}
          >
            4
          </div>
          <div
            className={`portionbtn ${hunger === 5 ? "btn-selected" : ""}`}
            onClick={() => setHunger(5)}
          >
            5
          </div>
        </div>
        <Dropdown options={food} fds={fds} setFds={setFds} />
        <div className="entry flex flex-row w-screen items-center justify-center">
          <div
            className={`portionbtn ${fullness === 1 ? "btn-selected" : ""}`}
            onClick={() => setFullness(1)}
          >
            1
          </div>
          <div
            className={`portionbtn ${fullness === 2 ? "btn-selected" : ""}`}
            onClick={() => setFullness(2)}
          >
            2
          </div>
          <div
            className={`portionbtn ${fullness === 3 ? "btn-selected" : ""}`}
            onClick={() => setFullness(3)}
          >
            3
          </div>
          <div
            className={`portionbtn ${fullness === 4 ? "btn-selected" : ""}`}
            onClick={() => setFullness(4)}
          >
            4
          </div>
          <div
            className={`portionbtn ${fullness === 5 ? "btn-selected" : ""}`}
            onClick={() => setFullness(5)}
          >
            5
          </div>
        </div>
        <Submit
          hunger={hunger}
          store={props.store}
          fullness="2"
          name={name}
          foodsRef={foodsRef}
        />
      </div>
    </div>
  );
}

const Submit = ({
  hunger,
  store,
  fullness,
  name,
  setTest,
  test,
  foodsRef,
  getFood,
}) => {
  let obj = {
    foodName: name,
    date: serverTimestamp(),
    hungerlevel: hunger,
    satiety: fullness,
  };
  return (
    <div>
      <button onClick={() => (addDoc(foodsRef, obj), getFood)}>submit</button>
    </div>
  );
};

export default FormCheck;
