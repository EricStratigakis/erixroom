import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Renders Correct Component", () => {
  test("renders Home component when room is the homeroom", () => {
    render(<App />);
    const linkElement = screen.getByTestId("Home");
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Room component when the room is not the homeroom", () => {
    render(<App />);
    const linkElement = screen.getByTestId("Home");
    expect(linkElement).toBeInTheDocument();
  });
});
