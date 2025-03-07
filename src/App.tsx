import Header from "./components/Header";
import Checkbox from "./components/Checkbox";

function App() {

  return (
    <div className="py-20 w-1/2 mx-auto">
      <Header />
      <Checkbox type="webp" />
      <Checkbox type="rmBackground" />
      <Checkbox type="addAltText" />
    </div>
  )
}

export default App
