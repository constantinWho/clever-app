import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import arrow from "../Wrappers/arrow.png";
import "./OrangeArea.css";

const OrangeArea = ({ orangeArea }) => {
  const { input, bonus } = orangeArea;
  return (
    <div className="orange-area">
      <img src={arrow} alt="arrow" className="arrow-img" />
      <InputWrapper input={input} />
      <BonusWrapper bonus={bonus} />
    </div>
  );
};

export default OrangeArea;
