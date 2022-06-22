import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import data from "./data/feedback";

function App() {
  return (
    <>
      <div>
        <Header text={"Header"} />
        {/* we are passing as "feedback" array of data from feedback to FeedBackList component as props   */}
        <FeedBackList feedback={data} />
      </div>
    </>
  );
}

export default App;
