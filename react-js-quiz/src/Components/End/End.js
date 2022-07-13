import React, { useContext} from 'react'
import { QuizContext } from '../../Helpers/Context'
import './index.css'
import { Questions } from '../../Helpers/QuestionList'

const End = () => {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)


  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }



  return (
    <div className='endScreenContainer'>
    <div className='endScreen'><h1>Quiz Completed</h1>
    {console.log(score)}
    {score < 3 ? (
      <h3>Great Job </h3>
    ) : <h3>Not Bad. Try again?</h3>}
    <h3> <span className={score < 3 ? "bad" : 'good'}>{score}</span> / {Questions.length}</h3>
    <button onClick={() => restartQuiz()}>Restart</button>
    </div>
    </div>
  )
}

export default End