import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, addTodoReducer, fetchingReducer} from './../reducers/reducers';

	var reducer = combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: addTodoReducer,
		isFetching: fetchingReducer
	});

	var store = createStore(reducer, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	export default store;
