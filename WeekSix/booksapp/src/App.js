import React from "react";
import CreateBook from "./components/CreateBook";
import Books from "./components/Books";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Header from "./components/Header";

function App() {
  // const [showbooksFlag, setShowbooksFlag] = useState(false);

  // const showBooks = () => {
  //   setShowbooksFlag(true);
  // };
  // const addBook = () => {
  //   setShowbooksFlag(false);
  // };

  return (
    // <div>
    //   React app Component
    //   <Header />
    //   {!showbooksFlag && <CreateBook showBooks={showBooks} />}
    //   {showbooksFlag && <Books addBook={addBook} />}
    // </div>

    <Routes>
      <Route path="/" element={<CreateBook />} />
      <Route path="/add" element={<CreateBook />} />
      <Route path="/books" element={<Books />} />
      <Route path="/add/:id" element={<CreateBook />} />
      <Route />
    </Routes>
  );
}

export default App;
