import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	todos: [
        		{
        			id: 1,
        			text: 'Walk the dog'
        		}, {
        			id: 2,
        			text: 'Clean the yard'
        		}, {
        			id: 3,
        			text: 'Complete this course'
        		}, {
        			id: 4,
        			text: 'Have tea'
        		}
        	]
        };
    }
    handleAddTodo(todoText){
    	var todo = {
    		id: Math.floor(Math.random() * 100),
    		text: todoText
    	};
    	var todos = this.state.todos.concat([todo]);
    	this.setState({
    		todos: todos
    	});

    }
    render() {
    	var {todos} = this.state;
        return (
        	<div>
        		<TodoList todos={todos} />
        		<AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
        	</div>
        );
    }
}

export default TodoApp;
