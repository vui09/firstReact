import React from 'react';
import './styles.scss'

const Button = (props) => {
	return (
		<button onClick={props.click} className={props.class}>
			{props.text}
		</button>
	);
};

export default Button;