import React, {useState} from 'react';
import './style.scss'
import Button from "../Button/Button";
import TodoList from "../TodoList/TodoList";

const Counter = () => {
	// let count = 0
	const [count, setCount] = useState(0)

	const minusOne = () => {
		setCount(count - 1)
	}
	const plusOne = () => {
		setCount(count + 1)
		// count = count + 10
	}
	const clear = () => {
		setCount(0)
	}
	return (
		<div className="counter">
			{/*<button onClick={minusOne} className="btn">*/}
			{/*	–*/}
			{/*</button>*/}
			<Button
				text={'-'}
				click={minusOne}
				class={'btn'}
			/>
			<div className="counterValue">{count}</div>
			{/*<button onClick={plusOne} className="btn">*/}
			{/*	+*/}
			{/*</button>*/}
			<Button
				text={'+'}
				click={plusOne}
				class={'btn'}
			/>
			<button onClick={clear} className="btnClear">
				Очистить
			</button>
		</div>
	);
};

export default Counter;