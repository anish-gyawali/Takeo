import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedBackItem({ item, deleteFeedback }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div>{item.text}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
    </Card>
  );
}

export default FeedBackItem;
