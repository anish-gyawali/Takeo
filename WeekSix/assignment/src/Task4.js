// useReducer: simple Counter
// 💯 simulate setState with an object OR function
// Answer : we can use "typeof" to check if the setState is function or not

import * as React from "react";

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === "function" ? action(state) : action),
});

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () =>
    setState((currentState) => ({ count: currentState.count + step }));
  return <button onClick={increment}>{count}</button>;
}

function Task4() {
  return <Counter />;
}

export default Task4;
