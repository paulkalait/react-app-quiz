import React, {useState, useContext} from 'react'
import MainMenu from '../../Components/MainMenu/MainMenu.js'
import Quiz from '../../Components/Quiz/Quiz'
import End from '../../Components/End/End'
import Header from '../../Components/Header/Header'
import { QuizContext } from '../../Helpers/Context.js'

const Home = () => {

    const [gameState, setGameState] = useState('menu')
    const [score, setScore] = useState(0)

  return (
    <div>
   <Header />
    {/* we can pass an object , the three components now have access to the gamestate *Global state*/}
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
    {gameState === "menu" && <MainMenu />}
    {gameState === "quiz" && <Quiz />}
    {gameState === "end" && <End />}
    </QuizContext.Provider>
    </div>


  )
}

export default Home