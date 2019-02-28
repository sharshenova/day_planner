import React, { Component } from 'react';
import './AddTaskForm.css';

class AddTaskForm extends Component {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className='TaskContainer col-3'>
				<div className="form-group mt-3 mb-3">
					<label htmlFor="taskInput">Add task to ToDoList</label>
					<input type="text" className="form-control" id="taskInput" placeholder="Task name" onChange={this.props.functionOnChange} value={this.props.text}/>
				</div>
				<button type="submit" className="btn btn-primary mb-3" onClick={this.props.functionOnClick}>Add task</button>
			</div>
		);
	}
}

export default AddTaskForm;