import React, {Component} from 'react';

class AddTodo extends Component {
	addTodo(e){
		e.preventDefault();
		var text = this.refs.todo.value;

		if(text.length > 0){
			this.refs.todo.value = '';
			this.props.onAddTodo(text);
		} else {
			this.refs.todo.focus();
		}
	}
	render(){
		return(
			<div className='container__footer'>
					<form onSubmit={this.addTodo.bind(this)}>
						<input type='search' placeholder='What do you need to do?' ref='todo' />
						<button type='submit' className='button primary expanded'>Add</button>
					</form>
				</div>
		)
	}
}

export default AddTodo;