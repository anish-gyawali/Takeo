import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
import { GET_BOOKS } from "../api/urls";
import { getData } from "../api";

function Books() {
  const [data, setData] = useState(null);
  useEffect(() => {
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
