import RoundCounter from "./counters/RoundCounter";
import RedoCounter from "./counters/RedoCounter";
import PlusOneCounter from "./counters/PlusOneCounter";
import "./GameInfo.css";

const GameInfo = () => {
  const round = [
    {
      value: "REDO"
    }, {
      value: "+1"
    }, {
      value: "REDO"
    }, {
      value: "X|6"
    }, {
      value: ""
    }, {
      value: ""
    }
  ]
  const redo = {
    icon: {
      value: "REDO"
    },
    input: [
      {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }
    ]
  }
  const plusOne = {
    icon: {
      styleSheet: "plus-one-counter",
      value: "+1"
    },
    input: [
      {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }, {
        value: ""
      }
    ]
  }

  return (
    <div className="game-info">
      <RoundCounter round={round}/>
      <RedoCounter redo={redo}/>
      <PlusOneCounter plusOne={plusOne}/>
    </div>
  );
};

export default GameInfo;
