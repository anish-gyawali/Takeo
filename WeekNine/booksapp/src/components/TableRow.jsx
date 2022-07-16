import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function TableRow({ book }) {
  const user = useSelector((state) => state.user);
  console.log(user, "data through redux ");
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
