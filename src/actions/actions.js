var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

var addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text
	};
};

var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export {
	setSearchText,
	toggleShowCompleted,
	addTodo,
	addTodos,
	toggleTodo
}