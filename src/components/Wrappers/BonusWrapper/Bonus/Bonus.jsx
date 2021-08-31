import "./Bonus.css";
import fox from "./fox.png";
import redo from "./redo.png";

const Bonus = ({ value, styleSheet }) => {
  let customClass = `icon ${styleSheet}`;

  return (
    <div className={customClass}>
      {(() => {
        switch (value) {
          case "FOX":
            return <img src={fox} alt="Logo" />;
          case "REDO":
            return <img src={redo} alt="Logo" />;
          default:
            return value;
        }
      })()}
    </div>
  );
};

export default Bonus;
