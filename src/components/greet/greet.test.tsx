/**
 * Greet 컴포넌트는 hello라는 텍스트를 렌더링해야 함
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Vishwas" />);
  const textElement = screen.getByText("hello Vishwas");
});
