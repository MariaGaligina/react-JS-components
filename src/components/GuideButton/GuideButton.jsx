import React from 'react'
import cn from 'classnames'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa6'
import classes from './GuideButton.module.scss'

const GuideButton = ({disable, direction, onClick}) => {
	return (
		<button
			className={cn(
				classes.button,
				direction ? classes.direction : '',
				disable ? classes.disable : ''
			)}
			onClick={onClick}>
			{direction === 'next' ? <FaChevronRight /> : <FaChevronLeft />}
		</button>
	)
}

export default GuideButton
