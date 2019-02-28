import React, {Component, Fragment} from 'react';
import Info from '../../components/Info/Info';
import ToDoList from "../../components/ToDoList/ToDoList";



class MainPage extends Component {
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
