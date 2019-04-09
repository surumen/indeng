import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Demo from './pages/Demo';

import Analytics from './features/Analytics';
import CompleteAssignments from './features/CompleteAssignments';
import ExtraCurricular from './features/ExtraCurricular';
import ImprovedGrades from './features/ImprovedGrades';

import './assets/fonts/fonts.css';
import './assets/styles/style.css';
import './assets/styles/demo.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/demo" component={Demo} />
        <Route path="/features" component={CompleteAssignments} />
        <Route path="/features/analytics" component={Analytics} />
        <Route path="/features/extracurricular" component={ExtraCurricular} />
        <Route path="/features/weekly_assignments" component={CompleteAssignments} />
        <Route path="/features/final_grades" component={ImprovedGrades} />
      </div>
  	</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
