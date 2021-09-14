import "./Input.css";
import dices from "./dices.png";

const Input = ({ value }) => {
  return (
    <div>
      {(() => {
        switch (value) {
          case "X":
            return <button className="input highlight">{value}</button>;
          case "BLUE-RULE":
            return <img className="dices" src={dices} alt="Logo" />;
          default:
            return <button className="input">{value}</button>;
        }
      })()}
    </div>
  );
};

export default Input;
