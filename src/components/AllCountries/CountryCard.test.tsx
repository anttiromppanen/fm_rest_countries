/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CountryCard from "./CountryCard";

const country = {
  name: "ExampleCountry",
  flag: "example.png",
  population: 1000000,
  region: "ExampleRegion",
  capital: "ExampleCapital",
};

describe("CountryCard", () => {
  it("should redirect to correct url when clicked", () => {
    const { container } = render(
      <MemoryRouter>
        <CountryCard {...country} />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByTestId("country-card-link"));

    expect(container.innerHTML).toMatch(`/country/${country.name}`);
  });
});
