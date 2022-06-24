import { useEffect, useState } from "react";
import { getData } from "../api";
import { GET_BOOK } from "../api/urls";
import Table from "./common/table/Table";

function Books({ addBook }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getData(GET_BOOK).then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      <div class="d-flex justify-content-center mt-5">
        <button class="btn btn-primary" onClick={addBook}>
          Add Book
        </button>
      </div>
      <Table books={books} />
    </>
  );
}

export default Books;
