const Arrows = (props) => {
  if (props.name) {
    let numberOfArrows = props.direction === "Z" ? 1 : 4;
    let arrowKey = 0;
    return (
      <div
        className={`arrows-wrapper direction-${props.direction.toLowerCase()}`}
      >
        {[...Array(numberOfArrows)].map((i) => (
          <div className="arrow" key={arrowKey++} />
        ))}
      </div>
    );
  }
  return false;
};

export default Arrows;
