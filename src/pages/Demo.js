import React, { Component } from 'react';

import '../assets/styles/demo.css';

import logo from "../assets/logo.svg";
import icon from "../assets/icon.png";

class Demo extends Component {
  render() {
    return (
     <div className="_3SBQN5dI">
	  <div className="_1i-xzTzY" id="cardRoot">
	    <div className="_1DNSBNAt _3hoN9LGx _4SJnf5WH" style={{height: '292px'}}>
	      <div className="_1-quif0X" />
	    </div>
	    <div className="_38MtcaH-">
	    	<a href="/" rel="noopener noreferrer" className="_2NiRptTZ">
	    		<img src={logo} alt="grade2play" />
	    	</a>
	    	<a href="/register" rel="noopener noreferrer" className="_1FV7R-ay _3izNtEeL _2jkiZdBH _17TLDXQ2" data-element="button">
	    		<span className="JcC8FCE5">
	    			<span>Create an account</span>
	    		</span>
	    	</a>
	    </div>
	    <div className="_2bmbivm7">
	      <div>
	        <div className="_3uMPaoD9">
	          <h2 className="_15TzEpM5 _26ZN8PN3">Easy way to Reward your Kids</h2>
	          <p className="_15TzEpM5 _26ZN8PN3">
	          	1️⃣ Create an account in 60 seconds <br/>
	            2️⃣ Select school rewards<br/>
	            3️⃣ Pay for game rewards</p>
	        </div>
	      </div>
	      <div className="_1O18hI9-">
	        <div>
	          <div className="jSlzAA2K _3wwAFyBZ _1G0gh0ff">
	            <div className="_3lWWAyQ_">
	              <div className="_3DLdgy15"><img src={icon} alt="grade2play" /></div>
	              <div className="rVdbawZf">
	                <div>
	                  <h1>grade2play</h1>
	                  <p>Have a question? 👇</p>
	                </div>
	              </div>
	            </div>
	            <div className="WV6sm107">
	              <ul className="_3zhNaZVE" count={5} id="card_messengers">
	                <li className="_3KgvqEaL">
	                	<a href="/games/fortnite" data-messenger="fortnite" target="_blank" rel="noopener noreferrer">Fortnite
	                	</a>
	               	</li>
	                <li className="_1Gobno2P">
	                	<a href="/games/league_of_legends" data-messenger="FIFA" target="_blank" rel="noopener noreferrer">League of Legends
	                	</a>
	                </li>
	                <li className="_18jkgd0-">
	                	<a href="/games/fifa" data-messenger="league_of_legends" target="_blank" rel="noopener noreferrer">FIFA
	                	</a>
	                </li>
	                <li className="_2j7oAD62">
	                	<a href="/games/mortal_combat" data-messenger="mortal_combat" target="_blank" rel="noopener noreferrer">Other
	                	</a>
	                </li>
	                <li className="_3hn_bJcA">
	                	<a href="/games/pokemon_go" data-messenger="pokemon_go" target="_blank" rel="noopener noreferrer">Pokemon Go
	                	</a>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </div>
	        <div className="_2xSIOsK6 _3yXYtteR _1bfXYuny">
	          <ul className="_31b-I6k3" id="card_list">
	            <li><a href="/register" target="_blank" rel="noopener noreferrer" data-id="5ca5f58c8b7c4300ab7f69dd" data-title="Create your grade2play Account">Create your grade2play Account</a></li>
	          </ul>
	        </div>
	        <div className="_2Bi6S0M_ _2yHKiG8i v7VefROC">
	          <ul className="gHfdNBVl">
	            <li><a className="_3NTORbA2" href="/features/weekly_assignments">
	                <div className="_1kcK7Cy9"><img src="https://mssg.me/upload/images/eewk74aju2lxgqc.png" alt="Weekly Assignments" /></div>
	                <div className="_2JrB-lNp"><span className="_2JScjGhK">Weekly Assignments</span></div>
	              </a></li>
	            <li><a className="_3NTORbA2" href="/features/final_grades">
	                <div className="_1kcK7Cy9"><img src="https://mssg.me/upload/images/eewk73aju2lx69h.png" alt="Final Grades" /></div>
	                <div className="_2JrB-lNp"><span className="_2JScjGhK">Final Grades</span></div>
	              </a></li>
	            <li><a className="_3NTORbA2" href="/features/extracurricular">
	                <div className="_1kcK7Cy9"><img src="https://mssg.me/upload/images/eewk711ju2lwd5y.png" alt="Extracurricular" /></div>
	                <div className="_2JrB-lNp"><span className="_2JScjGhK">Extracurricular</span></div>
	              </a></li>
	            <li><a className="_3NTORbA2" href="/features/analytics">
	                <div className="_1kcK7Cy9"><img src="https://mssg.me/upload/images/eewk728ju2luxsz.png" alt="Analytics" /></div>
	                <div className="_2JrB-lNp"><span className="_2JScjGhK">Analytics</span></div>
	              </a></li>
	          </ul>
	        </div>
	        <div className="_3OAaiLBx _3BuHuRYL _2vLJJZhz">
	          <div className="E4X3fLnw">
	            <div className="_23fn0ou1 _1n5zJH4Y" style={{width: '40px', height: '40px', animationDuration: '0.8s'}} />
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
    );
  }
}

export default Demo;
