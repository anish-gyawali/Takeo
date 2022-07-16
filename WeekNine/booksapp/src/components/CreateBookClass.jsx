import { Component } from "react";
import Input from "./common/Input";
import { UserContext } from "../components/context/UserContext";
import Select from "./common/Select";
import RadioInput from "./common/RadioInput";
import { options } from "../data/subjects";
import { availibilityOptions } from "../data/availability";
// Importing the component
// Extending the Component
// Class Syntax
// Constructor
//super calling
// State creation within the constructor
// writing render function
// retirning JSX from render function
// access state, props and function using this keyword

//Lifecycle methods
//constructor
//shouldComponentUpdate
//componentDidMount
//render
//componentDidUpdate
//componentWillUnmount

class CreateBookClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      publisher: "",
      isbn: "",
      subject: "",
      availability: "",
      numPages: "",
    };
  }
  static contextType = UserContext;

  componentDidMount() {
    const userData = this.context;
    console.log(userData);
  }
  // shouldComponentUpdate() {
  //   if (this.props.sth === 12) {
  //     return false;
  //   }
  //   return true;
  // }

  // componentDidUpdate() {
  //   console.log("Component Update");
  // }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
  doPostData = () => {
    console.log(this.state);
  };
  render() {
    const {
      title,
      author,
      publisher,
      isbn,
      subject,
      availability,
      numPages,
      handleInputChange,
      doPostData,
    } = this;
    console.log("Component is rendering");
    return (
      <div className="container my-5">
        <div className="d-flex justify-content-center mt-5">
          {/* <Link to="/books">
            <button className="btn btn-primary">Show Books</button>
          </Link> */}
          <button
            className="btn btn-primary"
            onClick={() => {
              this.props.navigate("/books");
            }}
          >
            Show Books
          </button>
        </div>
        <Input
          label="Book Title"
          placeholder="Book Title"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <Input
          label="Book Author"
          placeholder="Book Author"
          value={author}
          name="author"
          onChange={handleInputChange}
        />
        <Input
          label="Book Publisher"
          placeholder="Book Publisher"
          value={publisher}
          name="publisher"
          onChange={handleInputChange}
        />
        <Input
          label="ISBN number"
          placeholder="ISBN number"
          value={isbn}
          name="isbn"
          onChange={handleInputChange}
        />
        <Select
          label="Subject"
          value={subject}
          options={options}
          name="subject"
          onChange={handleInputChange}
        />
        <RadioInput
          label="Availibility"
          options={availibilityOptions}
          onClick={handleInputChange}
          name="availability"
          value={availability}
        />
        <Input
          label="Number of Pages"
          placeholder="Number of Pages"
          value={numPages}
          name="numPages"
          onChange={handleInputChange}
        />
        <div className="mb-3 row">
          <div className="col-md-3 offset-md-2">
            <button className="btn btn-primary" onClick={doPostData}>
              Save Book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBookClass;
