import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders the button with correct text", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: /Apply/i });
    expect(button).toBeInTheDocument();
  });

  test("button has correct initial class names", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: /Apply/i });
    expect(button).toHaveClass("py-2 px-4 text-2xl text-brand-950 font-bold bg-accent-blue rounded-md");
  });

  test("button has correct hover class names", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: /Apply/i });
    expect(button).toHaveClass("hover:bg-accent-blue-hover hover:text-brand-200");
  });
});