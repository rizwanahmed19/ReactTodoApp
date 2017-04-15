import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {startToggleTodo} from './../actions/actions';

export class Todo extends Component {
		constructor(props){
			super(props);

			this.handleToggle = this.handleToggle.bind(this);
		}
		handleToggle(){
			const {id, completed} = this.props;
			this.props.toggleTodo(id, completed);
		}
    render() {
    	var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
      var todoClassName = completed ? 'todo todo-completed' : 'todo';
    	var renderDate = () => {
    		var message = 'Created ';
    		var timeStamp = createdAt;

    		if(completed){
    			message = 'Completed ';
    			timeStamp = completedAt;
    		}

    		return message + moment.unix(timeStamp).format('MMM Do, YYYY [at] h:mm a');	
    	};
      return(
      	<div className={todoClassName} onClick={this.handleToggle}>
          <div>
        		<input type='checkbox' checked={completed} onChange={() => {} } />
          </div>
      		<div>
            <p>{text}</p>
            <p className='todo__subtext'>{renderDate()}</p>
          </div>
      	</div>
      );
    }
}
export function mapDispatchToProps(dispatch) {
	return {
		toggleTodo: (id, completed) => {
			dispatch(startToggleTodo(id, !completed));
		}
	}
}

export default connect(null, mapDispatchToProps)(Todo);
