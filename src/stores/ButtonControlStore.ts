import { makeAutoObservable } from "mobx";

class ButtonControlStore {
  text = "";

  constructor() {
    makeAutoObservable(this);
  }

  setText = (value: string) => {
    this.text = value;
  };

  clearText = (value: string) => {
    this.text = value;
  };

  showAlertWithText = (value: string) => {
    alert(value);
  };

  showAlertWithNumber = (value: string | number) => {
    const isNumber = /^[0-9]+$/.test(value.toString());
    if (isNumber) {
      const res = parseFloat(value as string);
      alert(`Entered number: ${res}`);
    } else {
      alert("Value not a number");
    }
  };
}
export default ButtonControlStore;
