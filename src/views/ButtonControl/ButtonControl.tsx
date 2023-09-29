import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";
import BtnControlStore from "../../stores/ButtonControlStore";
import { ButtonConfig } from "../../components/ButtonControlWrapper/ButtonControlWrapper";

interface ButtonControlProps {
  BtnControlStore: BtnControlStore;
  leftButtons?: ButtonConfig[];
  rightButtons?: ButtonConfig[];
}

const ButtonControl: React.FC<ButtonControlProps> = observer(
  ({ BtnControlStore, leftButtons, rightButtons }) => {
    const { text, setText } = BtnControlStore;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };

    return (
      <div className="button-control-container">
        {leftButtons &&
          leftButtons.map((button, index) => (
            <button key={index} onClick={button.onClick}>
              {button.text}
            </button>
          ))}
        <input type="text" value={text} onChange={handleInputChange} />
        {rightButtons &&
          rightButtons.map((button, index) => (
            <button key={index} onClick={button.onClick}>
              {button.text}
            </button>
          ))}
      </div>
    );
  }
);

export default ButtonControl;
