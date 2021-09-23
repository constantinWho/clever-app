import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import "./YellowArea.css";

const YellowArea = ({ yellowArea }) => {
  const { input, bonus, points, arrow } = yellowArea;
  return (
    <div className="yellow-area">
      <InputWrapper
        input={input}
        arrowsX={arrow}
        arrowsY={arrow}
        arrowsZ={arrow}
      />
      <BonusWrapper bonus={bonus} />
      <PointsWrapper points={points} />
    </div>
  );
};

export default YellowArea;
