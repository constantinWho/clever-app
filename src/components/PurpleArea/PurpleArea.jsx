import shortid from "shortid";
import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import arrow from "../Wrappers/arrow.png";
import "./PurpleArea.css";

const PurpleArea = () => {
  const input = [
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
  const bonus = [
    {
      styleSheet: "redo",
      value: "REDO"
    }, {
      styleSheet: "blue",
      value: "X"
    }, {
      styleSheet: "plus-one",
      value: "+1"
    }, {
      styleSheet: "yellow",
      value: "X"
    }, {
      styleSheet: "fox",
      value: "FOX"
    }, {
      styleSheet: "redo",
      value: "REDO"
    }, {
      styleSheet: "green",
      value: "X"
    }, {
      styleSheet: "orange",
      value: "6"
    }, {
      styleSheet: "plus-one",
      value: "+1"
    }
  ]

  const greaterSigns = [
    "<",
    "<",
    "<",
    "<",
    "<",
    "<",
    "<",
    "<",
    "<",
    "<"
  ];

  return (
    <div className="purple-area">
      <img src={arrow} alt="arrow" className="arrow-img"/>
      <div className="great-sign">
        {greaterSigns.map((g) => (
          <p key={shortid.generate()}>{g}</p>
        ))}
      </div>
      <InputWrapper input={input}/>
      <BonusWrapper bonus={bonus}/>
    </div>
  );
};

export default PurpleArea;
