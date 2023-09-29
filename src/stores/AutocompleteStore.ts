import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class AutocompleteStore {
  inputValue = "";
  countriesList: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setInputValue = async (value: string) => {
    this.inputValue = value;
    const filteredCountries = await getCountryByName(value);

    runInAction(() => {
      this.countriesList = filteredCountries;
    });
  };

  selectCountry = (countryName: string) => {
    this.setInputValue(countryName);
  };
}

export default AutocompleteStore;
