import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { GET_BOOKS } from "../api/urls";
import { getData } from "../api";
import { showBooks } from "../actions/actions";

function Books() {
  const showBookValue = useSelector((state) => state.showBooks);
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  useEffect(() => {
    dispatch(showBooks(false));
    getData(GET_BOOKS).then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
      <div class="d-flex justify-content-center mt-5">
        <Link to="/add">
          <button class="btn btn-primary">Add Book</button>
        </Link>
      </div>
      <Table books={data} />
    </>
  );
}

export default Books;
