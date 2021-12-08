import React from 'react';
import './style.scss'

// const Header = (props) => {
const Header = ({ date, setDate }) => {
// const Header = (props) => {
	// console.log('===>props', props);
	// console.log('===>date', date);
	// const { date } = props
	return(
		<div className="header">
			Header
			<br />
			{/*<div onClick={() => setDate(date + 1)}>{date}</div>*/}
		</div>
	)
}

export default Header;