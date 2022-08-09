import { render, screen } from "@testing-library/react";
import App from "./App";

test("MainPage Title", () => {
  render(<App />);
  const linkElement = screen.getByText("Star Wars Wiki");
  expect(linkElement).toBeInTheDocument();
});
