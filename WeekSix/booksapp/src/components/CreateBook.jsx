import { useState } from "react";
import Input from "./common/Input";
import Select from "./common/Select";
import { options } from "../data/subjects";

// Book Title //input box
// Book Writer // input box
// Book Publisher // input box
// Isbn // input box
// Subject of the Books //Dropdown
// Number of pages // input box
// Availability // Radio box
function CreateBook() {
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState();
  const [publisher, setPublisher] = useState();
  const [isbn, setIsbn] = useState();
  const [subject, setSubject] = useState();
  const [pages, setPages] = useState();
  const [availability, setAvailability] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleWriter = (e) => {
    setWriter(e.target.value);
  };
  const handlePublisher = (e) => {
    setPublisher(e.target.value);
  };
  const handleIsbn = (e) => {
    setIsbn(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handlePages = (e) => {
    setPages(e.target.value);
  };

  const handleAvailability = (e) => {
    setAvailability(e.target.value);
  };

  return (
    <div className="container my-5">
      <Input label={"Book Title"} placeholder={"Book Title"} value={title} />
      <Input label={"Book Writer"} placeholder={"Book writer"} value={writer} />
      <Input
        label={"Book publisher"}
        placeholder={"Book Publisher"}
        value={publisher}
      />
      <Input label={"ISBN Number"} placeholder={"ISBN Number"} value={isbn} />

      <Select label="Subject" value={subject} options={options} />
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Availability
        </label>
        <div className="col-md-3">
          <div className="form-check col-sm-2">
            <input
              className="form-check-input"
              type="radio"
              name="availability"
              value="Yes"
            />
            <label className="form-check-label" for="availability1">
              Yes
            </label>
          </div>
          <div className="form-check col-sm-2">
            <input
              className="form-check-input"
              type="radio"
              name="availability"
              value="No"
            />
            <label className="form-check-label" for="availability2">
              No
            </label>
          </div>
        </div>
      </div>
      <Input label={"No of pages"} placeholder={"No of pages"} value={pages} />
    </div>
  );
}
export default CreateBook;
