import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("ThemeToggle", () => {
  describe("initial render", () => {
    it("should be lightmode initially", () => {
      render(<ThemeToggle />);
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("should load darkmode from localStorage", () => {
      localStorage.setItem("darkMode", "true");
      render(<ThemeToggle />);
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("should render outline icon when dark mode is disabled", () => {
      render(<ThemeToggle />);
      const moonSolid = screen.getByTestId("moon-outline");
      expect(moonSolid).toBeDefined();
    });
  });

  describe("actions", () => {
    it("should render solid icon when dark mode is enabled", () => {
      render(<ThemeToggle />);
      fireEvent.click(screen.getByText("Dark Mode"));
      const moonSolid = screen.getByTestId("moon-solid");
      expect(moonSolid).toBeDefined();
    });

    it("should toggle dark class on documentElement when dark mode is toggled", () => {
      render(<ThemeToggle />);
      fireEvent.click(screen.getByText("Dark Mode"));
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("should save dark mode to localStorage when dark mode is toggled", () => {
      render(<ThemeToggle />);
      expect(localStorage.getItem("darkMode")).toBe("false");

      fireEvent.click(screen.getByText("Dark Mode"));
      expect(localStorage.getItem("darkMode")).toBe("true");
    });
  });
});
