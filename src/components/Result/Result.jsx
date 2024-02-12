import React from 'react'
import classes from './Result.module.scss'

const Result = ({countCorrectAnswers, countOfQuestions}) => {
	return (
		<div className={classes.result}>
			<img
				src='https://img.icons8.com/external-bearicons-outline-color-bearicons/64/external-Done-reminder-and-to-do-bearicons-outline-color-bearicons.png'
				alt='img not found'
			/>

			<p>
				Ваш результат {countCorrectAnswers} из {countOfQuestions}
			</p>
			<a href='/a'>
				<button>Новый раунд</button>
			</a>
		</div>
	)
}

export default Result
