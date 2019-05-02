import React, { Component } from 'react';
import Auth from '@aws-amplify/auth';

import '../assets/styles/demo.css';

import logo from "../assets/logo.svg";
import icon from "../assets/icon.png";

const videostyle = {
	margin: 'auto',
  	display: 'block'

};

class Demo extends Component {
  render() {
    return (
       <div className="page-faq">
        <div className="common-content">
          <div className="page-faq-content">
            <h1 className="sectiontitle">Watch how it works</h1>
            <article className="page-faq-container">
              <div className="faq-container">
                <div className="_2xTMlsQl">
				    <div className="_2xL16d8I">
				      <div className="_1cPQrl1S">
				       <iframe style={videostyle} width={853} height={505} src="https://www.youtube-nocookie.com/embed/z5Z6qfsUKPo?rel=0&controls=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
				      </div>
				    </div>
				  </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
