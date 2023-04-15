import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../../../Components/LoginForm/LoginForm";

describe("LoginForm component", () => {
  render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
  test("should login field exist", () => {
    expect(screen.queryByPlaceholderText("Login"));
  });

  test("should password field exist", () => {
    expect(screen.queryAllByPlaceholderText("Password"));
  });
});
