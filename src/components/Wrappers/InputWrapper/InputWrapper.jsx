import Input from "./Input/Input";
import "./InputWrapper.css";

const Arrows = (props) => {
  if (props[`arrows${props.direction}`]) {
    let numberOfArrows = (num) => {
      switch (num) {
        case 12:
          return props.direction === "X" ? 3 : 4;
        default:
          return props.direction === "Z" ? 1 : 4;
      }
    };

    let keyNum = 0;
    return (
      <div
        className={`arrows-wrapper direction-${props.direction.toLowerCase()}`}
      >
        {[...Array(numberOfArrows(props.inputNum))].map((i) => (
          <div className="arrow" key={keyNum++} />
        ))}
      </div>
    );
  }
  return false;
};

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
      {props.input.map((i) => (
        <Input value={i.value} key={i.key} />
      ))}
    </div>
  );
};

export default InputWrapper;
