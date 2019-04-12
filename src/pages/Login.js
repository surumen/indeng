import React, { Component } from 'react';

import '../assets/styles/account.css';

import logo from "../assets/logo.svg";
import icon from "../assets/icon.png";
import google from "../assets/icons/google.svg";
import twitter from "../assets/icons/twitter.svg";

class Login extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	email: "",
      		password: ""
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  validateForm() {
	    return this.state.email.length > 0 && this.state.password.length > 0;
	  }

	  handleChange = event => {
	    this.setState({
	      [event.target.id]: event.target.value
	    });
	  }

	  handleSubmit = event => {
	    event.preventDefault();
	  }

	  render() {
	    return (
	     <div className="_2iASMTzV">
		    <div className="_3XkLt8Qc"><a href="/" className="_9PcKHMo2">
		        <img src={logo} />
		      </a>
		      <a className="_1FV7R-ay _1ToZS6IW _2jkiZdBH" data-element="button" href="/register"><span className="JcC8FCE5"><span>Sign up</span></span></a></div>
		    <div className="_2xTMlsQl">
		      <div className="_2xL16d8I">
		        <div className="_1SgYv2GY">
		          <div className="qSkYG38U">
		            <h1>Log in</h1>
		            <div className="_1jgdw-A9">
		              <a className="xhwFKMw7" href="/login/facebook">
		                <img src={google} alt="Google" />
		              </a>
		              <a className="xhwFKMw7" href="/login/facebook">
		                <img src={twitter} alt="Twitter" />
		              </a>
		            </div>
		            <a className="_1rNBWiLO _1FV7R-ay _3Q0u4dPn _1ToZS6IW _123N-XEF" data-element="button" href="/login/facebook">
		              <span className="JcC8FCE5"><span>
		                  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={32} height={32} width={32}>
		                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
		                  </svg>Facebook</span></span>
		            </a>
		            <p>or sign in with Email</p>
		          </div>
		          <form onSubmit={this.handleSubmit}>
		            <div className="jesRnsBI">
		              <div className="_2UjXVGgM">
		              <label className="_2mqLfVWJ">Your email</label></div>
		              <div className="_1e4pwiZP">
		                <div className="_1qXwAf4D">
		                	<input 
		                		className="_1I4jFp30" 
		                		name="username" 
		                		onChange={this.handleChange}
		                		value={this.state.email}
		                		type="email"  />
		                </div>
		              </div>
		            </div>
		            <div className="jesRnsBI">
		              <div className="_2UjXVGgM"><label className="_2mqLfVWJ">Your password</label></div>
		              <div className="_1e4pwiZP">
		                <div className="_1qXwAf4D">
		                	<input 
		                		className="_1I4jFp30" 
		                		name="password" 
		                		value={this.state.password}
		                		onChange={this.handleChange}
		                		type="password" 
		                		autoComplete="current-password"  />
		                </div>
		              </div>
		            </div>
		            <div className="jesRnsBI">
		            	<button 
		            	className="_1FV7R-ay _1ToZS6IW _2jkiZdBH _1Jylq1O2" 
		            	disabled={!this.validateForm()}
		            	data-element="button"
		            	value="Submit" 
		            	type="submit">
		            		<span className="JcC8FCE5"><span>Sign in</span></span>
		            	</button>
		            </div>
		          </form>
		          <div className="_2fphEWi9"><span>Forgot your password? <a href="/recoverpassword">Restore</a></span></div>
		        </div>
		      </div>
		    </div>
		  </div>
	    );
  }
}

export default Login;
