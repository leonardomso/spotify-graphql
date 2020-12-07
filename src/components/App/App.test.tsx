import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

test("It should get Spotify GraphQL title", () => {
  const screen = render(<App />)
  const title = screen.getByText("Spotify GraphQL")
  expect(title).toBeDefined();
});

test("It should get Search button", () => {
  const screen = render(<App />)
  const button = screen.getByText("Search")
  expect(button).toBeDefined();
});

test("It should get input value", () => {
  const screen = render(<App />)
  const input: HTMLInputElement = screen.getByPlaceholderText("Search artist by name") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Red Hot Chili" } })
  expect(input.value).toBe("Red Hot Chili")
});