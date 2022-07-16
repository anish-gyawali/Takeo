import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateBook from "./components/CreateBook";
import CreateBookClass from "./components/CreateBookClass";
import Books from "./components/Books";
import Login from "./components/Login";
import Header from "./components/Header";
import Error from "./components/Error";
import "./App.css";
//import { useContext } from "react";
//import Utils, { testNamedExport, testFun } from './concepts/importExport'
//import { UserContext } from "./components/context/UserContext";
//import { testFun } from "./concepts/importExport";

function App() {
  // const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = user?.login?.uuid;
  return (
    <>
      <Header />
      <Routes>
        {!token ? (
          <Route path="/" element={<Login />} />
        ) : (
          <>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<CreateBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add/:id" element={<CreateBook />} />
            <Route path="*" element={<Error />} />
          </>
        )}
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
