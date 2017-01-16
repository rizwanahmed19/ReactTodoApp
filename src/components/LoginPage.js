import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/actions';

class LoginPage extends Component {
	handleAuth(){
		this.props.startLogin();
	}
	render(){
		return (
			<div>
				<h1 className='page-title'>Todo App</h1>
				<div className='row'>
					<div className='columns small-centered small-10 medium-6 large-4'>
						<div className='callout callout-auth'>
							<h3>Login</h3>
							<p>Login with GitHub account below.</p>
							<button onClick={this.handleAuth.bind(this)} className='button'>
								<i className='fa fa-lg fa-github'></i>
								GitHub
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, {startLogin})(LoginPage);