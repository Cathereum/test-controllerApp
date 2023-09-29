import BtnControlStore from "../../stores/ButtonControlStore";
import ButtonControl from "../../views/ButtonControl/ButtonControl";

const textControl = new BtnControlStore();
const alertControl = new BtnControlStore();

export interface ButtonConfig {
  text: string;
  onClick: () => void;
}

export const ButtonControlWrapper: React.FC = () => {
  const alertControlLeftButtons: ButtonConfig[] = [
    {
      text: "Показать число",
      onClick: () => alertControl.showAlertWithNumber(alertControl.text),
    },
  ];

  const alertControlRightButtons: ButtonConfig[] = [
    {
      text: "Показать текст",
      onClick: () => alertControl.showAlertWithText(alertControl.text),
    },
  ];

  const textControlRightButtons: ButtonConfig[] = [
    {
      text: "Очистить",
      onClick: () => textControl.clearText(""),
    },
    {
      text: "Изменить текст",
      onClick: () => textControl.setText("Hello World"),
    },
  ];
  return (
    <div className="buttonControlWrapper-container">
      <ButtonControl
        BtnControlStore={textControl}
        rightButtons={textControlRightButtons}
      />
      <ButtonControl
        BtnControlStore={alertControl}
        rightButtons={alertControlRightButtons}
        leftButtons={alertControlLeftButtons}
      />
    </div>
  );
};
