import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
    test("renders the header with the correct text", () => {
        render(<Header />);
        const headerElement = screen.getByRole('heading', { level: 1, name: /Phaid/i });
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveClass('bg-radial-[at_50%_75%] from-brand-500 to-accent-blue-hover inline-block text-transparent bg-clip-text text-8xl font-extrabold');
        const subHeaderElement = screen.getByRole('heading', { level: 2, name: /Photo Aid for Processing Your Project's Images/i });
        expect(subHeaderElement).toBeInTheDocument();
        expect(subHeaderElement).toHaveClass('text-3xl text-brand-500');
    });
});
