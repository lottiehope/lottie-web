import React, { Component } from 'react';
import Carousel from './Carousel';
import Card from './Card';
import logo from '../resources/laurel-logo.png';
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
          <h1 className="header__title">Laurel Animal Rescue</h1>
          <p className="header__subtitle">Newton Le-Willows</p>
        </header>
        <div class="container" className="body">
          <div class="container" className="body__quote">
          <blockquote>
            <p>"Keep rescuing animals, you may lose your mind but you will surely find your soul."
            </p>
            <footer>Unknown</footer>
          </blockquote>
          </div>
        </div>
        <div className="promos">
          {/* <Promo title="Working in STEM"/> */}
          {/* <Promo title="Woman in STEM"/> */}
          {/* <Promo title="Title 1"/>
          <Promo title="Title 2"/> */}
        </div>
        <Card animal="Cats" subtext="From kittens to golden oldies" btntext="See our cats" img="/res/cat.jpg" location="/cats"/>
        <Card animal="Dogs" subtext="From puppies to big old softies" btntext="See our dogs" img="/res/dog.jpg" location="/dogs"/>
        {/* <Carousel /> */}
      </div>
    );
  }
}

export default App;
