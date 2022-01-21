import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <p className="marginUp">
        Set your break length, press start, get to work!
      </p>
    </div>
  );
};

const ChangeClock = (props) => {
  return (
    <div className="changeClockContainer">
      <div className="marginHalf">
        <h2>Session Length</h2>
        <button className="marginHalf">UP</button>
        <button className="marginHalf">DOWN</button>
      </div>
      <div className="marginHalf">
        <h2>Break Length</h2>
        <button className="marginHalf">UP</button>
        <button className="marginHalf">DOWN</button>
      </div>
    </div>
  );
};

const TimerBox = () => {
  return (
    <div className="centerFlex">
      <div className="timer">
        <h2>Session:</h2>
        <p className="huge">TIMER</p>
      </div>
    </div>
  );
};

const ButtonBox = (props) => {
  return (
    <div>
      <button className="threeButton">Start</button>
      <button className="threeButton">Pause</button>
      <button className="threeButton">Reset</button>
    </div>
  );
};

const GoodBye = () => {
  return (
    <div>
      <hr />
      <p className="center">Nice.</p>
    </div>
  );
};

const App = (props) => {
  return (
    <div className="center down">
      <Header />
      <ChangeClock />
      <TimerBox />
      <ButtonBox />
      <GoodBye />
    </div>
  );
};

export default App;
