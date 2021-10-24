import "./Input.css";
import {useState, useEffect} from "react";

const Input = ({index, input, active, crossed, termChanged}) => {
  const [term,
    setTerm] = useState(input.value)

  const selectTerm = input.dice
    ? (
      <svg width="640px" height="512px" viewBox="0 0 640 512" version="1.1">
        <path
          className="dice-front"
          d="M433.63,189.3 L258.7,14.37 C239.54,-4.79 208.47,-4.79 189.31,14.37 L14.37,189.3 C-4.79,208.46 -4.79,239.53 14.37,258.69 L189.3,433.63 C208.46,452.79 239.53,452.79 258.69,433.63 L433.63,258.7 C452.79,239.53 452.79,208.46 433.63,189.3 L433.63,189.3 Z M96,248 C82.75,248 72,237.25 72,224 C72,210.74 82.75,200 96,200 C109.25,200 120,210.74 120,224 C120,237.25 109.25,248 96,248 L96,248 Z M224,376 C210.75,376 200,365.25 200,352 C200,338.74 210.75,328 224,328 C237.25,328 248,338.74 248,352 C248,365.25 237.25,376 224,376 L224,376 Z M224,248 C210.75,248 200,237.25 200,224 C200,210.74 210.75,200 224,200 C237.25,200 248,210.74 248,224 C248,237.25 237.25,248 224,248 L224,248 Z M224,120 C210.75,120 200,109.25 200,96 C200,82.74 210.75,72 224,72 C237.25,72 248,82.74 248,96 C248,109.25 237.25,120 224,120 L224,120 Z M352,248 C338.75,248 328,237.25 328,224 C328,210.74 338.75,200 352,200 C365.25,200 376,210.74 376,224 C376,237.25 365.25,248 352,248 L352,248 Z"
          id="front"></path>
        <path
          className="dice-back"
          d="M592,192 L473.26,192 C485.95,221.59 480.38,257.2 456.26,281.32 L320,417.58 L320,464 C320,490.51 341.49,512 368,512 L592,512 C618.51,512 640,490.51 640,464 L640,240 C640,213.49 618.51,192 592,192 L592,192 Z M480,376 C466.75,376 456,365.25 456,352 C456,338.74 466.75,328 480,328 C493.25,328 504,338.74 504,352 C504,365.25 493.25,376 480,376 L480,376 Z"
          id="back"></path>
      </svg>
    )
    : (input.crossed
      ? "X"
      : term)

  const onClick = () => {
    if (!crossed[index + 1] || term !== 'X') {
      setTerm(term === 'X'
        ? input.value
        : 'X')
      let crossedCopy = crossed.slice(0)
      crossedCopy[index] = !crossedCopy[index]
      termChanged(crossedCopy)
    }
  }

  return (
    
    <button
      onClick={onClick}
      className={term === 'X'
      ? 'input selected'
      : 'input'}
      data-index={index}
      data-crossed={input.crossed
      ? true
      : null}
      disabled={!active || input.disabled
      ? true
      : null}
      data-has-image={input.dice
      ? true
      : null}>
      {selectTerm}
    </button>
  );
};

export default Input;
