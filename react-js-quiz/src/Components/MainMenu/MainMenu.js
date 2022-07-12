import React, { useContext} from 'react'
import { QuizContext } from '../../Helpers/Context'
const MainMenu = () => {
  //destructure what we passed into the provider
  const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className='menu'>
    <button onClick={() => setGameState('quiz')}>Start</button>
    </div>
  )
}

export default MainMenu