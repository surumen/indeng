import React, { Component } from 'react';

import '../assets/styles/demo.css';

import logo from "../assets/logo.svg";
import icon from "../assets/icon.png";

class Demo extends Component {
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
		       <iframe width={560} height={315} src="https://www.youtube-nocookie.com/embed/z5Z6qfsUKPo?rel=0&?controls=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
		      </div>
		    </div>
		  </div>
		</div>
    );
  }
}

export default Demo;
