import { render, screen } from "@testing-library/react";
import { TypesProvider, useTypes } from "./TypesContext";

const TestComponent = () => {
  const types = useTypes();
  return (
    <div>
      {types.map((type) => (
        <span key={type}>{type}</span>
      ))}
    </div>
  );
};

describe("TypesContext", () => {
  test("provides types to the consuming component", () => {
    const types = ["webp", "rmBackground", "addAltText"];

    render(
      <TypesProvider types={types}>
        <TestComponent />
      </TypesProvider>
    );

    types.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  test("provides an empty array when no types are provided", () => {
    render(
      <TypesProvider types={[]}>
        <TestComponent />
      </TypesProvider>
    );

    expect(screen.queryByText(/webp|rmBackground|addAltText/i)).not.toBeInTheDocument();
  });
});