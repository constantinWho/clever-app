import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import "./BlueArea.css";

const BlueArea = ({ blueArea }) => {
  const { bonus, points, input } = blueArea;
  return (
    <div className="blue-area">
      <PointsWrapper points={points} />
      <InputWrapper input={input} arrowsX arrowsY blueArea={blueArea} />
      <BonusWrapper bonus={bonus.col} />
      <BonusWrapper bonus={bonus.row} />
    </div>
  );
};

export default BlueArea;
