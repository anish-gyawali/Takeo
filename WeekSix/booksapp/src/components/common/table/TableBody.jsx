import React from "react";
import TableRow from "./TableRow";

function TableBody({ books }) {
  return (
    <>
      {books.map((book, index) => {
        return <TableRow key={book.id} book={book} />;
      })}
    </>
  );
}

export default TableBody;
