import React from "react";
import CreateBook from "./components/CreateBook";
import Books from "./components/Books";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import LoginComponent from "./components/login/LoginComponent";
import UserContextProvider from "./components/common/context/UserContext";
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
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<CreateBook />} />
        <Route exact path="/add" element={<CreateBook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add/:id" element={<CreateBook />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="#" element={<Error />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
