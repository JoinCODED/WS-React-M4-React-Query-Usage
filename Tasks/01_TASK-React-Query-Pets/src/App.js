import "./App.css";
import PetsList from "./Components/PetsList";
import petsData from "./petsData";

function App() {
  return (
    <div className="App">
      <PetsList petsData={petsData} />
    </div>
  );
}

export default App;
