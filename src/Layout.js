import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";


class Layout extends Component {
	render () {
		return <div className="App">
			<div><NavLink to='/'>Home</NavLink></div>
			<div><NavLink to='/toread'>What to read</NavLink></div>
			<div><NavLink to='/towatch'>What to watch</NavLink></div>
			{this.props.children}
		</div>
	}
}

export default Layout;