import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import TodoApp from './components/TodoApp';

import {addTodo, setSearchText} from './actions/actions';
var store = require('./store/configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

store.dispatch(addTodo('clean the yard'));
store.dispatch(setSearchText('dog'));

$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
	<TodoApp />, 
	document.getElementById('app')
);