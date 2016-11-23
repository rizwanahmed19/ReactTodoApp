import React from 'react';
import {Provider} from 'react-redux';
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
	<Provider store={store}>
		<TodoApp /> 
	</Provider>,
	document.getElementById('app')
);