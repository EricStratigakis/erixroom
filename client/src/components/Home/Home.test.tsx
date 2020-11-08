import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home components render", () => {
  test("renders Name Input component", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("Name Input");
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Generate New Room Button component", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("Generate New Room Button");
    expect(linkElement).toBeInTheDocument();
  });
  test("renders Join Exisiting Room Input component", () => {
    render(<Home />);
    const linkElement = screen.getByTestId("Join Exisiting Room Input");
    expect(linkElement).toBeInTheDocument();
  });
});
