import { fireEvent, render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import HelloWorld from "./HelloWorld";

describe("Testing text of component", () => {
  test("renders 'Hello World'", () => {
    //Arrange
    render(<HelloWorld />);
    const helloWorldElem = screen.getByText("Hello world", { exact: false });
    //Assert
    expect(helloWorldElem).toBeInTheDocument();
  });

  test("renders 'Testing the component not showing'", () => {
    //Arrange
    render(<HelloWorld />);
    const NotestingCompElem = screen.getByText(
      "Testing the component not showing",
      {
        exact: true,
      }
    );
    //Assert
    expect(NotestingCompElem).toBeInTheDocument();
  });

  test("renders 'Testing the component' should not be there", () => {
    render(<HelloWorld />);
    const testingCompElem = screen.queryByText("Testing the component", {
      exact: true,
    });
    //expect(testingCompElem).toBeNull();
    expect(testingCompElem).not.toBeInTheDocument();
  });

  test("renders 'Testing the component' when button Clicked", () => {
    render(<HelloWorld />);
    const showParaBtn = screen.getByRole("button", { name: "Show content" });
    userEvents.click(showParaBtn);
    const testingCompElem = screen.queryByText("Testing the component", {
      exact: true,
    });
    const NoTestingCompElem = screen.queryByText(
      "Testing the component not showing",
      {
        exact: true,
      }
    );
    expect(testingCompElem).toBeInTheDocument();
    expect(NoTestingCompElem).not.toBeInTheDocument();
  });

  test("renders 'Testing the component not showing' when button Clicked", () => {
    render(<HelloWorld />);
    const showParaBtn = screen.getByRole("button", { name: "Hide content" });
    // userEvents.click(showParaBtn);
    fireEvent.click(showParaBtn);
    const NoTestingCompElem = screen.queryByText(
      "Testing the component not showing",
      {
        exact: true,
      }
    );
    const testingCompElem = screen.queryByText("Testing the component", {
      exact: true,
    });

    expect(NoTestingCompElem).toBeInTheDocument();
    expect(testingCompElem).not.toBeInTheDocument();
  });
});
