import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { GET_BOOKS } from "../api/urls";
import { getData } from "../api";
import { showBooks } from "../actions/actions";
import { booksApiAction } from "../actions/booksApiActions";

function Books() {
  const dispatch = useDispatch();
  const showBookValue = useSelector((state) => state.showBooks);
  const books = useSelector((state) => state.books);

  //const [data, setData] = useState(null);

  useEffect(() => {
    dispatch(showBooks(false));
    dispatch(booksApiAction());
    // getData(GET_BOOKS).then((data) => {
    //   setData(data);
    //});
  }, []);
  return (
    <>
      <div class="d-flex justify-content-center mt-5">
        <Link to="/add">
          <button class="btn btn-primary">Add Book</button>
        </Link>
      </div>
      <Table books={books} />
    </>
  );
}

export default Books;
