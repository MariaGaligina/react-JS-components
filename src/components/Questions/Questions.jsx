import React from 'react'
import classes from './Questions.module.scss'

const Questions = ({step, question, countOfQuestions, onClickAnswer}) => {
	const progress = Math.round((step / countOfQuestions) * 100)
	return (
		<div className={classes.question}>
			<div className={classes['progress-bar']}>
				<div style={{width: `${progress}%`}} className={classes.progress}></div>
			</div>
			<h2>{question.title}</h2>
			<ul>
				{question.various.map((answer, index) => (
					<li onClick={() => onClickAnswer(index)} key={answer}>
						{answer}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Questions
