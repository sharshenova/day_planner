import React, {Component, Fragment} from 'react';
import Info from '../../components/Info/Info';
import ToDoList from "../ToDoList/ToDoList";



class MainPage extends Component {


	render() {
		return (
			<Fragment>
				<Info/>
				<ToDoList/>
			</Fragment>
		)
	}
}

export default MainPage;
