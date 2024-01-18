import React from 'react';
import './styles.css'; 

function Counter(props) {
  return (
    <div className="CounterContainer">
      <small>{props.label}</small>
      <h1>{props.value}</h1>
      <button className="Button" onClick={props.decrement}>-</button>
      <button className="Button" onClick={props.increment}>+</button>
    </div>
  );
}

export default Counter;