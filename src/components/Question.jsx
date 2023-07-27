import React from 'react'
import './Question.css'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="question">
        Question
    </div>
  )
}

export default Question