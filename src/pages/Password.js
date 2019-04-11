import React, { Component } from 'react';

import '../assets/styles/account.css';

import logo from "../assets/logo.svg";

class Password extends Component {
  render() {
    return (
		<div className="_2iASMTzV">
		  <div className="_3XkLt8Qc">
		    <a href="/" className="_9PcKHMo2">
		      <img src={logo} />
		    </a>
		    <a className="_1FV7R-ay _1ToZS6IW _2jkiZdBH" data-element="button" href="/register">    <span className="JcC8FCE5"><span>Sign up</span></span>
		    </a>
		  </div>
		  <div className="_2xTMlsQl">
		    <div className="_2xL16d8I">
		      <div className="_1cPQrl1S">
		        <div className="J-S5DgYE">
		          <h1>Forgot your password?</h1>
		        </div>
		        <form>
		          <div className="jesRnsBI">
		            <div className="_2UjXVGgM"><label className="_2mqLfVWJ">Your email</label></div>
		            <div className="_1e4pwiZP">
		              <div className="_1qXwAf4D"><input className="_1I4jFp30" name="username" placeholder="Enter your email" type="email"  /></div>
		            </div>
		          </div>
		          <div className="jesRnsBI"><button className="_1FV7R-ay _1ToZS6IW _2jkiZdBH _1Jylq1O2" data-element="button" type="submit"><span className="JcC8FCE5"><span>Restore password</span></span></button></div>
		        </form>
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
}

export default Password;
