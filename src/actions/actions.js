import firebase, {firebaseRef, githubProvider} from '../firebase/index';
import moment from 'moment';

var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

var startAddTodo = text => {
	return (dispatch, getState) => {
		const todo = {
			text: text,
  		completed: false,
  		createdAt: moment().unix(),
  		completedAt: null
		};
		var todoRef = firebaseRef.child('todos').push(todo);
		
		todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	}
};

var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	};
};

var startAddTodos = () => {
	return (dispatch, getState) => {
		dispatch(toggleFetching());
		var todosRef = firebaseRef.child('todos');
		todosRef.once('value')
			.then(snapshot => {
				let todos = snapshot.val() || {};
				let ids = Object.keys(todos);
				let todosArray = [];

				ids.forEach(id => {
					let todo = Object.assign({}, todos[id], {'id': id});
					todosArray.push(todo);
				})

				dispatch(toggleFetching());
				dispatch(addTodos(todosArray));
			});
	}
}

var updateTodo = (id, updates) => {
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

var toggleFetching = () => {
	return {
		type: 'FETCH_TODOS',
	}
}

var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		const todoRef = firebaseRef.child(`todos/${id}`);
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
		});
	}
};

var login = (uid) => {
	return {
		type: 'LOGIN',
		uid
	}
}

var logout = () => {
	return {
		type: 'LOGOUT'
	}
}

var startLogin = () => {
	return (dispatch, getState) => {
		firebase.auth().signInWithPopup(githubProvider)
			.then(result => {
				dispatch(login(result.user.uid));
			})
			.catch(error => {
				console.log('Unable to auth!', error);
			});
	}
}

var startLogout = () => {
	return (dispatch, getState) => {
		firebase.auth().signOut()
			.then(() => {
				dispatch(logout());
			})
			.catch(() => {
				console.log('logout failed');
			});
	}
}

export {
	setSearchText,
	toggleShowCompleted,
	startAddTodo,
	startAddTodos,
	startToggleTodo,
	startLogin,
	startLogout
}