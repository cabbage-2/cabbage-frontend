import React, { useState, useEffect } from 'react';
import {db} from '../firebase';
import {addDoc, collection, query,getDocs,QuerySnapshot,serverTimestamp,where,get,forEach, doc, getDoc} from 'firebase/firestore'
import Select from 'react-select';
import Dropdown from './select'

function FormCheck(props) {
    const [hunger, setHunger] = useState(0);
    const [name,setName] = useState();
    const [test,setTest] = useState();
    const foodsRef = collection(db,`Stores/${props.store}/Foods`);
    return ( 
        <div className='form'>
            <div className='form-body'>
                <h1 className=''>How hungry are you right now (5 being highest)</h1>
                <div className='entry flex flex-row w-screen items-center justify-center'>
                    <div className={`portionbtn ${hunger===1 ? 'btn-selected' : ''}`} onClick={() => setHunger(1)}>1</div>
                    <div className={`portionbtn ${hunger===2 ? 'btn-selected' : ''}`} onClick={() => setHunger(2)}>2</div>
                    <div className={`portionbtn ${hunger===3 ? 'btn-selected' : ''}`} onClick={() => setHunger(3)}>3</div>
                    <div className={`portionbtn ${hunger===4 ? 'btn-selected' : ''}`} onClick={() => setHunger(4)}>4</div>
                    <div className={`portionbtn ${hunger===5 ? 'btn-selected' : ''}`} onClick={() => setHunger(5)}>5</div>
                </div>
                <Dropdown />
                <h1>{hunger}</h1>
                <h2>{name}</h2>
            </div>
            <Submit hunger={hunger} store={props.store} fullness='2' name={name} foodsRef={foodsRef} userweight={props.userweight}/>
            <Dropdown foodsRef={foodsRef} hunger={hunger} personalweight={1} />
        </div>
     );
}

const Submit = ({hunger,store,fullness,name,setTest,test, foodsRef, userweight}) => {
    let obj = {
        foodName:name,
        date:serverTimestamp(),
        hungerlevel:hunger,
        satiety:fullness,
    }
    return (
        <div>
            <button onClick={() => addDoc(foodsRef,obj)}>submit</button>
        </div>
        
        );
}

const Dropdown = ({foodsRef,name,hunger,personalweight}) =>{
    const [food, setFood] = useState([]);

    const getFood = async () => {
        try {
          const q =  query(foodsRef, where("id", "!=",""));
          const data = await getDocs(q);
          const array = data.docs.map((doc) => ([doc.id,doc.data().id,doc.data().satiety*doc.data().userweight*{personalweight}]));
        //   console.log(array);
          setFood(array);
          console.log(food);
        } catch (error) {
          alert(error);
        }
      };
    
    
    return(
        <div>
            <h1 onClick={() => getFood()}> Display </h1>
            <h1>{food[0]}</h1>
        </div>
    );
}

// const Display = ({foodsRef,name,hunger}) =>{
//     const [food, setFood] = useState([]);

//     const getFood = async () => {
//         try {
//           const q =  query(foodsRef, where("hungerlevel", "==", {hunger}));
//           const data = await getDocs(q);
//           const array = data.docs.map((doc) => ([doc.id,doc.data().id,doc.data().hungerlevel]));
//         //   console.log(array);
//           setFood(array);
//           console.log(food);
//         } catch (error) {
//           alert(error);
//         }
//       };
    
    
//     return(
//         <div>
//             <h1 onClick={() => getFood()}> Display </h1>
//             <h1>{food[0]}</h1>
//         </div>
//     );
// }


export default FormCheck;