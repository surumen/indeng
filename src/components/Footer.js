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
	            <h6>Company</h6>
	            <ul className="footer-menu-list">
	              <li>
	                <a href="/terms">Terms of use</a>
	              </li>
	              <li>
	                <a href="/privacy">Privacy policy</a>
	              </li>
	            </ul>
	          </li>
	        </ul>
	      </nav>
	      <div className="main-footer-content-right">
	        <ul className="footer-socials-list">
	          <li>
	            <a href="https://www.facebook.com/" target="_blank" data-footer-social="Facebook">
	              <i className="fab fa-facebook" />
	            </a>
	          </li>
	          <li>
	            <a href="https://www.instagram.com/" target="_blank" data-footer-social="Instagram">
	              <i className="fab fa-instagram" />
	            </a>
	          </li>
	          <li>
	            <a href="https://twitter.com/" target="_blank" data-footer-social="Twitter">
	              <i className="fab fa-twitter" />
	            </a>
	          </li>
	          <li>
	            <a href="https://t.me/" target="_blank" data-footer-social="Telegram">
	              <i className="fab fa-telegram" />
	            </a>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </footer>
	  <div className="cookie-message" id="cookie-message">
	    <span>We use cookies</span>
	    <a href="/privacy">Details</a>
	    <div className="close-cookie" id="close-cookie" />
	  </div>
	</div>
    );
  }
}

export default Footer;
