import React, {Component} from 'react';

class TodoSearch extends Component {
	handleSearch(){
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchTodo.value;

		this.props.onSearch(showCompleted, searchText);
	}
	render(){
		return (
			<div className='container__header'>
				<div>
					<input type='search' ref='searchTodo' placeholder='Search todos' onChange={this.handleSearch.bind(this)} />
				</div>
				<div>
					<label>
						<input type='checkbox' ref='showCompleted' onChange={this.handleSearch.bind(this)} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default TodoSearch;