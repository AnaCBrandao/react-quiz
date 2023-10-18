import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Quiz from '../img/jotaro.png'

import './Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja Bem-vindo!</h2>
        <p>Clique no botão abaixo para começar:</p>
        <img src={Quiz} alt="Inicio do quiz"></img>
        <p><button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button></p>
    </div>
  )
}

export default Welcome