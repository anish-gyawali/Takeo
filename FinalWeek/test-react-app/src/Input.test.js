import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  //test case for no Value
  test("header test is 'No Value' when input is blank", () => {
    //arrange
    render(<Input />);
    const input = screen.getByTestId("input");
    const header = screen.getByTestId("header");

    //Act
    fireEvent.change(input, { target: { value: "" } });

    //Assert
    expect(header.innerHTML).toBe("No Value");
  });

  test("header test is 'No Value' when input is blank", () => {
    //arrange
    render(<Input />);
    const input = screen.getByTestId("input");
    const header = screen.getByTestId("header");

    //Act
    fireEvent.change(input, { target: { value: "Heading" } });

    //Assert
    expect(header.innerHTML).toBe("Heading");
  });
});
