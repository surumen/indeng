import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';

import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Faq from './components/Faq';

// optional, more info: 
// https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const advancedMatching = { 
	em: 'msurumen@berkeley.com' 
}; 

const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);
ReactPixel.pageView(); 					// For tracking page view
//ReactPixel.track( event, data ) 		// For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
//ReactPixel.trackCustom( event, data ) 	// For tracking custom events

class App extends Component {
  // componentDidMount() {
  //   const ReactPixel =  require('react-facebook-pixel');
  //   ReactPixel.init('yourPixelIdGoesHere');
  // }
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Faq />
        <Footer />
      </div>
    );
  }
}

export default App;
