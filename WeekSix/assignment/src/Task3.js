// useReducer: simple Counter
// 💯 simulate setState with an object
//Answer: using spread operator to "countReducer"
import * as React from "react";

const countReducer = (state, action) => ({ ...state, ...action });

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => setState({ count: count + step });
  return <button onClick={increment}>{count}</button>;
}

function Task3() {
  return <Counter />;
}

export default Task3;
