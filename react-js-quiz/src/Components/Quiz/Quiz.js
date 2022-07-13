import React, { useState, useContext } from "react";
import { Questions } from "../../Helpers/QuestionList";
import { QuizContext } from "../../Helpers/Context";
import './index.css'

const Quiz = () => {

  const [active, setActive] = useState({
    answerA: false,
    answerB: false,
    answerC: false,
    answerD: false
  })
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
    setActive(false)
  };

  const finishQuiz = () => {
    if(Questions[currentQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("end")
  }

  const setActiveA = (name) => {
    console.log(name)
    if(name === "answerA"){
     
      setActive({
        answerA: true,
        answerB: false,
        answerC: false,
        answerD: false,
        })
        setOptionChosen("A")
    }
    if(name === "answerB"){
     
      setActive({
        answerA: false,
        answerB: true,
        answerC: false,
        answerD: false,
        })
        setOptionChosen("B")
    }
    if(name === "answerC"){
     
      setActive({
        answerA: false,
        answerB: false,
        answerC: true,
        answerD: false,
        })
        setOptionChosen("C")
    }
    if(name === "answerD"){
     
      setActive({
        answerA: false,
        answerB: false,
        answerC: false,
        answerD: true,
        })
        setOptionChosen("D")
    }

   
  }

  return (
    <div className='quiz-container'>
    <div className="quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questionOptions">
        <button onClick={() => setActiveA("answerA")} name="answerA" className={active.answerA ? "active" : ""}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setActiveA("answerB")} name="answerB" className={active.answerB ? "active" : ""}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setActiveA("answerC")}  name="answerC" className={active.answerC ? "active" : ""}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setActiveA("answerD")}  name="answerD" className={active.answerD ? "active" : ""}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
 {/* if we are at the last question. if ccurentQuestion is = to the last question of the questions array*/}
 {currentQuestion === Questions.length - 1 ? (
  <button onClick={finishQuiz} className="finish-btn flatgreen">Finish</button>
) : (
  <button onClick={() => nextQuestion()} className="quiz-btn-hover color-1">Next Question</button>
)}
    
    </div>
     
    </div>
  );
};

export default Quiz;
