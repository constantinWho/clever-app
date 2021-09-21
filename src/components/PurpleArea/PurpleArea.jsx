import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import arrow from "../Wrappers/arrow.png";
import "./PurpleArea.css";

const PurpleArea = ({ purpleArea }) => {
  const { input, bonus } = purpleArea;
  const greaterThan = ["<", "<", "<", "<", "<", "<", "<", "<", "<", "<"];
  let key = 0;
  return (
    <div className="purple-area">
      <img src={arrow} alt="arrow" className="arrow-img" />
      <div className="great-sign">
        {greaterThan.map((g) => (
          <p key={key++}>{g}</p>
        ))}
      </div>
      <InputWrapper input={input} />
      <BonusWrapper bonus={bonus} />
    </div>
  );
};

export default PurpleArea;
