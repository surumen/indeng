import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import '../assets/styles/style.css';

import logo from "../assets/logo.svg";

class Faq extends Component {
  render() {
    return (
    <div>
      <Helmet>
        <script src="https://mssg.me/static/website/dist/bundle.js?v=2.5.60"></script>
      </Helmet>
      <div className="page-faq">
        <div className="common-content">
          <div className="page-faq-content">
            <h1 className="sectiontitle">Frequently Asked Questions</h1>
            <article className="page-faq-container">
              <div className="faq-container">
                <div className="faq-container-left">
                  <ul className="faq-top-controls-list clearfix">
                    <li className="active">
                      <img src="https://w.mssg.me/wp-content/uploads/2018/12/icon-start.svg" className="default" alt="Account settings" />
                      <img src="https://w.mssg.me/wp-content/uploads/2018/12/icon-start-blue.svg" className="active" alt="Account settings" />
                      <h2>How it works</h2>
                    </li>
                    <li className>
                      <img src="https://w.mssg.me/wp-content/uploads/2018/12/icon-widget.svg" className="default" alt="Widget Settings" />
                      <img src="https://w.mssg.me/wp-content/uploads/2018/12/icon-widget-active.svg" className="active" alt="Widget Settings" />
                      <h2>Pricing</h2>
                    </li>
                  </ul>
                </div>
                <div className="faq-container-right">
                  <ul className="faq-sublists clearfix" style={{transform: 'translateX(0px)'}}>
                    <li className="active" style={{width: '670px'}}>
                      <ul className="faq-panes-list">
                        <li id="1-1">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>Create an account</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <div><span className="ace-all-bold-hthree"><span ><b>Sign up </b></span><span ><b>with</b></span><span ><b> Facebook</b></span></span></div>
                            <ol className="listtype-number listindent1 list-number1" start={1}>
                              <li><span >Click the button <a href="/login"><strong>Get started</strong></a>&nbsp;</span><span className="author-d">on our website</span></li>
                              <li><span >Press the button </span><span className="highlight author-d"><b>Facebook</b></span></li>
                              <li><span >Choose your Plan</span></li>
                            </ol>
                            <div><span >If you don’t have email verification on Facebook, </span><span >please, </span><span >write your email</span><span >.</span></div>
                            <div><span >Also</span> <span >you</span><span > don’t </span><span >need to create and remember your password from Grade2Play profile.</span></div>
                            <div />
                            <div><span className="ace-all-bold-hthree"><span ><b>Sing up </b></span><span ><b>with</b></span><span ><b> email</b></span></span></div>
                            <ol className="listtype-number listindent1 list-number1" start={1}>
                              <li><span >Click the button <a href="/login"><strong>Get started</strong></a>&nbsp;</span><span >on our website</span></li>
                              <li><span >Fill in all the fields</span> <span className=" author-d h-lparen">(email,</span><span >&nbsp;name, page name, password)</span></li>
                              <li><span >Read and agree with our </span><span className="highlight author-d"><b>Terms of Use</b></span><span > and</span><span className="highlight author-d"><b> Privacy Policy</b></span></li>
                              <li><span >Click on the button </span><span className="highlight "><b>Continue</b></span></li>
                              <li><span >Choose your Plan</span></li>
                            </ol>
                          </div>
                        </li>
                        <li id="1-2">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>Create a Reward Plan</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <div><span className="ace-all-bold-hthree"><span ><b>Sign up </b></span><span ><b>with</b></span><span ><b> Facebook</b></span></span></div>
                            <ol className="listtype-number listindent1 list-number1" start={1}>
                              <li><span >Click the button <a href="/login"><strong>Get started</strong></a>&nbsp;</span><span className="author-d">on our website</span></li>
                              <li><span >Press the button </span><span className="highlight author-d"><b>Facebook</b></span></li>
                              <li><span >Choose your Plan</span></li>
                            </ol>
                            <div><span >If you don’t have email verification on Facebook, </span><span >please, </span><span >write your email</span><span >.</span></div>
                            <div><span >Also</span> <span >you</span><span > don’t </span><span >need to create and remember your password from Grade2Play profile.</span></div>
                            <div />
                          </div>
                        </li>
                        <li id="1-3">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>Select in-school goals for your child</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <ol className="ul1">
                              <li><a href="/login"><strong>Log in</strong></a> your personal profile</li>
                              <li className="li1">Click on the button <b>Settings</b></li>
                              <li className="li1">Choose a section <b>Account</b></li>
                              <li className="li1">Sellect <b>school goals</b> from the list</li>
                              <li className="li1">Click on the button <b>Save</b></li>
                            </ol>
                          </div>
                        </li>
                        <li id="1-4">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>Upload your child's transcripts</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <ol className="ul1">
                              <li><a href="/login"><strong>Log in</strong></a> your personal profile</li>
                              <li className="li1">Click on the button <b>Settings</b></li>
                              <li className="li1">Choose a section <b>Account</b></li>
                              <li className="li1">Set up your new <b>record</b></li>
                              <li className="li1">Click on the button <b>Upload transcript</b></li>
                            </ol>
                          </div>
                        </li>
                        <li id="1-4">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>Automated rewards</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <div><span >If the student meets the set goals, our system automatically buys the in-game rewards for them</span><span >.</span></div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li style={{width: '670px'}} className>
                      <ul className="faq-panes-list">
                        <li id="3-1">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>FREE plan</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <ul>
                              <li>Select up to <strong>three</strong> rewards</li>
                              <li>Previous grades not visible</li>
                            </ul>
                          </div>
                        </li>
                        <li id="3-2">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>&#x00024; 40 per month</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <ul>
                              <li>Track grades from the beginning</li>
                              <li>Track <strong>play time</strong> for the selected games</li>
                              <li>Get rewards in-game based on exam grade</li>
                              <li><strong>Customize rewards:</strong> set minimum grade, and modify subjects that matter</li>
                              <li><strong>Paid rewards:</strong> pay extra so the student gets better rewards</li>
                            </ul>
                          </div>
                        </li>
                        <li id="3-3">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>&#x00024; 300 per academic year</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <ul>
                              <li>Track grades from the beginning</li>
                              <li>Track <strong>play time</strong> for the selected games</li>
                              <li>Get rewards in-game based on exam grade</li>
                              <li><strong>Customize rewards:</strong> set minimum grade, and modify subjects that matter</li>
                              <li><strong>Paid rewards:</strong> pay extra so the student gets better rewards</li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Faq;
