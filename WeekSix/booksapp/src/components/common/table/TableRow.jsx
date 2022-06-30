import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

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
        <td>{book.pages}</td>
        <td>
          <div style={{ display: "flex" }}>
            <Link to={`/add/${book.id}`}>
              <Button label={"Edit"} />
            </Link>
            {/* <Button  label={"Delete"} /> */}
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TableRow;
