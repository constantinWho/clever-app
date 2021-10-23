import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import arrow from "../Wrappers/arrow.png";
import "./OrangeArea.css";

const OrangeArea = () => {

  const input = [
    {
      value: ""
    }, {
      value: ""
    }, {
      value: ""
    }, {
      value: "x2"
    }, {
      value: ""
    }, {
      value: ""
    }, {
      value: "x2"
    }, {
      value: ""
    }, {
      value: ""
    }, {
      value: "x2"
    }, {
      value: "x3"
    }
  ]
  const bonus = [
    {
      styleSheet: "redo",
      value: "REDO"
    }, {
      styleSheet: "yellow",
      value: "X"
    }, {
      styleSheet: "plus-one",
      value: "+1"
    }, {
      styleSheet: "fox",
      value: "FOX"
    }, {
      styleSheet: "purple",
      value: "6"
    }
  ]
  
  return (
    <div className="orange-area">
      <img src={arrow} alt="arrow" className="arrow-img"/>
      <InputWrapper input={input}/>
      <BonusWrapper bonus={bonus}/>
    </div>
  );
};

export default OrangeArea;
