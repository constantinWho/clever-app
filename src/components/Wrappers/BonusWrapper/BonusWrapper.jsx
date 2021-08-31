import "./BonusWrapper.css";
import Bonus from "./Bonus/Bonus";

const BonusArea = ({ bonus }) => {
  let customClass =
    bonus.length >= 4 ? "bonus-wrapper-col" : "bonus-wrapper-row";
  return (
    <div className={customClass}>
      {bonus.map((b) => (
        <Bonus styleSheet={b.styleSheet} value={b.value} key={b.key} />
      ))}
    </div>
  );
};

export default BonusArea;
