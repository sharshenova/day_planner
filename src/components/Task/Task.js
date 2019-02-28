import React from 'react';

function Task (props) {

	return (
		<div className='Task'>
			<li>{props.name}</li>
		</div>
	)
}

export default Task;