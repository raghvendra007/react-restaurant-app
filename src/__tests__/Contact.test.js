import React from "react";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import Error from "../components/error";
import App from "../App";
import { render, screen } from "@testing-library/react";
test("should load the component", () => {
  render(<App />);
  const body = screen.getByRole(/appRouter/i);

  // Assertion
  expect(body).toBeInTheDocument();
});
