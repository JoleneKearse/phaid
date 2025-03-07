import Header from "./components/Header";
import Form from "./components/Form";
import { TypesProvider } from './context/TypesContext';

const types = ["webp", "rmBackground", "addAltText"];

function App() {
  return (
    <TypesProvider types={types}>
      <div className="py-20 w-1/2 mx-auto space-y-12">
        <Header />
        <main>
          <Form />  
        </main>
      </div>
    </TypesProvider>
  );
}

export default App;
