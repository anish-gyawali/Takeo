import { useReducer } from "react";
//import reducer from "./reducer/reducer";

function App() {
  function incremental(state, action) {
    if (action === "increase by 10") {
      return { ...state, first: state.first + 10 };
    }
    if (action === "increase by 20") {
      return { ...state, second: state.second + 20 };
    }
    return state;
  }
  const [num, dispatch] = useReducer(incremental, { first: 0, second: 0 });
  // const [state, dispatch] = useReducer(reducer, 0);
  console.log(num);
  return (
    <>
      {/* <button onClick={() => dispatch(10)}>Click Me !!</button> */}
      <button onClick={() => dispatch("increase by 10")}>Increase by 10</button>
      <div>{num.first}</div>
      <button onClick={() => dispatch("increase by 20")}>Increase by 20</button>
      <div>{num.second}</div>
    </>
  );
}

export default App;
