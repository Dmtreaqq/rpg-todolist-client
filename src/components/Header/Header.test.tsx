import { render, screen } from "@testing-library/react";
import Header from "./index";

test("Render header", () => {
  render(<Header />);
  const headerDiv = screen.getByText("Header");
  expect(headerDiv).toBeInTheDocument();
});
