import React, {useState} from 'react';
import './style.scss'
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const TodoList = () => {

	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const [modal, setModal] = useState(false)
	const [list, setList] = useState([
		{
			text: 'test',
			id: Math.random().toString(36).substr(2, 9)
		},
		{
			text: 'test2',
			id: Math.random().toString(36).substr(2, 9)
		}
	])

	const addItem = () => {
		if(value.length > 0){
			setList([...list, {
				text: value,
				id: Math.random().toString(36).substr(2, 9)
			}])
			setValue('')
			setModal(false)
		} else {
			setError(true)
		}
	}

	const removeItem = (id) => {
		setList(list.filter(item => item.id !== id))
	}

	return (
		<div className="todolist">
			{modal
				? <Modal
				addItem={addItem}
				setError={setError}
				setValue={setValue}
				error={error}
				setModal={setModal}
				value={value}
			/>
			: null
			}

			<Button
				click={() => setModal(true)}
				text={'Добавить дело'}
				class={'btnAdd'}
			/>
			<h1>Список дел</h1>

			{list.length > 0
				? <ul className="list">
					{list.map((item) => {
						return <li id={item.id} key={item.id} onClick={() => removeItem(item.id)}>{item.text}</li>
					})}
				</ul>
				: <p>Список пуст</p>
			}
		</div>
	);
};

export default TodoList;

