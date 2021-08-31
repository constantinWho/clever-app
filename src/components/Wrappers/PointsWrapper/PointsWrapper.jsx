import Points from "./Points/Points";
import "./PointsWrapper.css";

const PointsWrapper = ({ points }) => {
  return (
    <div className="points-wrapper">
      {points.map((b) => (
        <Points value={b.value} key={b.key} />
      ))}
    </div>
  );
};

export default PointsWrapper;
