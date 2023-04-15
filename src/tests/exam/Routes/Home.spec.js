import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../../../Routes/Home";


test("should show home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText("Home")).toBeInTheDocument();
});
