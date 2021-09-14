import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import "./YellowArea.css";

const YellowArea = ({ yellowArea }) => {
  const { input, bonus, points } = yellowArea;
  return (
    <div className="yellow-area">
      <InputWrapper input={input} arrowsX arrowsY arrowsZ />
      <BonusWrapper bonus={bonus} />
      <PointsWrapper points={points} />
    </div>
  );
};

export default YellowArea;
