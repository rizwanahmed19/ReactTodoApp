import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import uuid from 'uuid';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	showCompleted: false,
        	searchText: '',
        	todos: [
        		{
        			id: uuid(),
        			text: 'Walk the dog',
        			completed: false
        		}, {
        			id: uuid(),
        			text: 'Clean the yard',
        			completed: true
        		}, {
        			id: uuid(),
        			text: 'Complete this course',
        			completed: true
        		}, {
        			id: uuid(),
        			text: 'Have tea',
        			completed: false
        		}
        	]
        };
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
    	var {todos} = this.state;
        return (
        	<div>
        		<TodoSearch onSearch={this.handleSearch.bind(this)} />
        		<TodoList todos={todos} onToggle={this.handleToggleTodo.bind(this)} />
        		<AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
        	</div>
        );
    }
}

export default TodoApp;
