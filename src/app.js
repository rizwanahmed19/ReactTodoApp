import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
// import '../FirebasePlay';

import TodoAPI from './api/TodoAPI';
import {addTodo, startAddTodos, setSearchText} from './actions/actions';
import store from './store/configureStore';
import TodoApp from './components/TodoApp';
import LoginPage from './components/LoginPage';

// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log('New state', state);
// 	TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(addTodos(initialTodos));

store.dispatch(startAddTodos());

$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' >
				<IndexRoute component={LoginPage} />
				<Route path='todos' component={TodoApp} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);