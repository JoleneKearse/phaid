import { render, screen, fireEvent } from "@testing-library/react";
import DropArea from "./DropArea";

describe("DropArea", () => {
  test("adds a single file to state on drop", () => {
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

    expect(screen.getByText("File added!")).toBeInTheDocument();
  });

  
  test("adds multiple files to state on drop", () => {
    render(<DropArea />);

    const dropArea = screen.getByRole("region", { name: /drag your image here!/i });

    const file1 = new File(["file content"], "example1.png", { type: "image/png" });
    const file2 = new File(["file content"], "example2.png", { type: "image/png" });
    const dataTransfer = {
      items: [
        {
          kind: "file",
          type: "image/png",
          getAsFile: () => file1,
        },
        {
          kind: "file",
          type: "image/png",
          getAsFile: () => file2,
        },
      ],
      files: [file1, file2],
    };

    fireEvent.drop(dropArea, { dataTransfer });

    expect(screen.getByText("2 files added!")).toBeInTheDocument();
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
