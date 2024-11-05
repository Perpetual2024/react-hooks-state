import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment(){
    
    setCount(count + 1)

  }
  return(
    <button  onClick={increment}  > Hey count me :{count}</button>
  )

}
export  default Counter; 