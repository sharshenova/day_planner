import React from 'react';
import Task from "./Task/Task";


function ToDoList (props) {
	return (
		<div className="Task">
			{props.tasks.map(task => 
				<Task
					name={task.name}
					key={task.number}
					number={task.number}
				/>
			)}
		</div>
	);
};


export default ToDoList;