import { rest } from "msw";
import { renderWithClient } from "../../tests/utils";
import server from "../../setupTests";
import AllCountries from "./AllCountries";
import { allCountries } from "../../helpers/testData";

describe("AllCountries", () => {
  it("should return all countries", async () => {
    server.use(
      rest.get("*/all*", (_req, res, ctx) =>
        res(ctx.status(200), ctx.json(allCountries)),
      ),
    );
    const result = renderWithClient(<AllCountries />);

    expect(await result.findAllByRole("link")).toHaveLength(
      allCountries.length,
    );
  });

  it("should show loading when data is loading", async () => {
    server.use(
      rest.get("*/all*", (_req, res, ctx) =>
        res(ctx.status(200), ctx.json(allCountries)),
      ),
    );
    const result = renderWithClient(<AllCountries />);

    expect(result.getByText("Loading...")).toBeInTheDocument();
  });

  it("should show error when error with data", async () => {
    server.use(rest.get("*/all*", (_req, res, ctx) => res(ctx.status(500))));
    const result = renderWithClient(<AllCountries />);

    expect(await result.findByText("Error...")).toBeInTheDocument();
  });

  it("should contain all fields", async () => {
    server.use(
      rest.get("*/all*", (_req, res, ctx) =>
        res(ctx.status(200), ctx.json(allCountries)),
      ),
    );
    const result = renderWithClient(<AllCountries />);
    const firstCountry = allCountries[0];

    await result.findByText(firstCountry.name.common);
    await result.findByText(firstCountry.population.toLocaleString("en-US"));
    await result.findAllByText(firstCountry.region);
    await result.findByText(firstCountry?.capital?.[0] || "");
    await result.findAllByText("Population:");
    await result.findAllByText("Region:");
    await result.findAllByText("Capital:");
  });
});
