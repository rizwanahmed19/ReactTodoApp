import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from './../actions/actions';

export class AddTodo extends Component {
	constructor(props){
		super(props);
		this.addTodo = this.addTodo.bind(this);
	}
	addTodo(e){
		e.preventDefault();
		var {dispatch} = this.props;
		var text = this.refs.todo.value;

		if(text.length > 0){
			this.refs.todo.value = '';
			// this.props.onAddTodo(text);
			dispatch(startAddTodo(text));
		} else {
			this.refs.todo.focus();
		}
	}
	render(){
		return(
			<div className='container__footer'>
					<form onSubmit={this.addTodo}>
						<input type='search' placeholder='What do you need to do?' ref='todo' />
						<button type='submit' className='button primary expanded'>Add</button>
					</form>
				</div>
		)
	}
}

export default connect()(AddTodo);