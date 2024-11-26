import React, { useState } from 'react';

function Counter(){


    // let count = 20
    // let addCounter = () =>{
    //     count = count+1;
    //     console.log(count)
    // }

    // let revoveCounter = () =>{
    //     count = count-1;
    //     console.log(count)
    // }




    
let [count, setCount] = useState(10)

let addCounter = () =>{
    setCount(count+1)
    // setCount((morecount)=>{return morecount+1});
    // setCount((morecount)=>{return morecount+1});
    // setCount((morecount)=>{return morecount+1});
    // setCount((morecount)=>{return morecount+1});
}

let removeCounter = () =>{
    setCount(count-1)
}

    return(
        <>
            <h1>Count is {count}</h1>
            <hr />
            <button onClick={addCounter}>Add Count</button>
            <button onClick={removeCounter}>Remove Count</button>
            <hr />
        </>
    )

}

export default Counter;