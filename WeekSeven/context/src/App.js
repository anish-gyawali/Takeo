import { createContext, useContext, useState } from "react";
// useContext: simple Counter

const CountContext = createContext();

// 🐨 create your CountContext here with React.createContext
// 🐨 create a CountProvider component here that does this:
// 🐨 get the count state and setCount updater with React.useState
// 🐨 create a `value` array with count and setCount
// 🐨 return your context provider with the value assigned to that array and forward all the other props
// 💰 more specifically, we need the children prop forwarded to the context provider

// function CountProvider(props) {
//   const [count, setCount] = useState(0);
//   const value = [count, setCount];
//   return <CountContext.Provider value={value} {...props} />;
// }

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useContext(CountContext);
  //const count = 0;
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useContext(CountContext);
  //const setCount = () => {};
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>Increment count</button>;
}

function App() {
  //using line 36 and 37 helps us to eliminate CountProvider function
  const [count, setCount] = useState(0);
  const value = [count, setCount];

  return (
    <CountContext.Provider value={value}>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountDisplay />
      <Counter />
    </CountContext.Provider>
  );
}

export default App;
