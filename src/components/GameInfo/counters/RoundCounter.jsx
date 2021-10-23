import {useState} from "react";
import redoIMG from "../../Wrappers/BonusWrapper/Bonus/redo.png";

const RoundCounter = ({round}) => {
  const [counter,
    setCounter] = useState(1)

  return (
    <div className="round">
      <button onClick={() => setCounter(counter + 1)} className="input">{counter}</button>
      <img className="bonus" src={redoIMG} alt="redo"/>
    </div>
  );
};

export default RoundCounter;
