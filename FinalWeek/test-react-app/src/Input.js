import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const doSubmit = () => {
    setData(textInput);
  };
  return (
    <>
      <h1 data-testid="header">{!input ? "No Value" : input}</h1>
      <input onChange={handleChange} data-testid="input" />
      <br />
      <br />
      <input onChange={handleTextChange} data-testid="textInput" />
      <button onClick={doSubmit}>Submit</button>
      <span>{data}</span>
    </>
  );
};
export default Input;
