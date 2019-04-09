import React, { Component } from 'react';

import '../assets/styles/style.css';

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
                  We help you create grades goals for your children<br />
                  and reward them with game bonuses</p>
                <div className="section-fp-intro-cta-block">
                  <a href="/signup" className="button button-large button-fill button-blue">Start for Free</a>
                  <br />
                  <a href="/demo" className="cta-tutorial">Watch how it works</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Intro;
