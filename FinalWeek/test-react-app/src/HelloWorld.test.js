import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import HelloWorld from "./HelloWorld";

describe("Testing text of component", () => {
  test("renders 'Hello World'", () => {
    render(<HelloWorld />);
    const helloWorldElem = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElem).toBeInTheDocument();
  });

  test("renders 'Testing the component not showing'", () => {
    render(<HelloWorld />);
    const NotestingCompElem = screen.getByText(
      "Testing the component not showing",
      {
        exact: true,
      }
    );
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
    const showParaBtn = screen.getByRole("button");
    userEvents.click(showParaBtn);
    const testingCompElem = screen.queryByText("Testing the component", {
      exact: true,
    });
    expect(testingCompElem).toBeInTheDocument();
  });

  test("renders 'Testing the component not showing' when button Clicked", () => {
    render(<HelloWorld />);
    const showParaBtn = screen.getByRole("button");
    userEvents.click(showParaBtn);
    const NoTestingCompElem = screen.queryByText(
      "Testing the component not showing",
      {
        exact: true,
      }
    );
    expect(NoTestingCompElem).toBeNull();
  });
});
