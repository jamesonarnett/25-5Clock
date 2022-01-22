import React, { useState } from "react";
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
        <button onClick={props.increaseTime} className="marginHalf">
          UP
        </button>
        <button onClick={props.decreaseTime} className="marginHalf">
          DOWN
        </button>
      </div>
      <div className="marginHalf">
        <h2>Break Length</h2>
        <button onClick={props.breakIncrease} className="marginHalf">
          UP
        </button>
        <button onClick={props.breakDecrease} className="marginHalf">
          DOWN
        </button>
      </div>
    </div>
  );
};

const TimerBox = (props) => {
  return (
    <div className="centerFlex">
      <div className="timer">
        <h2>Session:</h2>
        <p className="huge">{props.time}</p>
        <div className="nextTo">
          <h2>Break:</h2>
          <p className="huge">{props.pauseBreak}</p>
        </div>
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
  const [time, setTime] = useState(25);
  const [pauseBreak, setBreak] = useState(5);

  const increaseTime = (e) => {
    setTime(time + 1);
  };
  const decreaseTime = (e) => {
    setTime(time - 1);
  };

  const breakIncrease = () => {
    setBreak(pauseBreak + 1);
  };
  const breakDecrease = () => {
    setBreak(pauseBreak - 1);
  };

  return (
    <div className="center down">
      <Header />

      <ChangeClock
        increaseTime={increaseTime}
        decreaseTime={decreaseTime}
        breakIncrease={breakIncrease}
        breakDecrease={breakDecrease}
      />
      <TimerBox time={time} pauseBreak={pauseBreak} />
      <ButtonBox />

      <GoodBye />
    </div>
  );
};

export default App;
