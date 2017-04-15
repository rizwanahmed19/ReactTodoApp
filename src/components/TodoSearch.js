import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from './../actions/actions';

export class TodoSearch extends Component {
	constructor(props){
		super(props);
		this.handleInput = this.handleInput.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
	}

	handleInput(){
		var searchText = this.refs.searchTodo.value;
		dispatch(setSearchText(searchText));
	}

	handleComplete(){
		dispatch(toggleShowCompleted());
	}
	render(){
		var {dispatch, searchText, showCompleted} = this.props;
		return (
			<div className='container__header'>
				<div>
					<input type='search' ref='searchTodo' placeholder='Search todos' 
						value={searchText} onChange={this.handleInput} 
					/>
				</div>
				<div>
					<label>
						<input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={this.handleComplete} />
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export const mapStateToProps = (state) => {
	return {	
			searchText: state.searchText,
			showCompleted: state.showCompleted
	}
}

export default connect(mapStateToProps)(TodoSearch);