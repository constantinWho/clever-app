import React from "react";
import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import "./YellowArea.css";

class YellowArea extends React.Component {
  state = {
    input: [
      { key: 1, value: 3 },
      { key: 2, value: 6 },
      { key: 3, value: 5 },
      { key: 4, crossed: true, disabled: true },
      { key: 5, value: 2 },
      { key: 6, value: 1 },
      { key: 7, crossed: true, disabled: true },
      { key: 8, value: 5 },
      { key: 9, value: 1 },
      { key: 10, crossed: true, disabled: true },
      { key: 11, value: 2 },
      { key: 12, value: 4 },
      { key: 13, crossed: true, disabled: true },
      { key: 14, value: 3 },
      { key: 15, value: 4 },
      { key: 16, value: 6 },
    ],
    bonus: [
      { type: "col", key: 1, styleSheet: "blue", value: "X" },
      { type: "col", key: 2, styleSheet: "orange", value: 4 },
      { type: "col", key: 3, styleSheet: "green", value: "X" },
      { type: "col", key: 4, styleSheet: "fox", value: "FOX" },
      { type: "col", key: 5, styleSheet: "plus-one", value: "+1" },
    ],
    points: [
      { key: 1, value: 10 },
      { key: 2, value: 14 },
      { key: 3, value: 16 },
      { key: 4, value: 20 },
    ],
    arrow: true,
  };

  render() {
    return (
      <div className="yellow-area">
        <InputWrapper
          handleClick={this.props.handleClick.bind(this)}
          input={this.state.input}
          arrowsX={this.state.arrow}
          arrowsY={this.state.arrow}
          arrowsZ={this.state.arrow}
        />
        <BonusWrapper bonus={this.state.bonus} />
        <PointsWrapper points={this.state.points} />
      </div>
    );
  }
}

export default YellowArea;
