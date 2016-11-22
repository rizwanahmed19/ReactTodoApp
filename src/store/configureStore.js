import {combineReducers, createStore, compose} from 'redux';

import {searchTextReducer, showCompletedReducer, addTodoReducer} from './../reducers/reducers';

export var configure = () => {
	var reducer = combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: addTodoReducer
	});

	var store = createStore(reducer, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}