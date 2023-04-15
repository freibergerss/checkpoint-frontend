import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import api from "../../../services";
import LoginForm from "../../../Components/LoginForm/LoginForm";

jest.mock("../../../services", () => ({
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        username: "testuser",
        token: "testtoken",
      },
    })
  ),
}));

describe("renders LoginForm component", () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
  test("should login field exist", () => {
    expect(screen.getByPlaceholderText("Login")).toBeInTheDocument();
  });

  test("handleSubmit is called with correct arguments and performs expected actions", async () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const usernameInput = getByPlaceholderText("Login");
    const passwordInput = getByPlaceholderText("Password");
    const button = getByText("Send");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpass" } });

    fireEvent.click(button);

    expect(api.post).toHaveBeenCalledWith("/auth", {
      username: "testuser",
      password: "testpass",
    });
  });
});