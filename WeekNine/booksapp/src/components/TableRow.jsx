import { Link } from "react-router-dom";

function TableRow({ book }) {
  return (
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
        <Link to={`/add/${book.id}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
      </td>
      <td>{/* <button className="btn btn-primary">Delete</button> */}</td>
    </tr>
  );
}

export default TableRow;
