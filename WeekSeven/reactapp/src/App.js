import { useState } from "react";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import Header from "./components/Header";
import data from "./data/feedback";

function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(data);
  

  const feedBackData = (message) => {
    setText(message);
  };

  const deleteFeedback = (id) => {
    console.log(id);
  };

  return (
    <>
      <Header text={"Header"} />
      <FeedBackForm fbData={feedBackData} />
      <FeedBackList feedback={data} deleteFeedback={deleteFeedback} />
      <FeedBackStats data={feedback} />
    </>
  );
}

export default App;
