import shortid from "shortid";
import redoIMG from "../../Wrappers/BonusWrapper/Bonus/redo.png";

const RedoCounter = ({redo}) => {
  const {input} = redo;

  const renderedRow = input.map(() => (
    <button
      className="input"
      key={shortid.generate()}></button>
  ))

  return (
    <div className="redo">
      <img className="bonus" src={redoIMG} alt="redo"/> {renderedRow}
    </div>
  );
};

export default RedoCounter;
