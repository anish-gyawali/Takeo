function FeedBackStats({ data }) {
  // we call the reduce method on the array data.
  // the method has access to the array's previous value, current value and index. *We don't use index here.
  // we send zero as the accumulator's initial value.
  const rating = data.reduce((acc, item) => acc + item.rating, 0) / data.length;
  return (
    <div>
      <h2>Average Rating: {rating}</h2>
    </div>
  );
}

export default FeedBackStats;
