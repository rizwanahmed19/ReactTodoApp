import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/TodoApp';
import TodoAPI from './api/TodoAPI';

import {addTodo, addTodos, setSearchText} from './actions/actions';
var store = require('./store/configureStore').configure();

store.subscribe(() => {
	var state = store.getState();
	console.log('New state', state);
	TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
	<Provider store={store}>
		<TodoApp /> 
	</Provider>,
	document.getElementById('app')
);