import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

describe("Testing text of component", () => {
  test("renders 'Hello World'", () => {
    render(<HelloWorld />);
    const helloWorldElem = screen.getByText("Hello world", { exact: false });
    expect(helloWorldElem).toBeInTheDocument();
  });
  test("renders 'Testing the component'", () => {
    render(<HelloWorld />);
    const testingCompElem = screen.getByText("Testing the component", {
      exact: false,
    });
    expect(testingCompElem).toBeInTheDocument();
  });
});
