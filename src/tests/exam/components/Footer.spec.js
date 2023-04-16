import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";

describe("render Footer component", () => {
  render(<Footer />, { wrapper: BrowserRouter });
  test("should text 'Voltar para o topo' exist", () => {
    expect(screen.getByText("Voltar para o topo")).toBeInTheDocument();
  });
});
