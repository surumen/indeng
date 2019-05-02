import React, { Component } from 'react';

import '../assets/styles/style.css';

class Footer extends Component {
  render() {
    return (
    <div>
	  <footer className="main-footer">
	    <div className="main-footer-content">
	      <nav className="main-footer-content-left">
	        <ul className="footer-nav-list">
	          <li>
	            <h6>&copy; 2019 Grade2Play Inc.</h6>
	            <ul className="footer-menu-list">
	              <li>
	                <a href="#">Terms of use</a>
	              </li>
	              <li>
	                <a href="#">Privacy policy</a>
	              </li>
	            </ul>
	          </li>
	        </ul>
	      </nav>
	      <div className="main-footer-content-right">
	        <ul className="footer-socials-list">
	          <li>
	            <a href="https://www.facebook.com/grade2play" target="_blank" data-footer-social="Facebook">
	              <i className="fab fa-facebook" />
	            </a>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </footer>
	  
	</div>
    );
  }
}

export default Footer;
