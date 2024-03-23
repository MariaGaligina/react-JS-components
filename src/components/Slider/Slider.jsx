import React, {useState} from 'react'
import classes from './Slider.module.scss'
import GuideButton from '../GuideButton/GuideButton'
import Slide from '../Slide/Slide.jsx'
import slides from './slides.js'

const Slider = () => {
	const [activeSlide, setActiveSlide] = useState(~~(slides.length / 2))
	console.log('active', activeSlide)

	const clickPevious = () => {
		console.log('cl', activeSlide)
		activeSlide ? setActiveSlide(activeSlide - 1) : setActiveSlide(activeSlide)
	}

	const clickNext = () => {
		!(activeSlide === slides.length - 1)
			? setActiveSlide(activeSlide + 1)
			: setActiveSlide(activeSlide)
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
				<GuideButton disable={activeSlide === 0} direction={'previous'} onClick={clickPevious} />
				<GuideButton
					disable={activeSlide === slides.length - 1}
					direction={'next'}
					onClick={clickNext}
				/>
			</div>
		</div>
	)
}

export default Slider
