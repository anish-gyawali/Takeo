import { useState } from "react";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import data from "./data/feedback";

function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(data);

  const feedBackData = (message) => {
    setText(message);
    console.log(message);
  };

  return (
    <>
      <Header text={"Header"} />
      <FeedBackForm fbData={feedBackData} />
      <FeedBackList feedback={data} />
    </>
  );
}

export default App;
