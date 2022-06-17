import React from "react";

function App() {
  console.log("i am from line 4")
  const [state, setState]=React.useState(0);
  console.log("i am from line 6");

  function handleclick(){
    console.log("i am from handdle click function ")
    setState(state+1);
  }
  return (
    <div className="App">
     <button onClick={handleclick}>{state}</button>
    </div>
  );
}

export default App;
