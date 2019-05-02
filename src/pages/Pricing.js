import React, { Component } from 'react';

import '../assets/styles/style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import logo from "../assets/logo.svg";

class Pricing extends Component {
  render() {
    return (
      <div>
    	<section className="section-page-pricing">
		  <div className="common-content">
		    <div className="section-page-pricing-content">
		      <h1 className="sectiontitle">Pricing</h1>
		      <ul className="pricing-plans-list">
		        <li>
		          <div className="plan-header">
		            <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>FREE</font></font></h2>
		            <div className="plan-price-block">
		              <span className="plan-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>$ 0</font></font></span>
		            </div>
		          </div>
		          <div className="plan-content-card">
		            <ul className="plan-content-card-products-list">
		              <li>
		                <ul className="features-list">
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Page with messengers </font></font><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>(example </font></font><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> )</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Products</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>QR code</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Widget to the site</font></font></li>
		                </ul>
		              </li>
		            </ul>
		          </div>
		        </li>
		        <li>
		          <div className="plan-header">
		            <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>PLUS</font></font></h2>
		            <div className="plan-price-block">
		              <span className="plan-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>$25 per month</font></font></span>
		              <span className="plan-price-description"><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>or $199 per academic year</font></font></span>
		            </div>
		          </div>
		          <div className="plan-content-card">
		            <ul className="plan-content-card-products-list">
		              <li>
		                <ul className="features-list">
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>All functions of the tariff FREE</font></font></li>
		                  {/*                                                <li>Неограниченное количество ссылок</li>*/}
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Advanced Analytics</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Review block</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Own page layout</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Pixel Facebook Integration</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Google Analytics Integration</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Integration with Yandex metric</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Hide branding mssg.me</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Mailchimp Integration </font></font><i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Soon</font></font></i></li>
		                </ul>
		              </li>
		            </ul>
		          </div>
		        </li>
		        <li>
		          <div className="plan-header">
		            <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>PRO</font></font></h2>
		            <div className="plan-price-block">
		              <span className="plan-price"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>$199 </font></font></span>
		              <span className="plan-price-description"><font style={{verticalAlign: 'inherit'}}></font><br /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>per academic year</font></font></span>
		            </div>
		          </div>
		          <div className="plan-content-card">
		            <ul className="plan-content-card-products-list">
		              <li>
		                <ul className="features-list">
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>All functions of tariff PLUS</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Multichannel inbox</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Appointments and Notes</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Priority support</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Customer profile</font></font></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>CRM is </font></font><i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>coming soon</font></font></i></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Ready answers </font></font><i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Soon</font></font></i></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Payments </font></font><i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Coming Soon</font></font></i></li>
		                  <li><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>IOS and Android apps </font></font><i><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Coming Soon</font></font></i></li>
		                </ul>
		              </li>
		            </ul>
		          </div>
		        </li>
		      </ul>
		    </div>
		  </div>
		</section>
      </div>
    );
  }
}

export default Pricing;
