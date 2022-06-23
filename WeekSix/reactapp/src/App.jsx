import FeedBackForm from "./components/FeedBackForm";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import data from "./data/feedback";

function App() {
  return (
    <>
      <div>
        <Header text={"Header"} />
        <FeedBackForm />
        <FeedBackList feedback={data} />
      </div>
    </>
  );
}

export default App;
