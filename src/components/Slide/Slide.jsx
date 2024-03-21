import React from 'react'
import cn from 'classnames'
import classes from './Slide.module.scss'

const Slide = ({slide, isActive}) => {
	return (
		<div className={cn(classes.slide, isActive ? classes.active : '')}>
			<img src={slide} alt='img not found' />
		</div>
	)
}

export default Slide
