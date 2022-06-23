import { useState } from "react";

function FeedBackForm() {
  const [feedback, setFeedback] = useState("");
  function handleChange(e) {
    setFeedback(e.target.value);
    console.log(e.target.value);
  }
  return (
    <form>
      <input type="text" onChange={handleChange} />
    </form>
  );
}

export default FeedBackForm;
