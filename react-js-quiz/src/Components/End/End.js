import React, { useContext} from 'react'
import { QuizContext } from '../../Helpers/Context'
import './index.css'
import { Questions } from '../../Helpers/QuestionList'

const End = () => {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)


  let scoreHalf = Math.ceil(Questions.length / 2 )
  console.log(scoreHalf)
  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }



  return (
    <div className='endScreenContainer'>
    <div className='endScreen'><h1>Quiz Completed</h1>
    {console.log(score)}
    {score > scoreHalf ? (
      <h3>Awesome Job! </h3>
    ) : <h3>Try again?</h3>}
    <h3> <span className={score < scoreHalf ? "bad" : 'good'}>{score}</span> / {Questions.length} correct</h3>
    <button onClick={() => restartQuiz()}>Restart</button>
    </div>
    </div>
  )
}

export default End