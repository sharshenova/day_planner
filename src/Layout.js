import React, {Component, Fragment} from 'react';
import {NavLink} from "react-router-dom";
import './Layout.css';


class Layout extends Component {
	render () {
		return <div className="App">
			<header className="mb-5">
				<span className='mr-5'><NavLink to='/'>Home</NavLink></span>
				<span className='mr-5'><NavLink to='/toread'>What to read</NavLink></span>
				<span><NavLink to='/towatch'>What to watch</NavLink></span>
			</header>
			{this.props.children}
		</div>
	}
}

export default Layout;