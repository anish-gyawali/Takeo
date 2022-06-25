import CreateBook from "./components/CreateBook";

import Header from "./components/Header";
import Books from "./components/Books";
import { useState } from "react";

function App() {
  const [showbooksFlag, setShowbooksFlag] = useState(false);

  const showBooks = () => {
    setShowbooksFlag(true);
  };
  const addBook = () => {
    setShowbooksFlag(false);
  };

  return (
    <div>
      React app Component
      <Header />
      {!showbooksFlag && <CreateBook showBooks={showBooks} />}
      {showbooksFlag && <Books addBook={addBook} />}
    </div>
  );
}

export default App;
