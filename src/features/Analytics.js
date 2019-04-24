import React, { Component } from 'react';

import '../assets/styles/features.css';
import '../assets/styles/devices.min.css';

import icon from "../assets/icon.png";

class Analytics extends Component {
  render() {
    return (
    <div id="root">
	  <div className="_3jFsfZU2">
	  <div className="marvel-device ipad silver landscape">
	  <div className="camera" />
	  <div className="screen">
	    <div className="P3J5AhTJ">
	      <div className="_2CMCgHKK _22XsAoRF">
	        <div className="_1HJ35fBu">
	          <div className="dFaULQ1n">
	            <div />
	            <div />
	            <div />
	            <div className="J_YA6HIV" />
	          </div>
	        </div>
	        <div className="_2esuo9VF">
	          <div className="_2I6Ucwq3">
	            <div className="tabs"> 
		            <a href="/features/weekly_assignments" className="_2lILFZpH">
		              <div className="_1titt32f">
		                <img src={icon} alt="grade2play" />
		              </div>
		              <span>
		                Assignments
		              </span>
		            </a>
		        </div>
		        <div className="tabs">
		            <a href="/features/final_grades" className="_2lILFZpH">
		              <div className="_1titt32f">
		                <img src={icon} alt="grade2play" />
		              </div>
		              <span>
		                Exams
		              </span>
		            </a>
		        </div>
		        <div className="tabs">
		            <a href="/features/extracurricular" className="_2lILFZpH">
		              <div className="_1titt32f">
		                <img src={icon} alt="grade2play" />
		              </div>
		              <span>
		                Extracurriculars
		              </span>
		            </a>
		        </div>
		        <div className="tabs active">
		            <a href="/features/analytics" className="_2lILFZpH">
		              <div className="_1titt32f">
		                <img src={icon} alt="grade2play" />
		              </div>
		              <span>
		                Analytics
		              </span>
		            </a>
		        </div>
	          </div>
	        </div>
	      </div>
	      <div className="_2OB0ulxm">
	        <div className="RPaDbzsX">
	          <div className="_1HJ35fBu">
	            <div className="dFaULQ1n">
	              <div />
	              <div />
	              <div />
	              <div className="J_YA6HIV" />
	            </div>
	          </div>
	          <div className="_2esuo9VF">
	            <div className="_2I6Ucwq3">
	              <a href="/" className="_2lILFZpH">
	                <div className="_1titt32f">
	                  <img src={icon} alt="grade2play" />
	                </div>
	                <span>
	                  grade2play
	                </span>
	              </a>
	              <div className="_3tqwf6-A" data-modal-btn="shareproduct"><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" size={24} color="#000" height={24} width={24} style={{color: 'rgb(0, 0, 0)'}}>
	                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
	                  <polyline points="16 6 12 2 8 6" />
	                  <line x1={12} y1={2} x2={12} y2={15} />
	                </svg></div>
	            </div>
	          </div>
	        </div>
	        <div>
	          <div className="_2sAv_pF9">
	            <img src="https://mssg.me/upload/images/eewk728ju2luxsz.png" alt="Analytics" />
	            <div className="_3bNWR2gD">
	              <a href="/features/extracurricular" />
	            </div>
	          </div>
	        </div>
	        <div className="_3i4bFa2x">
	          <div className="_1wR-CUow">
	            <h1>Analytics
	            </h1>
	          </div>
	          <div className="_3E1NHBCY">
	            <p>Set up integration with Google Analytics, Yandex Metrika and Facebook Pixel. <br />Click here for your mssg.me page.
	            </p>
	          </div>
	        </div>
	      </div>
	      <div className="tPY7Em2I">
	        <div className="WV6sm107">
	          <ul className="_3zhNaZVE" count={5} id="product_messengers">
	            <li className="_3KgvqEaL">
	              <a href="/playstation" target="_blank" rel="noopener noreferrer"><span>Login with Playstation</span></a></li>
	            <li className="_1Gobno2P">
	              <a href="/xbox" target="_blank" rel="noopener noreferrer"><span>Login with Xbox</span>
	              </a>
	            </li>
	            <li className="_18jkgd0-">
	              <a href="/nintendo" target="_blank" rel="noopener noreferrer"><span>Nintendo</span>
	              </a>
	            </li>
	            <li className="_2j7oAD62">
	              <a href="/stadia" target="_blank" rel="noopener noreferrer"><span>Google Stadia</span>
	              </a>
	            </li>
	            <li className="_3hn_bJcA">
	              <a href="/instagram" target="_blank" rel="noopener noreferrer"><span>Twitch</span>
	              </a>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </div>

	    </div>
	    <a href="/">
		<div className="home" /></a>
		</div>

	  </div>
	</div>
    );
  }
}

export default Analytics;
