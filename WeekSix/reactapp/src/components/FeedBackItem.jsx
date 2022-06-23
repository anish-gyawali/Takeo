import Card from "./shared/Card";

function FeedBackItem({ item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div>{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
