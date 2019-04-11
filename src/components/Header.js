import React, { Component } from 'react';

import '../assets/styles/style.css';

import logo from "../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div>
  <header className="main-header">
    <div className="main-header-content">
      <div className="main-header-left">
        <a href="index.html" className="header-logo">
          <img src={logo} alt="grade2play logo" />
        </a>
      </div>
      <div className="main-header-right">
        <div className="header-buttons">
          <a href="/features" className="button button-header button-outline">Features</a>
          <a href="/login" className="button button-header button-outline">Login</a>
        </div>
        <div className="mobile-menu-btn">
          <div className="mobile-menu-btn-inner">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  </header>
  <a href="/inbox">Inbox</a>
</div>
    );
  }
}

export default Header;
