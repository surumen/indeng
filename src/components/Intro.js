import React, { Component } from 'react';

import '../assets/styles/style.css';

import Faq from './Faq';

class Intro extends Component {
  render() {
    return (
      <div className="page-wrapper page-wrapper-home">
        <main>
          <section className="section-fp-intro">
            <div className="common-content">
              <div className="section-fp-intro-content">
                <h1>In school excellence for <br />game rewards</h1>
                <p className="section-fp-intro-content-subheading">
                  A new gaming rewards platform<br />
                  to help your kids balance school and their hobbies</p>
                <div className="section-fp-intro-cta-block">
                  <a href="/register" className="button button-large button-fill button-blue">Sign up for early access</a>
                  <br />
                  <br />
                  <a href="/demo" className="watchwrapper">
                  <span>
                    <svg className="watchbutton" height="42px" version="1.1" viewBox="0 0 42 42" width="42px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
                        <g transform="translate(-699.000000, -447.000000)">
                          <g transform="translate(699.000000, 447.000000)">
                            <g>
                              <circle className="circle" cx={21} cy={21} opacity="0.347860863" r={20} stroke="#3e9920" strokeWidth={2} />
                              <polygon className="play" fill="#3e9920" points="17.2 15.4 17.2 26.36 26.12 20.88" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="watchtext">Watch the video</span></a>
                </div>
              </div>
            </div>
          </section>
          <Faq />
        </main>
      </div>
    );
  }
}

export default Intro;
