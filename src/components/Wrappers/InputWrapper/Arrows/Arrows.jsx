// Arrows from the background
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

export default Arrows;
