import React from "react";
import BoardView from './components/Board';

function App() {
  return (
    <div className="App">
      <div>
        <h2 style={{textAlign: "center", color: "#fff"}}>
          Welcome to the Game of 2048
        </h2>
        <br />
      </div>
      <BoardView/>
      <div>
        <br />
        <h3 style={{textAlign: "center", color: "#fff"}}>Designed by Harsh</h3>
      </div>
      <br />
      <div>
        <p style={{textAlign: "center", color: "#fff"}}> Note: This is a Desktop Version</p>
      </div>
    </div>
  );
}

export default App;
