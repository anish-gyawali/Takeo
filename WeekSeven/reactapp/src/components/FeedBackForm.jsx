import { useState } from "react";
import Rating from "./Rating";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedBackForm({ fbData }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const [rating, setRating] = useState(0);

  const handleChange = (e) => {
    setFeedbackText(e.target.value);
    if (e.target.value.trim().length < 10) {
      setDisable(true);
      setMessage("Text length should be grater than 10 character");
    } else {
      setDisable(false);
      setMessage("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fbData({ feedbackText, rating });
    // setFeedbackText("");
    // setRating(0);
    
  };

  return (
    <Card>
      <div>Select Rating</div>
      <Rating select={(rating) => setRating(rating)} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            value={feedbackText}
            placeholder="write your feedback here"
          />
        </div>
        <Button version="secondary" type="submit" isDisabled={disable}>
          Send
        </Button>
        {/* <div>{message}</div>
        <div>{feedbackText}</div> */}

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
