import Header from "./components/Header";
import PhotoForm from "./components/PhotoForm";
import { TypesProvider } from "./context/TypesContext";

const types = ["rmBackground", "webp", "addAltText"];

function App() {
	return (
		<TypesProvider types={types}>
			<div className="py-20 w-1/2 mx-auto space-y-12">
				<Header />
				<main>
					<PhotoForm />
				</main>
			</div>
		</TypesProvider>
	);
}

export default App;
