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
        			text: 'Walk the dog'
        		}, {
        			id: uuid(),
        			text: 'Clean the yard'
        		}, {
        			id: uuid(),
        			text: 'Complete this course'
        		}, {
        			id: uuid(),
        			text: 'Have tea'
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
    				text: todoText
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
    render() {
    	var {todos} = this.state;
        return (
        	<div>
        		<TodoSearch onSearch={this.handleSearch.bind(this)} />
        		<TodoList todos={todos} />
        		<AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
        	</div>
        );
    }
}

export default TodoApp;
