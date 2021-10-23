import shortid from 'shortid';
import Arrows from "./Arrows/Arrows";
import Input from "./Input/Input";
import "./InputWrapper.css";

const InputWrapper = ({input, arrowsX, arrowsY, arrowsZ}) => {
  const renderedInput = input.map((input, i) => (
    <Input
      key={shortid.generate()}
      value={input}
      input={input}
      index={i}
    />))

    return (
    <div className="input-wrapper">
      <Arrows
        direction="X"
        arrowsX={arrowsX}
        inputNum={input.length}
      />
      <Arrows
        direction="Y"
        arrowsY={arrowsY}
        inputNum={input.length}
      />
      <Arrows direction="Z" arrowsZ={arrowsZ} />
      {renderedInput}
    </div>
  );
};

export default InputWrapper;
