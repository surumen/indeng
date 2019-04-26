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
        <a href="/" className="header-logo">
          <img src={logo} alt="grade2play logo" />
        </a>
      </div>
      <div className="main-header-right">
        <div className="header-buttons">
          <a href="/register" className="button button-header button-outline">Get early access</a>
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
</div>
    );
  }
}

export default Header;
