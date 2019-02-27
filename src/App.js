import React, { Component } from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage'
import ReadList from './containers/ReadList/ReadList'
import WatchList from './containers/WatchList/WatchList'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className={'App'}>
					<BrowserRouter>
							<Switch>
									<Route path="/" exact component={MainPage}/>
									<Route path="/toread" exact component={ReadList}/>
									<Route path="/towatch" exact component={WatchList}/>
							</Switch>
					</BrowserRouter>
			</div>
		);
	}
}

export default App;
