import React, { useState } from 'react';

function FormCheck() {
    const [hunger, setHunger] = useState(0)
    
    return ( 
        <div className='form'>
            <div className='form-body'>
                <div className='entry flex flex-row w-screen items-center justify-center'>
                    <button className={`portionbtn ${hunger==1 ? 'btn-selected' : ''}`} onClick={() => setHunger(1)}>1</button>
                    <button className={`portionbtn ${hunger==2 ? 'btn-selected' : ''}`} onClick={() => setHunger(2)}>2</button>
                    <button className={`portionbtn ${hunger==3 ? 'btn-selected' : ''}`} onClick={() => setHunger(3)}>3</button>
                    <button className={`portionbtn ${hunger==4 ? 'btn-selected' : ''}`} onClick={() => setHunger(4)}>4</button>
                    <button className={`portionbtn ${hunger==5 ? 'btn-selected' : ''}`} onClick={() => setHunger(5)}>5</button>
                </div>
                <h1>{hunger}</h1>
            </div>
        </div>
     );
}




export default FormCheck;