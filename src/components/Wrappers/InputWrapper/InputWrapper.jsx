import Input from "./Input/Input";
import "./InputWrapper.css";
import Arrows from "./Arrows/Arrows";
const InputWrapper = ({ input, arrows }) => {
  console.log(arrows.arrowsX.name);
  return (
    <div className="input-wrapper">
      <Arrows name={arrows.arrowsX.name} direction={arrows.arrowsX.direction} />
      <Arrows name={arrows.arrowsY.name} direction={arrows.arrowsY.direction} />
      <Arrows name={arrows.arrowsZ.name} direction={arrows.arrowsZ.direction} />
      {input.map((i) => (
        <Input value={i.value} key={i.key} />
      ))}
    </div>
  );
};

export default InputWrapper;
