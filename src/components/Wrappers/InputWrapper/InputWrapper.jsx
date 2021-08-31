import Input from "./Input/Input";
import "./InputWrapper.css";

const Arrows = (props) => {
  if (props[`arrows${props.direction}`]) {
    let numberOfArrows = props.direction === "Z" ? 1 : 4;
    return (
      <div
        className={`arrows-wrapper direction-${props.direction.toLowerCase()}`}
      >
        {[...Array(numberOfArrows)].map((i) => (
          <div className="arrow" />
        ))}
      </div>
    );
  }
  return false;
};

const InputWrapper = (props) => {
  return (
    <div className="input-wrapper">
      <Arrows direction="X" arrowsX={props.arrowsX} />
      <Arrows direction="Y" arrowsY={props.arrowsY} />
      <Arrows direction="Z" arrowsZ={props.arrowsZ} />
      {props.input.map((i) => (
        <Input value={i.value} key={i.key} />
      ))}
    </div>
  );
};

export default InputWrapper;
