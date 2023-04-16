import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import api from "../../../services";
import Queries from "../../../Routes/Queries";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("../../../services", () => ({
  get: jest.fn(),
}));

describe(" render Queries component ", () => {
  render(<Queries />, { wrapper: BrowserRouter });
  test("calls api.get with correct URL", () => {
    const mockApiGet = jest.spyOn(api, "get");
    render(<Queries />, { wrapper: BrowserRouter });
    expect(mockApiGet).toHaveBeenCalledWith("/consulta");
  });
});
