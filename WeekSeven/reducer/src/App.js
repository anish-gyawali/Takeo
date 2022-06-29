import { useReducer } from "react";
import subtraction from "./reducer/subtraction";
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
  const [state, dispatch1] = useReducer(subtraction, { a: 100, b: 100 });
  // const [state, dispatch] = useReducer(reducer, 0);
  console.log(num);
  return (
    <>
      {/* <button onClick={() => dispatch(10)}>Click Me !!</button> */}
      <button onClick={() => dispatch("increase by 10")}>Increase by 10</button>
      <div>{num.first}</div>
      <button onClick={() => dispatch("increase by 20")}>Increase by 20</button>
      <div>{num.second}</div>

      <button onClick={() => dispatch1("decrease by 1")}>Decrease by 1</button>
      <div>{state.a}</div>
      <button onClick={() => dispatch1("decrease by 2")}>Decrease by 2</button>
      <div>{state.b}</div>
    </>
  );
}

export default App;
