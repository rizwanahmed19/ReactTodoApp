import React, {Component} from 'react';
import moment from 'moment';

class Todo extends Component {
    render() {
    	var {id, text, completed, createdAt, completedAt} = this.props;
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
      	<div onClick={() => {
      		this.props.onToggle(id);
      	}}>
      		<input type='checkbox' checked={completed} />
      		{text}
      		<p>{renderDate()}</p>
      	</div>
      );
    }
}

export default Todo;
