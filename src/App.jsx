import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";

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
        <h2 id="session-label">Session Length</h2>
        <p id="session-length">{props.time}</p>
        <button
          id="session-increment"
          onClick={props.increaseTime}
          className="btn btn-dark marginHalf"
        >
          <AddIcon />
        </button>
        <button
          id="session-decrement"
          onClick={props.decreaseTime}
          className="btn btn-dark marginHalf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-down-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
      </div>
      <div className="marginHalf">
        <h2 id="break-label">Break Length</h2>
        <p id="break-length">{props.pauseBreak}</p>
        <button
          id="break-increment"
          onClick={props.breakIncrease}
          className="btn btn-dark marginHalf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-up-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
          </svg>
        </button>
        <button
          id="break-decrement"
          onClick={props.breakDecrease}
          className="btn btn-dark marginHalf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-down-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const TimerBox = (props) => {
  return (
    <div className="centerFlex">
      <div className="timer">
        <h2 id="timer-label">Session:</h2>
        <p className="huge">{props.time}</p>
      </div>
    </div>
  );
};

const ButtonBox = (props) => {
  return (
    <div>
      <button className="btn btn-dark threeButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-play-fill"
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
      </button>
      <button className="btn btn-dark threeButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-pause-fill"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
        </svg>
      </button>
      <button className="btn btn-dark threeButton">Reset</button>
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
  const [time, setTime] = useState(1);
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
        time={time}
        pauseBreak={pauseBreak}
      />
      <TimerBox time={time} pauseBreak={pauseBreak} />
      <ButtonBox />

      <GoodBye />
    </div>
  );
};

export default App;
