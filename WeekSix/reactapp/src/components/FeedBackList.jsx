import FeedBackItem from "./FeedBackItem";
import PropTypes from "prop-types";

function FeedBackList({ feedback }) {
  if (!feedback) {
    return <div> No feedback found</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
//this is used to validate the props
//if we use "isRequired" then props can't be null
FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedBackList;
