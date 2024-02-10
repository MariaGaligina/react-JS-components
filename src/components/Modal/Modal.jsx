import React from 'react'
import {useState} from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import classes from './Modal.module.scss'

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={classes['modal-block']}>
			<button className={classes['open-window-btn']} onClick={() => setIsOpen(true)}>
				Открыть
			</button>

			<div className={`${classes['modal']} ${isOpen ? classes['open'] : ''}`}>
				<IoCloseSharp onClick={() => setIsOpen(false)} className={classes['close-icon']} />
				<img
					src='https://cdni-vm.servicecdn.ru/2020.03/original/1200_5e62aae682682c64e0e987b8.jpg'
					alt='img not found'></img>
				<p>Что-то про сонного котика</p>
			</div>
		</div>
	)
}

export default Modal
