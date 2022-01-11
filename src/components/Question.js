import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz';
import { Answer } from './Answer'

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <>
      <div className='question'>{currentQuestion.question}</div>
      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            answerText={answer}
            correctAnswer={currentQuestion.correctAnswer}
            currentAnswer={quizState.currentAnswer}
            onSelectAnswer={answerText => dispatch({ type: 'SELECT_ANSWER', payload: answerText })}
          />
        ))}
      </div>
    </>
  )
}
