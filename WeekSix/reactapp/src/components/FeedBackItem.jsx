function FeedBackItem({ item }) {
  return (
    <div>
      {/* In this component we are getting data that we pass from FeedBackList */}
      <div>{item.rating}</div>
      <div>{item.text}</div>
    </div>
  );
}

export default FeedBackItem;
