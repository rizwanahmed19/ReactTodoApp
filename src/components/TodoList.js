import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PulseLoader} from 'halogen';
import TodoAPI from './../api/TodoAPI';
import Todo from './Todo';


class TodoList extends Component {
    render() {
    	var {todos, searchText, showCompleted, isFetching} = this.props;
    	var renderTodos = () => {
    				if(isFetching){
    					 return (
                    <div className='container__message'>
                   		<PulseLoader color="#bbb" size="6px" margin="1.5px" />
                    </div>
                );
    				}
    				if(todos.length === 0){
    					return <p className='container__message'>Nothing to show</p>
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
