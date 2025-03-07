import { render, screen } from "@testing-library/react";
import Fieldset from "./Fieldset";
import { useTypes } from "../context/TypesContext";

// filepath: /home/jolene/phaid/src/components/Fieldset.test.tsx

// Mock the useTypes hook
jest.mock("../context/TypesContext", () => ({
  useTypes: jest.fn(),
}));

describe("Fieldset Component", () => {
  test("renders the fieldset with legend and checkboxes", () => {
    // Mock the return value of useTypes
    (useTypes as jest.Mock).mockReturnValue(["webp", "rmBackground", "addAltText"]);

    render(<Fieldset />);

    // Check for the legend
    const legend = screen.getByText(/Choose your image processing/i);
    expect(legend).toBeInTheDocument();

    // Check for the checkboxes
    const webpCheckbox = screen.getByRole("checkbox", { name: /Convert to webp/i });
    const rmBackgroundCheckbox = screen.getByRole("checkbox", { name: /Remove background/i });
    const addAltTextCheckbox = screen.getByRole("checkbox", { name: /Add alt text/i });

    expect(webpCheckbox).toBeInTheDocument();
    expect(rmBackgroundCheckbox).toBeInTheDocument();
    expect(addAltTextCheckbox).toBeInTheDocument();
  });

  test("renders no checkboxes when types array is empty", () => {
    // Mock the return value of useTypes
    (useTypes as jest.Mock).mockReturnValue([]);

    render(<Fieldset />);

    // Check for the legend
    const legend = screen.getByText(/Choose your image processing/i);
    expect(legend).toBeInTheDocument();

    // Check that no checkboxes are rendered
    const checkboxes = screen.queryAllByRole("checkbox");
    expect(checkboxes).toHaveLength(0);
  });
});