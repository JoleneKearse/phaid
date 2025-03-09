import Header from "./components/Header";
import PhotoForm from "./components/PhotoForm";
import { TypesProvider } from "./context/TypesContext";
import { FileProvider } from "./context/FileContext";

const types = ["rmBackground", "webp", "addAltText"];

function App() {
  return (
    <TypesProvider types={types}>
      <div className="py-20 w-1/2 mx-auto space-y-12">
        <Header />
        <FileProvider
          value={{ files: [], addFiles: () => {}, clearFiles: () => {} }}
        >
          <main>
            <PhotoForm />
          </main>
        </FileProvider>
      </div>
    </TypesProvider>
  );
}

export default App;
