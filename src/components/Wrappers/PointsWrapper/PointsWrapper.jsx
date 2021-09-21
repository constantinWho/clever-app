import Points from "./Points/Points";
import "./PointsWrapper.css";

const PointsWrapper = ({ points }) => {
  return (
    <div className="points-wrapper">
      {points.map((p) => (
        <Points value={p.value} key={p.key} index={p.index} />
      ))}
    </div>
  );
};

export default PointsWrapper;
