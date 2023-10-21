import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render Where in the world", () => {
    render(<Navbar />);
    const linkElement = screen.getByText("Where in the world?");
    expect(linkElement).toBeDefined();
  });

  it("should render a ThemeToggle", () => {
    render(<Navbar />);
    const linkElement = screen.getByText("Dark Mode");
    expect(linkElement).toBeDefined();
  });
});
