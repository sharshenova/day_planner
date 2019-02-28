import React, {Component, Fragment} from 'react';
import Info from '../../components/Info/Info';
//import ToDoList from "../ToDoList/ToDoList";
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';


class MainPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.tasks = [];
		this.state.currentTask = {text: ''}
		this.addTask = this.addTask.bind(this);
	}


	addTaskToCurrent = (event) => {
		this.setState({currentTask: {text: event.target.value}});
		console.log('addTaskToCurrent')
		console.log(this.state.currentTask)
	};

	addTask = () => {
		const newTask = this.state.currentTask;
		let tasks;

		const savedTasks = localStorage.getItem("savedTasks");
		if (savedTasks) {
			console.log(savedTasks, 'сохраняем local storage');
			tasks = JSON.parse(savedTasks);

		} else {
			tasks = [...this.state.tasks];
		};

		var now = new Date();
		var new_id = now.getTime();

		tasks.push({id: new_id, text: newTask.text});

		this.setState({tasks});
		this.setState({currentTask: {text: ''}});

		// сохраняем элементы в localStorage
		localStorage.setItem('savedTasks', JSON.stringify(tasks));
		console.log(this.state.tasks);
	};


	render() {
		return (
			<Fragment>
				<Info/>
				<AddTaskForm
					functionOnChange={this.addTaskToCurrent}
					functionOnClick={this.addTask}
					text={this.state.currentTask.text}
					tasks={this.state.tasks}
				/>
			</Fragment>
		)
	}
}

export default MainPage;
