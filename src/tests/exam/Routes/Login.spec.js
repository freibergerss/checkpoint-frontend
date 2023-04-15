import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../../../Routes/Login";

test("should show login form", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  expect(screen.getByText("Login")).toBeInTheDocument();
});
