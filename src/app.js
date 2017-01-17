import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
// import '../FirebasePlay';

import firebase from './firebase/index';
import store from './store/configureStore';
import router from './router/index';
import {startAddTodos} from './actions/actions';

// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log('New state', state);
// 	TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(addTodos(initialTodos));

firebase.auth().onAuthStateChanged(user => {
	if(user){
		store.dispatch(startAddTodos());
		hashHistory.push('/todos');
	} else {
		hashHistory.push('/');
	}

});

$(document).foundation();

import 'style!css!sass!./styles/app.scss';

ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);