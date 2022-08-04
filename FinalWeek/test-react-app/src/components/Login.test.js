import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./login/Login";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "Anish" },
    }),
  },
}));

describe("Login form component", () => {
  test("username input should be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument();
  });

  test("password input should be rendered", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
  });

  test("button should be rendered", () => {
    render(<Login />);
    const btnInputEl = screen.getByRole("button");
    expect(btnInputEl).toBeInTheDocument();
  });

  test("username input should be empty", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/password/i);
    expect(userInputEl.value).toBe("");
  });

  test("password input should be empty", () => {
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl.value).toBe("");
  });

  test("button should be disabled", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeDisabled();
  });

  test("loading should not be rendered", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).not.toHaveTextContent(/please wait/i);
  });

  test("error message should not be visible", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
  });

  test("username input should change", () => {
    render(<Login />);
    const usernameChangeEl = screen.getByPlaceholderText(/username/i);
    const testValue = "test";

    fireEvent.change(usernameChangeEl, { target: { value: testValue } });
    expect(usernameChangeEl.value).toBe(testValue);
  });

  test("password input should change", () => {
    render(<Login />);
    const passwordChangeEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(passwordChangeEl, { target: { value: testValue } });
    expect(passwordChangeEl.value).toBe(testValue);
  });

  test("button should not be disabled when input is entered", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    const usernameChangeEl = screen.getByPlaceholderText(/username/i);
    const passwordChangeEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameChangeEl, { target: { value: testValue } });
    fireEvent.change(passwordChangeEl, { target: { value: testValue } });
    expect(btnEl).not.toBeDisabled();
  });

  test("loading should be rendered when Clicked", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    const usernameChangeEl = screen.getByPlaceholderText(/username/i);
    const passwordChangeEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameChangeEl, { target: { value: testValue } });
    fireEvent.change(passwordChangeEl, { target: { value: testValue } });
    fireEvent.click(btnEl);
    expect(btnEl).toHaveTextContent(/please wait/i);
  });

  test("loading should be visible after fetching", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    const usernameChangeEl = screen.getByPlaceholderText(/username/i);
    const passwordChangeEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameChangeEl, { target: { value: testValue } });
    fireEvent.change(passwordChangeEl, { target: { value: testValue } });
    fireEvent.click(btnEl);
    await waitFor(() => expect(btnEl).not.toHaveTextContent(/please wait/i));
  });

  test("User should be rendered after fetching", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    const usernameChangeEl = screen.getByPlaceholderText(/username/i);
    const passwordChangeEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(usernameChangeEl, { target: { value: testValue } });
    fireEvent.change(passwordChangeEl, { target: { value: testValue } });
    fireEvent.click(btnEl);

    const userItem = await screen.findByText("Anish");
    expect(userItem).toBeInTheDocument();
  });
});
