import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from './../actions/actions';

class TodoSearch extends Component {
	render(){
		var {dispatch, searchText, showCompleted} = this.props;
		return (
			<div className='container__header'>
				<div>
					<input type='search' ref='searchTodo' placeholder='Search todos' value={searchText} onChange={() => {
						var searchText = this.refs.searchTodo.value;
						dispatch(setSearchText(searchText));
					}} />
				</div>
				<div>
					<label>
						<input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={() => {
							dispatch(toggleShowCompleted());
						}} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			searchText: state.searchText,
			showCompleted: state.showCompleted
		};
	}
)(TodoSearch);