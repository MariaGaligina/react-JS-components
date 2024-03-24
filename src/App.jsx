import classes from './App.module.scss'
import Quiz from './components/Quiz/Quiz'
import Slider from './components/Slider/Slider'

function App() {
	return (
		<>
			<div className={classes.App}>
				<Slider></Slider>
			</div>
		</>
	)
}

export default App
