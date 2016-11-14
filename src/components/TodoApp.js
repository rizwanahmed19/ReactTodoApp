import React, {Component} from 'react';
import uuid from 'uuid';
import moment from 'moment';

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
        		completed: false,
        		createdAt: moment().unix(),
        		completedAt: undefined
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
    			todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        		<h1 className='page-title'>Todo App</h1>
        		<div className='row'>
        			<div className='column small-centered small-11 medium-6 large-5'>
        				<div className='container'>
        					<TodoSearch onSearch={this.handleSearch.bind(this)} />
			        		<TodoList todos={filteredTodos} onToggle={this.handleToggleTodo.bind(this)} />
			        		<AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}

export default TodoApp;
