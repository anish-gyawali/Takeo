// useReducer: simple Counter
/*
I want to change things a bit to have this API:

const [count, changeCount] = React.useReducer(countReducer, initialCount);
const increment = () => changeCount(step);
How would you need to change your reducer to make this work?

Answer:
we can change "countReducer" 
function countReducer(state, newState) {
  return newState;
}
to
const countReducer = (count, change) => count + change;

*/
import * as React from "react";

const countReducer = (count, change) => count + change;

function Counter({ initialCount = 0, step = 1 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step);
  return <button onClick={increment}>{count}</button>;
}

function Task2() {
  return <Counter />;
}

export default Task2;
