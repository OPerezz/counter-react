import React from "react";
import './counter.css'

function Counter() {
     return (
          <div className="counter">
               <span>0</span>
               <div className="buttons">
                    <button>-</button>
                    <button>+</button>
               </div>
          </div>
     )
}

export default Counter;
