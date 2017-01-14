import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {startToggleTodo} from './../actions/actions';

class Todo extends Component {
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
      	<div className={todoClassName} onClick={() => {
      		// this.props.onToggle(id);
          dispatch(startToggleTodo(id, !completed));
      	}}>
          <div>
        		<input type='checkbox' checked={completed} />
          </div>
      		<div>
            <p>{text}</p>
            <p className='todo__subtext'>{renderDate()}</p>
          </div>
      	</div>
      );
    }
}

export default connect()(Todo);
