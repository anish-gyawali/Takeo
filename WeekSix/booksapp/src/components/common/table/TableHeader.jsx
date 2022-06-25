import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Writer</th>
        <th>Publisher</th>
        <th>ISBN Number</th>
        <th>Subject</th>
        <th>Availability</th>
        <th>No of Pages</th>
        <th>Edit Action</th>
        <th>Delete Action</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
