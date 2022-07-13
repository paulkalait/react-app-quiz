import React, { useContext } from "react";
import { QuizContext } from "../../Helpers/Context";
import "./index.css";
const MainMenu = () => {
  //destructure what we passed into the provider
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu-container">
      <div className="menu">
        <h1>Welcome to the React Quiz</h1>

        <div class="container">
          <span class="react-logo"></span>
        </div>

        <h1>Press Start to begin the quiz</h1>
        <button
          onClick={() => setGameState("quiz")}
          className="btn-hover color-1"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
