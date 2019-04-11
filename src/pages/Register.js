import React, { Component } from 'react';

import '../assets/styles/account.css';

import logo from "../assets/logo.svg";
import icon from "../assets/icon.png";
import google from "../assets/icons/google.svg";
import twitter from "../assets/icons/twitter.svg";

class Register extends Component {
  render() {
    return (
     <div className="_2iASMTzV">
	  <div className="_3XkLt8Qc">
	    <a href="/" className="_9PcKHMo2">
	      <img src={logo} />
	    </a>
	    <a className="_1FV7R-ay _1ToZS6IW _2jkiZdBH" data-element="button" href="/login"><span className="JcC8FCE5"><span>Login</span></span></a>
	  </div>
	  <div className="_2xTMlsQl">
	    <div className="_2xL16d8I">
	      <div className="_34YvCqhu">
	        <div className="_3tcWIuRL">
	          <h1>Get started for free</h1>
	          <div className="_1jgdw-A9">
	            <a className="xhwFKMw7" href>
	              <img src={google} alt="Google" />
	            </a>
	            <a className="xhwFKMw7" href>
	              <img src={google} alt="Twitter" />
	            </a>
	          </div>
	          <a className="_1rNBWiLO _1FV7R-ay _3Q0u4dPn _1ToZS6IW _123N-XEF" data-element="button" href="/login/facebook">
	            <span className="JcC8FCE5"><span>
	                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" size={32} height={32} width={32}>
	                  <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
	                </svg>Facebook</span></span>
	          </a>
	          <p>or</p>
	        </div>
	        <form>
	          <div className="jesRnsBI">
	            <div className="_2UjXVGgM"><label className="_2mqLfVWJ">Your email</label></div>
	            <div className="_1e4pwiZP">
	              <div className="_1qXwAf4D"><input className="_1I4jFp30" name="email" type="email"  /></div>
	            </div>
	          </div>
	          <div className="jesRnsBI">
	            <div className="_2UjXVGgM"><label className="_2mqLfVWJ">Your name</label></div>
	            <div className="_1e4pwiZP">
	              <div className="_1qXwAf4D"><input className="_1I4jFp30" name="name" type="text"  /></div>
	            </div>
	          </div>
	          <div className="jesRnsBI">
	            <div className="_2UjXVGgM"><label className="_2mqLfVWJ">Your username name</label></div>
	            <div className="_1e4pwiZP _2-oBdneN">
	              <div className="_1EzkhdnA">grade2play.com/</div>
	              <div className="_1qXwAf4D"><input className="_1I4jFp30" name="url" type="text"  /></div>
	            </div>
	          </div>
	          <div className="jesRnsBI">
	            <div className="_2UjXVGgM"><label className="_2mqLfVWJ">Your password</label></div>
	            <div className="_1e4pwiZP">
	              <div className="_1qXwAf4D"><input className="_3E42cSFo _1I4jFp30" name="password" type="password"  /></div>
	            </div>
	            <div className="_3GskkEns _3E42cSFo" />
	          </div>
	          <div className="jesRnsBI"><label className="_1hEzHQge _24prFD7D">
	              <div className="_3ltqXcYm">
	                <input className="RTdc2axh" type="checkbox" name="terms" /><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" className="u4PHtMRP">
	                  <title>icon_checkbox_passive</title>
	                  <rect x=".75" y=".75" width="16.5" height="16.5" rx={6} ry={6} fill="none" stroke="#c7c7cc" strokeWidth="1.5" />
	                </svg><svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" className="efCY3y8E">
	                  <title>icon_checkbox_active</title>
	                  <path d="M5.35 8.89a.48.48 0 0 0-.71 0 .57.57 0 0 0 0 .76l2.5 2.69a.48.48 0 0 0 .71 0l5.5-5.92a.57.57 0 0 0 0-.76.48.48 0 0 0-.71 0L7.5 11.2z" fill="#fff" />
	                  <rect width={18} height={18} rx={6} ry={6} fill="#007aff" />
	                  <path d="M5.35 8.89a.48.48 0 0 0-.71 0 .57.57 0 0 0 0 .76l2.5 2.69a.48.48 0 0 0 .71 0l5.5-5.92a.57.57 0 0 0 0-.76.48.48 0 0 0-.71 0L7.5 11.2z" fill="#fff" stroke="#fff" />
	                </svg>
	              </div>
	              <div className="aGtT4iRF"><span>I agree to Grade2Play's <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></span></div>
	            </label></div>
	          <div className="jesRnsBI"><button className="_1FV7R-ay _1ToZS6IW _2jkiZdBH _1Jylq1O2" data-element="button" type="submit" disabled><span className="JcC8FCE5"><span>Continue</span></span></button></div>
	        </form>
	      </div>
	    </div>
	  </div>
	</div>
    );
  }
}

export default Register;
