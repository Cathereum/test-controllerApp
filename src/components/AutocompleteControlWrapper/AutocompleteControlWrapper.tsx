import AutocompleteStore from "../../stores/AutocompleteStore";
import { AutocompleteControl } from "../../views/AutocompleteControl/AutocompleteControl";

const complete3 = new AutocompleteStore();
const complete10 = new AutocompleteStore();

export const AutocompleteControlWrapper: React.FC = () => {
  return (
    <div className="autocompleteControlWrapper-container">
      <AutocompleteControl AutocompleteStore={complete3} ArrLength={3} />
      <AutocompleteControl AutocompleteStore={complete10} ArrLength={10} />
    </div>
  );
};
