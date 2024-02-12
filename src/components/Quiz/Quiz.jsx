import React from 'react'
import {useState} from 'react'
import classes from './Quiz.module.scss'
import Questions from '../Questions/Questions'
import Result from '../Result/Result'
import questionsList from './questionsList.js'

const Quiz = () => {
	const [step, setStep] = useState(0)
	const [countCorrectAnswers, setcountCorrectAnswers] = useState(0)
	const question = questionsList[step]
	const countOfQuestions = questionsList.length

	const onClickAnswer = (index) => {
		console.log(step, index)
		setStep(() => step + 1)
		if (index === question.correct) {
			setcountCorrectAnswers(() => countCorrectAnswers + 1)
		}
	}

	return (
		<div className={classes.quiz}>
			{step === countOfQuestions ? (
				<Result
					countCorrectAnswers={countCorrectAnswers}
					countOfQuestions={countOfQuestions}></Result>
			) : (
				<Questions
					step={step}
					question={question}
					countOfQuestions={countOfQuestions}
					onClickAnswer={onClickAnswer}></Questions>
			)}

			{/*<Result></Result>*/}
		</div>
	)
}

export default Quiz
