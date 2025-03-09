// FileContext.tsx
import { createContext, useState, ReactNode, useEffect } from "react";

export interface FileDetails {
  id: string; // unique identifier
  file: File; // the full File object
  name: string; // file name
  size: number; // file size
  type: string; // MIME type
  previewUrl: string; // temporary URL for previews
}

interface FileContext {
  files: FileDetails[];
  addFiles: (newFiles: File[]) => void;
  clearFiles: () => void;
}

export const FileContext = createContext<FileContext | null>(null);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<FileDetails[]>([]);

  const addFiles = (newFiles: File[]) => {
    const newFileDetails = newFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      previewUrl: URL.createObjectURL(file),
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFileDetails]);
  };

  const clearFiles = () => {
    files.forEach((f) => URL.revokeObjectURL(f.previewUrl));
    setFiles([]);
  };

  useEffect(() => {
    return () => {
      files.forEach((fileDetail) => URL.revokeObjectURL(fileDetail.previewUrl));
    };
  }, [files]);

  return (
    <FileContext.Provider value={{ files, addFiles, clearFiles }}>
      {children}
    </FileContext.Provider>
  );
};
