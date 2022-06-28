import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function TableRow({ book }) {
  const handleDelete = async (id) => {
    console.log("this is the id", id);
  };
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
        <td>
          <div style={{ display: "flex" }}>
            <Link to={`/add/${book.id}`}>
              <Button label={"Edit"} />
            </Link>
            <Button onCLick={handleDelete(`${book.id}`)} label={"Delete"} />
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TableRow;
