/**
 * Greet 컴포넌트는 대소문자 구분 없이 hello라는 텍스트를 렌더링해야 함
 * name이라는 props를 받아, hello 다음에 이름을 함께 출력해야 함
 */

import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test.only("renders a name", () => {
    render(<Greet name="Vishwas" />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});
