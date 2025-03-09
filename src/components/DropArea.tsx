import { MdAddAPhoto } from "react-icons/md";
import { DragEvent, useEffect, useState } from "react";

const DropArea = () => {
  const [files, setFiles] = useState<File[]>([]);
  const message =
    files.length > 1
      ? `${files.length} files added!`
      : files.length === 1
      ? "File added!"
      : "Drag your image here!";

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      const newFiles: File[] = [];
      Array.from(e.dataTransfer.items).forEach((item) => {
        if (item.kind === "file" && item.type.includes("image")) {
          const file = item.getAsFile();
          if (file) {
            newFiles.push(file);
          }
        }
      });
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    files.forEach((file) => {
      console.log(`Name: ${file.name}, Size: ${file.size} bytes`);
    });
  }, [files]);

  return (
    <section
      id="droparea"
      role="region"
      aria-label="drag your image here!"
      aria-describedby="Drop image files here"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      tabIndex={0}
      className="bg-[url(/camera.webp)] bg-cover bg-center bg-no-repeat h-[400px] w-[400px] border-2 border-accent-blue-hover rounded-lg mx-auto flex flex-col justify-center items-center gap-6 font-extrabold text-4xl text-brand-400 text-center text-balance hover:border-accent-blue hover:text-accent-blue hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
    >
      <p className="mt-32">{message}</p>
      <input type="file" id="photoDrop" className="sr-only" />
      <label htmlFor="photoDrop">
        <MdAddAPhoto />{" "}
      </label>
    </section>
  );
};

export default DropArea;
