import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import firebase from '../firebase/index';
import LoginPage from '../components/LoginPage';
import TodoApp from '../components/TodoApp';

var requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser){
		replace('/');
	}
	next();
}	

var redirectIfLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser){
		replace('/todos');
	}
	next();
}


export default (
	<Router history={hashHistory}>
		<Route path='/' >
			<IndexRoute component={LoginPage} onEnter={redirectIfLoggedIn} />
			<Route path='todos' component={TodoApp} onEnter={requireLogin} />
		</Route>
	</Router>
);