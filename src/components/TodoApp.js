import React, {Component} from 'react';
import uuid from 'uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	showCompleted: false,
        	searchText: '',
        	todos: TodoAPI.getTodos()
        };
    }
    componentDidUpdate(){
    	TodoAPI.setTodos(this.state.todos);
    }
    handleAddTodo(todoText){
    	this.setState({
    		todos: [
    			...this.state.todos,
    			{
    				id: uuid(),
    				text: todoText,
        		completed: false
    			}
    		]
    	});

    }
    handleSearch(showCompleted, searchText){
    	this.setState({
    		showCompleted: showCompleted,
    		searchText: searchText
    	});
    }
    handleToggleTodo(id){
    	var updatedTodos = this.state.todos.map((todo) => {
    		if(todo.id === id){
    			todo.completed = !todo.completed;
    		}

    		return todo;
    	});

    	this.setState({
    		todos: updatedTodos
    	});
    }
    render() {
    	var {todos, showCompleted, searchText} = this.state;
    	var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
        	<div>
        		<TodoSearch onSearch={this.handleSearch.bind(this)} />
        		<TodoList todos={filteredTodos} onToggle={this.handleToggleTodo.bind(this)} />
        		<AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
        	</div>
        );
    }
}

export default TodoApp;
