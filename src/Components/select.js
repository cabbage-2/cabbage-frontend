import React, { useState } from 'react';


import CreatableSelect from 'react-select/creatable';

function Dropdown({options,fds,setFds}) {
    const [fd,setFd] = useState("");

    const handleClick = (f) => {
        if (fds.includes(f)){
            alert("already inside")
        }else{
            setFds(current => [...current,f]);
        }
        
    }
    const sum = fds.reduce((total,currentValue) => total = total+(currentValue.hunger)*.1,0)
    
    const handleRemove = (id) => {
        setFds(fds.filter(item => item.id !== id));
    };
    
    
    return ( 
    <>
        <CreatableSelect
        defaultValue={options[0]}
        name="colors"
        isClearable
        isSearchable
        options={options}
        className="basic-single"
        classNamePrefix="select"
        id="fooditem"
        onChange={(e) => setFd(e)}
        />
        <button onClick={() => (handleClick(fd),console.log({fds}))}>+</button>
        {fds.map(({id,label,hunger}) => (
            <div className='fdBox' key={id} onClick={()=>handleRemove(id)}>
                <h1 className='fdHead'>{label}</h1>
                <p>{hunger} Servings</p>
            </div>
        ))}
        <h1>{sum}</h1>
    </>
     );
}

export default Dropdown;
