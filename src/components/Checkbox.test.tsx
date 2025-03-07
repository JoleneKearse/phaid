import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
	test("renders the checkbox with the correct label for 'webp'", () => {
		render(<Checkbox type="webp" />);
		const checkbox = screen.getByRole("checkbox", { name: /Convert to webp/i });
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveAttribute("id", "webp");
	});

	test("renders the checkbox with the correct label for 'rmBackground'", () => {
		render(<Checkbox type="rmBackground" />);
		const checkbox = screen.getByRole("checkbox", {
			name: /Remove background/i,
		});
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveAttribute("id", "rmBackground");
	});

	test("renders the checkbox with the correct label for 'addAltText'", () => {
		render(<Checkbox type="addAltText" />);
		const checkbox = screen.getByRole("checkbox", { name: /Add alt text/i });
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveAttribute("id", "addAltText");
	});
});
