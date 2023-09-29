import { observer } from "mobx-react-lite";
import AutocompleteStore from "../../stores/AutocompleteStore";

export interface AutocompleteControlProps {
  AutocompleteStore: AutocompleteStore;
  ArrLength: number;
}

export const AutocompleteControl: React.FC<AutocompleteControlProps> = observer(
  ({ AutocompleteStore, ArrLength }) => {
    const { selectCountry, setInputValue, inputValue, countriesList } =
      AutocompleteStore;

    const countries = countriesList.slice(0, ArrLength);

    return (
      <div className="form-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название страны"
        />
        <br />
        {countries &&
          countries.map((c) => (
            <ul className="autocomplete-list" key={c.fullName}>
              <li
                className="autocomplete-item"
                onClick={() => selectCountry(c.name)}
              >
                {c.name}, {c.fullName}. <img src={c.flag} alt="Флаг" />
              </li>
            </ul>
          ))}
      </div>
    );
  }
);
