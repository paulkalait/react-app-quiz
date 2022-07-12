import React, {useState} from 'react'
import MainMenu from '../../Components/MainMenu/MainMenu.js'
import Quiz from '../../Components/Quiz/Quiz'
import End from '../../Components/End/End'

const Home = () => {

    const [gameState, setGameState] = useState('menu')

  return (
    <div>Home
    {gameState === "menu" && <MainMenu />}
    {gameState === "quiz" && <Quiz />}
    {gameState === "end" && <End />}
    </div>


  )
}

export default Home