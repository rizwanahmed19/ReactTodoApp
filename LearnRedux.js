import redux from 'redux';


var defaultState = {
	searchText: '',
	showCompleted: false,
	todos: []
}
var reducer = (state = defaultState, action) => {
	switch(action.type){
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default: 
			return state;
	}
}

var store = redux.createStore(reducer);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Hello there'
});

console.log('new search text', store.getState())