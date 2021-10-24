import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import arrow from "../Wrappers/arrow.png";
import "./GreenArea.css";

const GreenArea = () => {

  const input = [
    {
      value: "≥1"
    }, {
      value: "≥2"
    }, {
      value: "≥3"
    }, {
      value: "≥4"
    }, {
      value: "≥5"
    }, {
      value: "≥1"
    }, {
      value: "≥2"
    }, {
      value: "≥3"
    }, {
      value: "≥4"
    }, {
      value: "≥5"
    }, {
      value: "≥6"
    }
  ]
  const bonus = [
    {
      styleSheet: "plus-one",
      value: "+1"
    }, {
      styleSheet: "blue",
      value: "X"
    }, {
      styleSheet: "fox",
      value: "FOX"
    }, {
      styleSheet: "purple",
      value: 6
    }, {
      styleSheet: "redo",
      value: "REDO"
    }
  ]
  const points = [
    {
      value: 1
    }, {
      value: 3
    }, {
      value: 6
    }, {
      value: 10
    }, {
      value: 15
    }, {
      value: 21
    }, {
      value: 28
    }, {
      value: 36
    }, {
      value: 45
    }, {
      value: 55
    }, {
      value: 66
    }
  ]

  return (
    <div className="green-area">
      <img src={arrow} alt="arrow" className="arrow-img"/>
      <PointsWrapper points={points}/>
      <InputWrapper input={input} oneByOne={true} />
      <BonusWrapper bonus={bonus}/>
    </div>
  );
};

export default GreenArea;
