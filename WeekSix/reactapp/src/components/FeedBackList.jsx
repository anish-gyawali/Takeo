import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedback }) {
  // so here we check if props contains data or not if it is empty we will display or redirect to other component
  if (!feedback) {
    return <div> No feedback found</div>;
  }

  //if our props contains data then it will return the value.
  return (
    // if you want to check quickly if there is data or not the you can use "feedback &&" and wrap return component with ()
    <div>
      {/* we are getting props as feedback from app component*/}
      {feedback.map((item) => (
        // here we are trying to pass that data one after another to FeedBackItem component
        // we need to define key as item id because to display we need to have unique data
        
        <FeedBackItem key={item.id} item={item} />
        //if we don't use key then we will get error like:
        //Each child in a list should have a unique "key" prop.
      ))}
    </div>
  );
}

export default FeedBackList;
