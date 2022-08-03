import { fireEvent, render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("post are populated", async () => {
    //Arrange
    render(<Async />);
    const listItems = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 1000 }
    );

    //Assert
    expect(listItems).not.toHaveLength(0);
  });
});
