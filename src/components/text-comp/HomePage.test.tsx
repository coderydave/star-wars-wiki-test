import { render, screen } from "@testing-library/react";
import TextComp from "./Text";

test("Species Cards", () => {
  const name = "Barmi"
  const value = "Barmi Barmi"
  render(<TextComp label={name} value={value} />);
});
