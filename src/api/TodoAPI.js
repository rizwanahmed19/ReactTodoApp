import $ from 'jquery';

module.exports = {
	filterTodos: function(todos, showCompleted, searchText){
		var filteredTodos = todos;

		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted; // todo is not completed or showCompleted is toggled
		});

		filteredTodos = filteredTodos.filter((todo) => {
			return todo.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
		});

		filteredTodos.sort((a, b) => {
			if(!a.completed && b.completed){
				return -1;
			} else if(a.completed && !b.completed){
				return 1;
			} else {
				return 0;
			}
		});
		return filteredTodos;
	}
};