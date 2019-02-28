import React, { Component } from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage';
import ReadList from './containers/ReadList/ReadList';
import WatchList from './containers/WatchList/WatchList';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

class App extends Component {
	render() {
		return (
			<div className='App'>
					<BrowserRouter>
						<Layout>
							<Switch>
									<Route path="/toread" exact component={ReadList}/>
									<Route path="/towatch" exact component={WatchList}/>
									<Route path="/" exact component={MainPage}/>								
							</Switch>
						</Layout>
					</BrowserRouter>
			</div>
		);
	};
};

console.log('rrr')

export default App;
