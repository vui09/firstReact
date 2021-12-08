import React, {useState} from 'react';
import Button from "../Button/Button";
import './style.scss'

const Modal = (props) => {

	const closeModal = () => props.setModal(false);
	
	console.log('===>props', props);

	return (
		<div className="modal">
			<div className="modal-content">
				<h2>Добавить дело</h2>
				<div
					className="close"
					onClick={closeModal}
				>
				</div>
				<input
					type="text"
					placeholder="Что нужно сделать"
					value={props.value}
					onChange={(e) => {
						props.setError(false)
						props.setValue(e.target.value)
					}
					}
					className={props.error ? 'borderRed' : ''}
				/>

				<Button
					click={props.addItem}
					text={'Добавить'}
					class={'btnAdd'}
				/>
			</div>
		</div>
	);
};

export default Modal;