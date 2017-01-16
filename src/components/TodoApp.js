import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import {startLogout} from '../actions/actions';

class TodoApp extends Component {
    handleLogout(e){
      e.preventDefault();

      this.props.startLogout();
    }
    render() {
        return (
        	<div>
            <div className='page-actions'>
              <a href='#' onClick={this.handleLogout.bind(this)}>Logout</a>
            </div>
        		<h1 className='page-title'>Todo App</h1>
        		<div className='row'>
        			<div className='column small-centered small-11 medium-6 large-5'>
        				<div className='container'>
        					<TodoSearch />
			        		<TodoList />
			        		<AddTodo />
        				</div>
        			</div>
        		</div>
        	</div>
        );
    }
}

export default connect(null, {startLogout})(TodoApp);
