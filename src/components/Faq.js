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
                            <h3>How to sign up on mssg.me platform?</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <div><span className="ace-all-bold-hthree"><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b>Sign up </b></span><span className=" author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu"><b>with</b></span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b> Facebook</b></span></span></div>
                            <ol className="listtype-number listindent1 list-number1" start={1}>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Click the button <a href="https://app.mssg.me/registration?lang=en"><strong>Get started</strong></a>&nbsp;</span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">on mssg.me website</span></li>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Press the button </span><span className="highlight author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b>Facebook</b></span></li>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Choose your Plan</span></li>
                            </ol>
                            <div><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">If you don’t have email verification on Facebook, </span><span className=" author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu">please, </span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">write your email</span><span className=" author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu">.</span></div>
                            <div><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Also</span> <span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">you</span><span className=" author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu"> don’t </span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">need to create and remember your password from mssg.me profile.</span></div>
                            <div />
                            <div><span className="ace-all-bold-hthree"><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b>Sing up </b></span><span className=" author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu"><b>with</b></span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b> email</b></span></span></div>
                            <ol className="listtype-number listindent1 list-number1" start={1}>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Click the button <a href="https://app.mssg.me/registration?lang=en"><strong>Get started</strong></a>&nbsp;</span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">on mssg.me website</span></li>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Fill in all the fields</span> <span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr h-lparen">(email,</span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">&nbsp;name, page name, password)</span></li>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Read and agree with our </span><span className="highlight author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b>Terms of Use</b></span><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"> and</span><span className="highlight author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr"><b> Privacy Policy</b></span></li>
                              <li><span className=" author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu">Click on the button </span><span className="highlight author-d-4z65zz66zl57z75zyiz66zfr2fz87zwz89znuiz88zlz79zz75zz89zhqpz75ztjz79zgdz122zz84zz89zsz86zz72zpz80zfz87zcz85z0z74zu"><b>Continue</b></span></li>
                              <li><span className=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qovvldyhz76zz87zz82zug4rnz77zqpz85zz68zkz86zz89zz81z6wz69zvz67zwnkr">Choose your Plan</span></li>
                            </ol>
                          </div>
                        </li>
                        <li id="1-2">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>How to change an email?</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content">
                            <ol className="ul1">
                              <li><a href="https://app.mssg.me/login"><strong>Log in</strong></a> your personal profile</li>
                              <li className="li1">Click on the button <b>Settings</b></li>
                              <li className="li1">Choose a section <b>Account</b></li>
                              <li className="li1">Set up your new <b>email</b></li>
                              <li className="li1">Click on the button <b>Save</b></li>
                            </ol>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li style={{width: '670px'}} className>
                      <ul className="faq-panes-list">
                        <li id="3-1">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>How to set up widget?</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <ul>
                              <li>Sign in your personal profile</li>
                              <li>Click on the button <strong>Page</strong> – Choose a section <strong>Widget</strong></li>
                              <li>Choose color</li>
                              <li>Choose position</li>
                              <li>Add description</li>
                              <li>Choose device categories on which you want to show the widget</li>
                            </ul>
                          </div>
                        </li>
                        <li id="3-2">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>How to install widget on your website?</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <ul>
                              <li><strong>Click</strong> on the code to copy it</li>
                              <li><strong>Paste the code</strong> into your wesbite before <strong>&lt;/body&gt;</strong> tag</li>
                            </ul>
                          </div>
                        </li>
                        <li id="3-3">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>Can I try the widget for free?</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <p>Yes! After your first registration you’ll have an opportunity to try <strong>Widget</strong> in <strong>14-Day trial of PRO </strong>tariff</p>
                          </div>
                        </li>
                        <li id="3-4">
                          <div className="faq-panes-list-item-header">
                            <span className="faq-panes-list-item-counter" />
                            <h3>How much is widget costs?</h3>
                            <span className="faq-panes-list-item-status" />
                          </div>
                          <div className="faq-panes-list-item-content" style={{display: 'none'}}>
                            <p>You can use widget fo FREE.</p>
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
