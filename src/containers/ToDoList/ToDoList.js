import React, { Component } from 'react';
import Task from "../../components/Task/Task";
//import AddTaskForm from "../../components/AddTaskForm/AddTaskForm"

class ToDoList extends Component {

	constructor (props) {
		super(props);
		this.state = {};
		this.state.tasks = [];
	}


	componentDidMount() {
		// получаем сохраненные элементы из localStorage
		const savedTasks = localStorage.getItem("savedTasks");
		if (savedTasks) {
			console.log(savedTasks);
			const tasks = JSON.parse(savedTasks);
			this.setState({tasks: tasks});
		};
	};

	// // обновление элемента
	// updateTask = (event, id) => {
	// 	const tasks = [...this.state.tasks];

	// 	tasks.forEach(task => {
	// 		if (task.id === id) {
	// 			task.text = event.target.value;
	// 			console.log("обновлено")
	// 		}
	// 	});

	// 	this.setState({tasks: tasks});
	// 	// сохраняем элементы в localStorage
	// 	localStorage.setItem('savedTasks', JSON.stringify(tasks));
	// };

	// // удаление элемента
	// deleteTask = (id) => {
	// 	let taskId = this.state.tasks.findIndex(task => {
	// 			return task.id === id;
	// 	});

	// 	const tasks = [...this.state.tasks];
	// 	tasks.splice(taskId, 1);

	// 	this.setState({
	// 			...this.state,
	// 			tasks
	// 	});
	// 	// сохраняем элементы в localStorage
	// 	localStorage.setItem('savedTasks', JSON.stringify(tasks));		
	// };
								// delete={this.deleteTask}
								// change={this.updateTask}


	render() {
		return (
			<div className="App">
					{this.state.tasks.map(task => {
						return <Task 
							key={task.id} 
							id={task.id}
							text={task.text}
						/>
					})}
			</div>
		)
	}
};


export default ToDoList;