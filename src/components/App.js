import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import NavBar from './NavBar';
import Promo from './Promo';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="header">
          <img src={logo} className="header__logo" alt="logo" />
          <h1 className="header__title">Lottie Hope</h1>
          <p className="header__subtitle">BSc Computer Science</p>
        </header>
        <div class="container" className="body">
          <div class="container" className="body__quote">
          <blockquote>
            <p>"The most ridiculous example I can think of is that the 
              people who run public education promote the stupid and idle along with the 
              industrious—because all men are created equal, educators will gravely tell you, 
              the children left behind suffer terrible feelings of inferiority. We know all men are 
              not created equal in the sense some people would have us believe—some people 
              are smarter than others, some people have more opportunity because they’re born 
              with it, some men make more money than others, some ladies make better cakes 
              than others—some people are born gifted beyond the normal scope of most men."
            </p>
            <footer>Harper Lee, To Kill A Mockingbird</footer>
          </blockquote>
          </div>
        </div>
        <div className="promos">
          <Promo title="Working in STEM"/>
          <Promo title="Woman in STEM"/>
        </div>
      </div>
    );
  }
}

export default App;
