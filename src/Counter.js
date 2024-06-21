import React, { useState } from "react";
import './counter.css'

function Counter() {
     const [counter, setCounter] = useState(0)

     // const handleclick = operator => {
     //      if(handleclick('-')){
     //           console.log('teste')
     //      }
     // }

     function handleclick(operator) {
          // let newValue = operator 
          // if (operator === '+') {
          //      newValue = counter + 1
          // }
          // else {
          //      newValue = counter - 1
          // }

          let newValue = operator === '+'
               ? counter + 1
               : counter - 1

          setCounter(newValue)
     }

     return (
          <div className="counter">
               <span>{counter}</span>
               <div className="buttons">
                    <button onClick={() => handleclick('-')}>-</button>
                    <button onClick={() => handleclick('+')}>+</button>
               </div>
          </div>
     )
}

export default Counter;
