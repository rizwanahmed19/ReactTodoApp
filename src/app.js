import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import TodoAPI from './api/TodoAPI';

// import '../FirebasePlay';

import {addTodo, startAddTodos, setSearchText} from './actions/actions';
import store from './store/configureStore';

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
		<TodoApp /> 
	</Provider>,
	document.getElementById('app')
);