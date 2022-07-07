import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateBook from "./components/CreateBook";
import CreateBookClass from "./components/CreateBookClass";
import Books from "./components/Books";
import Login from "./components/Login";
import Header from "./components/Header";
import { UserContext } from "./components/context/UserContext";
import Error from "./components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Utils, { testNamedExport, testFun } from './concepts/importExport'
import { testFun } from "./concepts/importExport";

function App() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
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
