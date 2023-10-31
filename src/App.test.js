import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

describe("Star Wars APP", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));

  it("should show a list of characters from the API", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });

    render(<App />);
    expect(window.fetch).toHaveBeenCalledTimes(2);
    expect(window.fetch).toHaveBeenCalledWith(
      "http://swapi.dev/api/people/?page=1"
    );

    for (let character of data.results) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });
});