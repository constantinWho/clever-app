import "./Points.css";

const Points = ({ value, index }) => {
  function ifIndexExists(i) {
    if (i) {
      return (
        <div>
          {index}
          <hr />
        </div>
      );
    }
  }
  return (
    <div className="points">
      <div>
        <div className="star"></div>
        <span>{value}</span>
      </div>
      {ifIndexExists(index)}
    </div>
  );
};

export default Points;
