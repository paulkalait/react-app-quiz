import React, { useContext} from 'react'
import { QuizContext } from '../../Helpers/Context'
import './index.css'
const MainMenu = () => {
  //destructure what we passed into the provider
  const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className='menu-container'>
   
    <div className='menu'>
    <button onClick={() => setGameState('quiz')} className='btn-hover color-1'>Start</button>
    </div>
    </div>
  )
}

export default MainMenu