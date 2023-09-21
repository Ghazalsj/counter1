import React, { useState } from 'react';

import './App.css'; 



const Counter = () => {
  const [count, setCount] = useState(0);
  const limit = 30; 
  const [message, setMessage] = useState('');

  const increment = (step) => {
    if (count + step <= limit) {
      setCount(count + step);
      setMessage('');
    } else {
      setMessage(`Limit of ${limit} reached!`);
    }
  };

  const decrement = (step) => {
    if (count - step >= 0) {
      setCount(count - step);
      
    }
  };

  const reset = () => {
    setCount(0);
   
  };
  return (
    
    
    
     
      <div className="counter">
        <h1>Counter</h1>
        <br />
      <button onClick={() => decrement(1)}>Decrement</button>

      <span>{count}</span>
      <button onClick={() => increment(1)}>Increment</button>
      <br />
      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => increment(3)}>+3</button>
      <button onClick={() => increment(4)}>+4</button>
      <button onClick={() => increment(5)}>+5</button>
      <button onClick={() => increment(6)}>+6</button>
      <br />
      <button onClick={reset}>Reset</button>
      {message && <p className="limit-message">{message}</p>}
    </div>
  
  );
};





export default Counter;







