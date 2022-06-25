import React from "react";

function TableRow({ book }) {
  return (
    <tbody>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.writer}</td>
        <td>{book.publisher}</td>
        <td>{book.isbn}</td>
        <td>{book.subject}</td>
        <td>{book.availability}</td>
        <td>{book.numPages}</td>
      </tr>
    </tbody>
  );
}

export default TableRow;
