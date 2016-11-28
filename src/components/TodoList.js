import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoAPI from './../api/TodoAPI';
import Todo from './Todo';

class TodoList extends Component {
    render() {
    	var {todos, searchText, showCompleted} = this.props;
    	var renderTodos = () => {
            console.log('in render')
            if(todos.length === 0){
                return (
                    <p className='container__message'>Nothing To Do</p>
                );
            }
    		return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
    			return (
    				<Todo key={todo.id} {...todo} />
    			)
    		});
    	}
        return ( 
        	<div>
        		{renderTodos()}
          </div>
      	);
    }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
