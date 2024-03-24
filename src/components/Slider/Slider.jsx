import React, {useState} from 'react'
import classes from './Slider.module.scss'
import GuideButton from '../GuideButton/GuideButton'
import Slide from '../Slide/Slide.jsx'
import slides from './slides.js'

const Slider = () => {
	const [activeSlide, setActiveSlide] = useState(~~(slides.length / 2))
	console.log('active', activeSlide)

	const clickPevious = () => {
		activeSlide ? setActiveSlide(activeSlide - 1) : setActiveSlide(activeSlide)
		console.log('clickprev', activeSlide)
	}

	const clickNext = () => {
		!(activeSlide === slides.length - 1)
			? setActiveSlide(activeSlide + 1)
			: setActiveSlide(activeSlide)
		console.log('clicknext', activeSlide)
	}

	const onKeyDown = (event) => {
		console.log('key', event.key)
		event.preventDefault()
		switch (event.key) {
			case 'ArrowLeft':
				clickPevious()
				return
			case 'ArrowRight':
				clickNext()
				return
			default:
				return
		}
	}

	return (
		<div className={classes.slider}>
			<h1 className={classes['title-text']}>Title title</h1>
			<div className={classes.slides}>
				{slides.map((slide, index) => (
					<Slide slide={slide} isActive={index === activeSlide} key={index}></Slide>
				))}
			</div>

			<div className={classes.movements}>
				<GuideButton
					disable={activeSlide === 0}
					direction={'previous'}
					onKeyDown={onKeyDown}
					onMouseDown={clickPevious}
				/>
				<GuideButton
					disable={activeSlide === slides.length - 1}
					direction={'next'}
					onKeyDown={onKeyDown}
					onMouseDown={clickNext}
				/>
			</div>
		</div>
	)
}

export default Slider
