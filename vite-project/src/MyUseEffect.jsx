import React, { useEffect, useState } from "react"
function MyUseEffect(){
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(20);
    useEffect(()=>{
        console.log("updated count:"+count);
        console.log("updated pointer:"+pointer);
    },[count,pointer])



    function doIncrement(){
        setCount(count+30)
        doPointer()
    }
    function doPointer(){
        setPointer(pointer+100)
    }
    return( 
         <div>
            <h2>counter:{count}</h2>
            <h2>pointer:{pointer}</h2>
            <br></br>
            MyUseEffect
            <button onClick= {doIncrement}>Increment</button>
            {/* <h2>Hello using usestate hook</h2> */}
         </div>)
}
export default MyUseEffect