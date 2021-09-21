import GameInfo from "./components/GameInfo/GameInfo";
import YellowArea from "./components/YellowArea/YellowArea";
import BlueArea from "./components/BlueArea/BlueArea";
import GreenArea from "./components/GreenArea/GreenArea";
import OrangeArea from "./components/OrangeArea/OrangeArea";
import PurpleArea from "./components/PurpleArea/PurpleArea";
import "./App.css";

function App() {
  const state = {
    yellowArea: {
      input: [
        { key: 1, value: 3 },
        { key: 2, value: 6 },
        { key: 3, value: 5 },
        { key: 4, value: "X" },
        { key: 5, value: 2 },
        { key: 6, value: 1 },
        { key: 7, value: "X" },
        { key: 8, value: 5 },
        { key: 9, value: 1 },
        { key: 10, value: "X" },
        { key: 11, value: 2 },
        { key: 12, value: 4 },
        { key: 13, value: "X" },
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
    },
    blueArea: {
      input: [
        { key: 1, value: "BLUE-RULE" },
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
    },
    greenArea: {
      input: [
        { key: 1, value: "≥1" },
        { key: 2, value: "≥2" },
        { key: 3, value: "≥3" },
        { key: 4, value: "≥4" },
        { key: 5, value: "≥5" },
        { key: 6, value: "≥1" },
        { key: 7, value: "≥2" },
        { key: 8, value: "≥3" },
        { key: 9, value: "≥4" },
        { key: 10, value: "≥5" },
        { key: 11, value: "≥6" },
      ],
      bonus: [
        { key: 1, styleSheet: "plus-one", value: "+1" },
        { key: 2, styleSheet: "blue", value: "X" },
        { key: 3, styleSheet: "fox", value: "FOX" },
        { key: 4, styleSheet: "purple", value: 6 },
        { key: 5, styleSheet: "redo", value: "REDO" },
      ],
      points: [
        { key: 1, value: 1 },
        { key: 2, value: 3 },
        { key: 3, value: 6 },
        { key: 4, value: 10 },
        { key: 5, value: 15 },
        { key: 6, value: 21 },
        { key: 7, value: 28 },
        { key: 8, value: 36 },
        { key: 9, value: 45 },
        { key: 10, value: 55 },
        { key: 11, value: 66 },
      ],
    },
    orangeArea: {
      input: [
        { key: 1, value: "" },
        { key: 2, value: "" },
        { key: 3, value: "" },
        { key: 4, value: "x2" },
        { key: 5, value: "" },
        { key: 6, value: "" },
        { key: 7, value: "x2" },
        { key: 8, value: "" },
        { key: 9, value: "" },
        { key: 10, value: "x2" },
        { key: 11, value: "x3" },
      ],
      bonus: [
        { key: 1, styleSheet: "redo", value: "REDO" },
        { key: 2, styleSheet: "yellow", value: "X" },
        { key: 3, styleSheet: "plus-one", value: "+1" },
        { key: 4, styleSheet: "fox", value: "FOX" },
        { key: 5, styleSheet: "purple", value: "6" },
      ],
    },
    purpleArea: {
      input: [
        { key: 1, value: "" },
        { key: 2, value: "" },
        { key: 3, value: "" },
        { key: 4, value: "" },
        { key: 5, value: "" },
        { key: 6, value: "" },
        { key: 7, value: "" },
        { key: 8, value: "" },
        { key: 9, value: "" },
        { key: 10, value: "" },
        { key: 11, value: "" },
      ],
      bonus: [
        { key: 1, styleSheet: "redo", value: "REDO" },
        { key: 2, styleSheet: "blue", value: "X" },
        { key: 3, styleSheet: "plus-one", value: "+1" },
        { key: 4, styleSheet: "yellow", value: "X" },
        { key: 5, styleSheet: "fox", value: "FOX" },
        { key: 6, styleSheet: "redo", value: "REDO" },
        { key: 7, styleSheet: "green", value: "X" },
        { key: 8, styleSheet: "orange", value: "6" },
        { key: 9, styleSheet: "plus-one", value: "+1" },
      ],
    },
    gameInfo: {
      round: [
        { key: 1, number: 1, value: "REDO" },
        { key: 2, number: 2, value: "+1" },
        { key: 3, number: 3, value: "REDO" },
        { key: 4, number: 4, value: "X|6" },
        { key: 5, number: 5, value: "" },
        { key: 6, number: 6, value: "" },
      ],
      redo: {
        icon: { key: 0, value: "REDO" },
        input: [
          { key: 1, value: "" },
          { key: 2, value: "" },
          { key: 3, value: "" },
          { key: 4, value: "" },
          { key: 5, value: "" },
          { key: 6, value: "" },
          { key: 7, value: "" },
        ],
      },
      plusOne: {
        icon: { key: 3, styleSheet: "plus-one-counter", value: "+1" },
        input: [
          { key: 1, value: "" },
          { key: 2, value: "" },
          { key: 3, value: "" },
          { key: 4, value: "" },
          { key: 5, value: "" },
          { key: 6, value: "" },
          { key: 7, value: "" },
        ],
      },
    },
  };

  return (
    <div className="app">
      <GameInfo gameInfo={state.gameInfo} />
      <YellowArea yellowArea={state.yellowArea} />
      <BlueArea blueArea={state.blueArea} />
      <GreenArea greenArea={state.greenArea} />
      <OrangeArea orangeArea={state.orangeArea} />
      <PurpleArea purpleArea={state.purpleArea} />
    </div>
  );
}

export default App;
