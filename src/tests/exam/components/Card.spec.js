
import { render, screen } from "@testing-library/react";
import Card from "../../../Components/Card/Card";

test("should renders Card component", () => {
  render(<Card />);
  const cardElement = screen.getByText('card');
  expect(cardElement).toBeInTheDocument();
});

