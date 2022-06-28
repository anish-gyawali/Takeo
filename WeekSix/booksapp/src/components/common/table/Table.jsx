import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table({ books }) {
  return (
    <table className="table mx-5 my-5">
      <TableHeader />
      <TableBody books={books} />
    </table>
  );
}

export default Table;
