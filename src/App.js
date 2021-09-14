import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< HEAD
  const state = {
    yellowArea: {
      arrows: {
        arrowsX: { name: arrowsX, direction: "X" },
        arrowsY: { name: arrowsY, direction: "Y" },
        arrowsZ: { name: arrowsZ, direction: "Z" },
      },
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
        { key: 1, styleSheet: "blue", value: "X" },
        { key: 2, styleSheet: "orange", value: 4 },
        { key: 3, styleSheet: "green", value: "X" },
        { key: 4, styleSheet: "fox", value: "FOX" },
        { key: 5, styleSheet: "plus-one", value: "+1" },
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
          { key: 1, styleSheet: "orange", value: 5 },
          { key: 2, styleSheet: "yellow", value: "X" },
          { key: 3, styleSheet: "fox", value: "FOX" },
        ],
        row: [
          { key: 4, styleSheet: "redo", value: "REDO" },
          { key: 5, styleSheet: "green", value: "X" },
          { key: 6, styleSheet: "purple", value: 6 },
          { key: 7, styleSheet: "plus-one", value: "+1" },
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
  };

=======
>>>>>>> parent of 525bf6f (yellow done, blue 80%)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
