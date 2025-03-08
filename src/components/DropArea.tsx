import { MdAddAPhoto } from "react-icons/md";
import { DragEvent, useEffect, useState } from "react";

const DropArea = () => {
	const [files, setFiles] = useState<File[]>([]);

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log("drop");

		if (e.dataTransfer.items) {
			const newFiles: File[] = [];
			Array.from(e.dataTransfer.items).forEach((item) => {
				if (item.kind === "file") {
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
		console.log("drag over");
	};

	const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log("drag leave");
	};

	const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log("drag enter");
	};

	useEffect(() => {
		console.log(files);
	}, [files]);

	return (
		<section
			id="droparea"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDragEnter={handleDragEnter}
			tabIndex={0}
			className="bg-[url(/camera.webp)] bg-cover bg-center bg-no-repeat h-[400px] w-[400px] border-2 border-dashed border-accent-blue-hover rounded-lg mx-auto flex flex-col justify-center items-center gap-6 font-extrabold text-4xl text-brand-400 text-center text-balance hover:border-accent-blue hover:text-accent-blue hover:opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
		>
			<p className="mt-32">Drag your image here!</p>
			<input
				type="file"
				name=""
				id="photoDrop"
				className="sr-only"
			/>
			<label htmlFor="photoDrop">
				<MdAddAPhoto />{" "}
			</label>
		</section>
	);
};

export default DropArea;
