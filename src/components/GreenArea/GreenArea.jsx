import BonusArea from "../Wrappers/BonusWrapper/BonusWrapper";
import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import arrow from "./arrow.png";
import "./GreenArea.css";

const GreenArea = ({ greenArea }) => {
  const { input, points, bonus } = greenArea;
  return (
    <div className="green-area">
      <img src={arrow} alt="arrow" className="arrow-img" />
      <PointsWrapper points={points} />
      <InputWrapper input={input} />
      <BonusArea bonus={bonus} />
    </div>
  );
};

export default GreenArea;
