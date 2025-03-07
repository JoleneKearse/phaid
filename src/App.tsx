import Header from "./components/Header";
import Fieldset from "./components/Fieldset";
import { TypesProvider } from './context/TypesContext';

const types = ["webp", "rmBackground", "addAltText"];

function App() {
  return (
    <TypesProvider types={types}>
      <div className="py-20 w-1/2 mx-auto space-y-12">
        <Header />
        <main className="space-y-12">
          <Fieldset />  
        </main>
      </div>
    </TypesProvider>
  );
}

export default App;
