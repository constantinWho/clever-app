import redoIMG from "../../Wrappers/BonusWrapper/Bonus/redo.png";

const RedoCounter = ({ redo }) => {
  const { input } = redo;
  return (
    <div className="redo">
      <img className="bonus" src={redoIMG} alt="redo" />
      {input.map((i) => (
        <button className="input" key={i.key}></button>
      ))}
    </div>
  );
};

export default RedoCounter;
