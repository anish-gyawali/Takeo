import { useState } from "react";
import { options } from "../data/subjects";
import { availabilityOptions } from "../data/availability";

import { postData } from "../api";
import { POST_BOOK } from "../api/urls";

import Input from "./common/Input";
import Select from "./common/Select";
import RadioGroup from "./common/RadioGroup";

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

  const saveData = async () => {
    const data = {
      title,
      writer,
      subject,
      isbn,
      pages,
      publisher,
      availability,
    };
    console.log(data);
    postData(POST_BOOK, data).then(() => {
      alert("Books saved successfully");
    });
  };
  return (
    <div className="container my-5">
      <Input
        label={"Book Title"}
        placeholder={"Book Title"}
        value={title}
        onChange={handleTitle}
      />
      <Input
        label={"Book Writer"}
        placeholder={"Book writer"}
        value={writer}
        onChange={handleWriter}
      />
      <Input
        label={"Book publisher"}
        placeholder={"Book Publisher"}
        value={publisher}
        onChange={handlePublisher}
      />
      <Input
        label={"ISBN Number"}
        placeholder={"ISBN Number"}
        value={isbn}
        onChange={handleIsbn}
      />

      <Select
        label="Subject"
        value={subject}
        options={options}
        onChange={handleSubject}
      />
      <RadioGroup
        label="Availability"
        value={availability}
        options={availabilityOptions}
        onClick={handleAvailability}
      />
      <Input
        label={"No of pages"}
        placeholder={"No of pages"}
        value={pages}
        onChange={handlePages}
      />

      <div class="mb-3 row">
        <div class="col-md-3 offset-md-2">
          <button class="btn btn-primary" onClick={saveData}>
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateBook;
