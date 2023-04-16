import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import api from "../../../services";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("../../../services", () => ({
  get: jest.fn(),
}));

describe("test Card component ", () => {
  test("renders Card component", () => {
    render(<Card />, { wrapper: BrowserRouter });
  });
  test("calls api.get with correct URL", async () => {
    const mockApiGet = jest.spyOn(api, "get");
    render(<Card />, { wrapper: BrowserRouter });
    await waitFor(() => expect(mockApiGet).toHaveBeenCalledWith("/dentista"));
  });

  test("updates dentistas state with data from API", async () => {
    const mockData = [
      {
        matricula: "123",
        nome: "Test Name",
        usuario: { username: "Test Username" },
      },
    ];
    jest.spyOn(api, "get").mockResolvedValueOnce({ data: mockData });
    const { findByText } = render(<Card />, { wrapper: BrowserRouter });
    expect(await findByText(mockData[0].nome)).toBeInTheDocument();
    expect(
      await findByText(`@${mockData[0].usuario.username}`)
    ).toBeInTheDocument();
  });
});
