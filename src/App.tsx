import { AutocompleteControlWrapper } from "./components/AutocompleteControlWrapper/AutocompleteControlWrapper";
import { ButtonControlWrapper } from "./components/ButtonControlWrapper/ButtonControlWrapper";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <ButtonControlWrapper />
      <AutocompleteControlWrapper />
    </div>
  );
}

export default App;
