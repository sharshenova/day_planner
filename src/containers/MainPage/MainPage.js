import React, {Component, Fragment} from 'react';
import Info from '../../components/Info/Info';
import ToDoList from "../../components/ToDoList/ToDoList";



class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.tasks = [
			{name: 'To do HW', number: 1, isMain: true},
			{name: 'To call sister', number: 2, isMain: false},
			{name: 'To read the book', number: 3, isMain: false},
			{name: 'To walk with the dog', number: 4, isMain: true}
		];
	}

	render() {
		return (
			<Fragment>
				<h1>Hello,[Username]</h1>
				<Info/>
				<ToDoList
					tasks={this.state.tasks}
				/>
			</Fragment>
		)
	}
}

export default MainPage;
