import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { options } from "../data/subjects";
import { availabilityOptions } from "../data/availability";

import { postData, getData } from "../api";
import { GET_BOOK_BY_ID, POST_BOOK } from "../api/urls";

import Input from "./common/Input";
import Select from "./common/Select";
import RadioGroup from "./common/RadioGroup";
import Button from "./common/Button";

function CreateBook() {
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState();
  const [publisher, setPublisher] = useState();
  const [isbn, setIsbn] = useState();
  const [subject, setSubject] = useState();
  const [pages, setPages] = useState();
  const [availability, setAvailability] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      let getBookUrl = GET_BOOK_BY_ID.replace("{id}", id);
      getData(getBookUrl).then((data) => {
        console.log(data);
        const {
          title,
          writer,
          publisher,
          isbn,
          subject,
          pages,
          availability,
        } = data;
        setTitle(title);
        setWriter(writer);
        setPublisher(publisher);
        setIsbn(isbn);
        setSubject(subject);
        setPages(pages);
        setAvailability(availability);
      });
    }
  }, [id]);

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
    postData(POST_BOOK, data).then(() => {
      alert("Books saved successfully");
    });
  };
  return (
    <>
      <div style={{ display: "flex", margin: "3rem" }}>
        <Button
          label={"Books"}
          onClick={() => {
            navigate("/books");
          }}
        />
        <Button
          label={"Login"}
          onClick={() => {
            navigate("/login");
          }}
        />
      </div>
      <div className="container my-5">
        <Input
          type={"text"}
          label={"Book Title"}
          placeholder={"Book Title"}
          value={title}
          onChange={handleTitle}
        />
        <Input
          type={"text"}
          label={"Book Writer"}
          placeholder={"Book writer"}
          value={writer}
          onChange={handleWriter}
        />
        <Input
          type={"text"}
          label={"Book publisher"}
          placeholder={"Book Publisher"}
          value={publisher}
          onChange={handlePublisher}
        />
        <Input
          type={"text"}
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
          type={"text"}
          label={"No of pages"}
          placeholder={"No of pages"}
          value={pages}
          onChange={handlePages}
        />

        <Button onClick={saveData} label="Save Book" />
      </div>
    </>
  );
}
export default CreateBook;
