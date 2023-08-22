import React from 'react'
import './GameOver.css'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import WellDone from '../img/welldone.svg'


const GameOver = () => {

  return (
    <div id="gameover">
       <h2>Fim de Jogo!</h2>
       <p>Pontuação: x</p>
       <p>Você acertou y de z questões</p>
       <img src={WellDone} alt="Fim do quiz" />
       <button>Reiniciar</button>
    </div>
  )
}

export default GameOver