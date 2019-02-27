import React from 'react';

function Task (props) {

	return (
		<div className='Task'>
			<p>{props.number}. {props.name}</p>
		</div>
	)
}

export default Task;