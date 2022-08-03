import { useState } from "react";

const HelloWorld = () => {
  const [showTestingComp, setShowTestingComp] = useState(false);

  const showPara = () => {
    setShowTestingComp(true);
  };
  const hidePara = () => {
    setShowTestingComp(false);
  };
  return (
    <>
      <h2>Hello world</h2>
      {showTestingComp && <p>Testing the component</p>}
      {!showTestingComp && <p>Testing the component not showing</p>}
      <button onClick={showPara}>Show content</button>
      <button onClick={hidePara}>Hide content</button>
    </>
  );
};
export default HelloWorld;
