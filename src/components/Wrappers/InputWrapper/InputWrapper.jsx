
import { useState, useEffect } from "react";
import Arrows from "./Arrows/Arrows";
import Input from "./Input/Input";
import "./InputWrapper.css";

const InputWrapper = ({
  input,
  oneByOne,
  smallerSign,
  arrowsX,
  arrowsY,
  arrowsZ,
  type
}) => {
  const [crossed, setCrossed] = useState([])

  useEffect(() => {
    console.log('crossed: '+crossed.join(', '))
  }, [crossed])

  const renderedInput = input.map((input, i) => {
    return <div key={i} className="input-container">
      {smallerSign && i
        ? <div className="smaller-sign"></div>
        : null}
      <Input
        key={i}
        active={!oneByOne || !i || crossed[i - 1]}
        value={input}
        input={input}
        index={i}
        type={type}
        crossed={crossed}
        termChanged={setCrossed}/>
    </div>
  })

  return (
    <div className="input-wrapper">
      <Arrows direction="X" arrowsX={arrowsX} inputNum={input.length}/>
      <Arrows direction="Y" arrowsY={arrowsY} inputNum={input.length}/>
      <Arrows direction="Z" arrowsZ={arrowsZ}/>
      {renderedInput}
    </div>
  );
};

export default InputWrapper;
