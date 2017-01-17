import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {
	searchTextReducer, 
	showCompletedReducer, 
	addTodoReducer, 
	fetchingReducer,
	authReducer
} from './../reducers/reducers';

	var reducer = combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: addTodoReducer,
		auth: authReducer,
		isFetching: fetchingReducer
	});

	var store = createStore(reducer, compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	));

	export default store;
