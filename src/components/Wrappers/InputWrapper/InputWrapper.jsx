import Arrows from "./Arrows/Arrows";
import Input from "./Input/Input";
import "./InputWrapper.css";

const InputWrapper = (props) => {
  return (
    <div className="input-wrapper">
      <Arrows
        direction="X"
        arrowsX={props.arrowsX}
        inputNum={props.input.length}
      />
      <Arrows
        direction="Y"
        arrowsY={props.arrowsY}
        inputNum={props.input.length}
      />
      <Arrows direction="Z" arrowsZ={props.arrowsZ} />

      {/* Input generator */}
      {props.input.map((i) => (
        <Input value={i.value} key={i.key} />
      ))}
    </div>
  );
};

export default InputWrapper;
