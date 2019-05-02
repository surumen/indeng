import React, { Component } from 'react';

import '../assets/styles/style.css';

import Faq from './Faq';
import Pricing from '../pages/Pricing';

import Demo from '../pages/Demo';


class Intro extends Component {
  render() {
    return (
      <div className="page-wrapper page-wrapper-home">
        <main>
          <section className="section-fp-intro">
            <div className="common-content">
              <div className="section-fp-intro-content">
                <h1>In school excellence with <br />in game rewards</h1>
                <p className="section-fp-intro-content-subheading">
                  A new gaming rewards platform<br />
                  to help your kids balance school and their hobbies</p>
                <div className="section-fp-intro-cta-block">
                  <a href="/register" className="button button-large button-fill button-blue">Sign up for early access</a>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </section>
          <Demo />
          <Faq />
        </main>
      </div>
    );
  }
}

export default Intro;
