import { useState } from "react";

const HelloWorld = () => {
  const [showTestingComp, setShowTestingComp] = useState(false);

  const showPara = () => {
    setShowTestingComp(true);
  };
  return (
    <>
      <h2>Hello world</h2>
      {showTestingComp && <p>Testing the component</p>}
      {!showTestingComp && <p>Testing the component not showing</p>}
      <button onClick={showPara}>Show Paragraph</button>
    </>
  );
};
export default HelloWorld;
