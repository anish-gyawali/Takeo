import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import { UserContext } from "./common/context/UserContext";
import Table from "./common/table/Table";

function Books() {
  const userContext = useContext(UserContext);
  const { data } = userContext;
  return (
    <>
      <Link to="/add">
        <Button label={"Add Book"} />
      </Link>

      <Table books={data} />
    </>
  );
}

export default Books;
