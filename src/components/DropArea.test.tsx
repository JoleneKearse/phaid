import { render, screen, fireEvent } from "@testing-library/react";
import DropArea from "./DropArea";

describe("DropArea", () => {
  test("adds files to state on drop", () => {
    render(<DropArea />);

    const dropArea = screen.getByRole("region", { name: /drag your image here!/i });

    const file = new File(["file content"], "example.png", { type: "image/png" });
    const dataTransfer = {
      items: [
        {
          kind: "file",
          type: "image/png",
          getAsFile: () => file,
        },
      ],
      files: [file],
    };

    fireEvent.drop(dropArea, { dataTransfer });

    expect(screen.getByText("Files added!")).toBeInTheDocument();
  });

  test("prevents non-image files from being added", () => {
    render(<DropArea />);

    const dropArea = screen.getByRole("region", { name: /drag your image here!/i });
    const file = new File(["file content"], "example.mp3", { type: "audio/mpeg" });

    const dataTransfer = {
      items: [
        {
          kind: "file",
          type: "audio/mpeg",
          getAsFile: () => file,
        },
      ],
      files: [file],
    };
    fireEvent.drop(dropArea, { dataTransfer });

    expect(screen.getByText("Drag your image here!")).toBeInTheDocument();
  });
});
