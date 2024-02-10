import React from 'react'
import {useState} from 'react'
import {FaRegMessage} from 'react-icons/fa6'
import {IoCloseSharp} from 'react-icons/io5'
import styles from './ModalWindow.module.scss'

const ModalWindow = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className={styles['modal-window']}>
			<button className={styles['open-window-btn']} onClick={() => setOpen(true)}>
				Открыть
			</button>

			{open ? (
				<div className={styles['modal-window-content']}>
					<img
						src='https://static.eldorado.ru/promo/src/chto-takoe-memy/img/header.jpg'
						alt='non'
						className={styles['modal-window-img']}
					/>
					<p>Что-то полезное... или бесполезное)</p>
					<IoCloseSharp onClick={() => setOpen(false)} className={styles['close-icon']} />
				</div>
			) : null}
		</div>
	)
}

export default ModalWindow
