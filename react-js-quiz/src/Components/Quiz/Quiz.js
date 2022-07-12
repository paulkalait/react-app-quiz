import React, { useState, useContext } from "react";
import { Questions } from "../../Helpers/QuestionList";
import { QuizContext } from "../../Helpers/Context";

const Quiz = () => {
  //destructure the global state
  const { setScore, score , setGameState} = useContext(QuizContext);


  const [currentQuestion, setCurrentQuestion] = useState(0);
  //current set to nothing until the user chooses an option/answer
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if(Questions[currentQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("end")
  }

  return (
    <div>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questionOptions">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {/* if we are at the last question. if ccurentQuestion is = to the last question of the questions array*/}
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish</button>
      ) : (
        <button onClick={() => nextQuestion()}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
