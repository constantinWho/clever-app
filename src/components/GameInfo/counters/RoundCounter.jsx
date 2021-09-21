import redoIMG from "../../Wrappers/BonusWrapper/Bonus/redo.png";

const RoundCounter = ({ round }) => {
  return (
    <div className="round">
      <button className="input">{round[0].number}</button>
      <img className="bonus" src={redoIMG} alt="redo" />
    </div>
  );
};

export default RoundCounter;
