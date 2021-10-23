import React from "react";
import GameInfo from "./components/GameInfo/GameInfo";
import YellowArea from "./components/YellowArea/YellowArea";
import BlueArea from "./components/BlueArea/BlueArea";
import GreenArea from "./components/GreenArea/GreenArea";
import OrangeArea from "./components/OrangeArea/OrangeArea";
import PurpleArea from "./components/PurpleArea/PurpleArea";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <GameInfo />
      <YellowArea />
      <BlueArea />
      <GreenArea />
      <OrangeArea />
      <PurpleArea />
    </div>
  );
};

export default App;
