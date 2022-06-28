import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../api";
import { GET_BOOK } from "../api/urls";
import Button from "./common/Button";
import Table from "./common/table/Table";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getData(GET_BOOK).then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <Link to="/add">
        <Button label={"Add Book"} />
      </Link>

      <Table books={books} />
    </>
  );
}

export default Books;
