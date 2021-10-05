import InputWrapper from "../Wrappers/InputWrapper/InputWrapper";
import BonusWrapper from "../Wrappers/BonusWrapper/BonusWrapper";
import PointsWrapper from "../Wrappers/PointsWrapper/PointsWrapper";
import "./BlueArea.css";
import React from "react";

class BlueArea extends React.Component {
  state = {
    input: [
      { key: 1, disabled: true, dice: true },
      { key: 2, value: 2 },
      { key: 3, value: 3 },
      { key: 4, value: 4 },
      { key: 5, value: 5 },
      { key: 6, value: 6 },
      { key: 7, value: 7 },
      { key: 8, value: 8 },
      { key: 9, value: 9 },
      { key: 10, value: 10 },
      { key: 11, value: 11 },
      { key: 12, value: 12 },
    ],
    bonus: {
      col: [
        { type: "col", key: 1, styleSheet: "orange", value: 5 },
        { type: "col", key: 2, styleSheet: "yellow", value: "X" },
        { type: "col", key: 3, styleSheet: "fox", value: "FOX" },
      ],
      row: [
        { type: "row", key: 4, styleSheet: "redo", value: "REDO" },
        { type: "row", key: 5, styleSheet: "green", value: "X" },
        { type: "row", key: 6, styleSheet: "purple", value: 6 },
        { type: "row", key: 7, styleSheet: "plus-one", value: "+1" },
      ],
    },
    points: [
      { key: 1, index: 1, value: 1 },
      { key: 2, index: 2, value: 2 },
      { key: 3, index: 3, value: 4 },
      { key: 4, index: 4, value: 7 },
      { key: 5, index: 5, value: 11 },
      { key: 6, index: 6, value: 16 },
      { key: 7, index: 7, value: 22 },
      { key: 8, index: 8, value: 29 },
      { key: 9, index: 9, value: 37 },
      { key: 10, index: 10, value: 46 },
      { key: 11, index: 11, value: 56 },
    ],
  };

  render() {
    console.log("BLUE RENDERED");
    return (
      <div className="blue-area">
        <PointsWrapper points={this.state.points} />
        <InputWrapper
          handleClick={this.props.handleClick.bind(this)}
          input={this.state.input}
          arrowsX
          arrowsY
          blueArea={this.state}
        />
        <BonusWrapper bonus={this.state.bonus.col} />
        <BonusWrapper bonus={this.state.bonus.row} />
      </div>
    );
  }
}

export default BlueArea;
