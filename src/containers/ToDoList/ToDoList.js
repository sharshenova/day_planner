import React, { Component } from 'react';
import Task from "../../components/Task/Task";

class ToDoList extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.tasks = [
			{date: 1, name: 'To do HW', isMain: true},
			{date: 1, name: 'To call sister', isMain: false},
			{date: 1, name: 'To walk with the dog', isMain: true},
			{date: 2, name: 'To read the book', isMain: false},
			{date: 2, name: 'To walk with the cat', isMain: true},
			{date: 2, name: 'To meet Dan', isMain: true},
		];
	}

	

	render() {
		return (
			<div className="Task">
				{this.state.tasks.map(task => 
					<Task
						name={task.name}
						key={task.name}
					/>
				)}
			</div>
		)
	}
}


export default ToDoList;