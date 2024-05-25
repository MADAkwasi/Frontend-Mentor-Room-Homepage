import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { navLinks } from "../utils/NavLinks";
import "@testing-library/jest-dom";
import { GlobalStateProvider } from "./context/GlobalStateContext";

const renderWithContext = (ui: React.ReactElement) => {
  return render(<GlobalStateProvider>{ui}</GlobalStateProvider>);
};

describe("App", () => {
  it("It works", () => {
    expect(true).toBe(true);
  });

  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByTestId("app-container")).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  it("renders navbar", () => {
    render(<App />);
    expect(screen.getByTestId("nav-component")).toBeInTheDocument();
  });

  it("renders navbar children", () => {
    render(<App />);
    navLinks.map((link) => expect(screen.getByText(link)).toBeInTheDocument());
  });
});

describe("hero images changes on event", () => {
  it("slider changes background image when next and previous buttons are clicked", () => {
    renderWithContext(<App />);

    const heading = screen.getByTestId("heading");
    const nextButton = screen.getByAltText("right arrow");
    const prevButton = screen.getByAltText("left arrow");

    expect(heading).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();

    expect(heading).toHaveTextContent("Discover innovative ways to decorate");

    fireEvent.click(nextButton);
    expect(heading).toHaveTextContent(`We are available all across the globe`);

    fireEvent.click(nextButton);
    expect(heading).toHaveTextContent(`Manufactured with the best materials`);

    fireEvent.click(nextButton);
    expect(heading).toHaveTextContent("Discover innovative ways to decorate");

    fireEvent.click(prevButton);
    expect(heading).toHaveTextContent(`Manufactured with the best materials`);

    fireEvent.click(prevButton);
    expect(heading).toHaveTextContent(`We are available all across the globe`);
  });
});

describe("toggles between dark and light mode", () => {
  it("it toggles the theme class on the root element when the button is clicked", () => {
    render(<App />);

    const button = screen.getByTestId("theme-button");

    const rootElement = document.documentElement;
    expect(rootElement).toHaveClass("light-mode");

    fireEvent.click(button);
    expect(rootElement).toHaveClass("dark-mode");
    expect(rootElement).not.toHaveClass("light-mode");

    fireEvent.click(button);
    expect(rootElement).toHaveClass("light-mode");
    expect(rootElement).not.toHaveClass("dark-mode");
  });
});
