import { end } from "@popperjs/core";
import { render, screen } from "@testing-library/react";
import LoginForm from "../../../Components/LoginForm/LoginForm";

describe("LoginForm component", () => {
  render(<LoginForm />);
  test("should login field exist", () => {
    expect(screen.queryByPlaceholderText("Login"));
    end;
  });

  test("should password field exist", () => {
    expect(screen.queryAllByPlaceholderText("Password"));
  });
});
