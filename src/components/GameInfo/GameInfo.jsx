import RoundCounter from "./counters/RoundCounter";
import RedoCounter from "./counters/RedoCounter";
import PlusOneCounter from "./counters/PlusOneCounter";
import "./GameInfo.css";

const GameInfo = ({ gameInfo }) => {
  const { redo, plusOne, round } = gameInfo;
  console.log(gameInfo);
  return (
    <div className="game-info">
      <RoundCounter round={round} />
      <RedoCounter redo={redo} />
      <PlusOneCounter plusOne={plusOne} />
    </div>
  );
};

export default GameInfo;
