import shortid from "shortid";
import Points from "./Points/Points";
import "./PointsWrapper.css";

const PointsWrapper = ({ points }) => {
  const renderedPoints = points.map((points, i) => (
    <Points value={points.value} key={shortid.generate()} index={i} />
  ))

  return (
    <div className="points-wrapper">
      {renderedPoints}
    </div>
  );
};

export default PointsWrapper;
