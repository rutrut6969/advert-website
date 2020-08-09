import React, { useState, useEffect } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  const [nav, setNav] = useState({
    home: false,
    contact: false,
    about: false,
  });

  const home = () => {
    if (!nav.home) {
      setNav({
        ...nav,
        home: true,
      });
    } else {
      setNav({
        ...nav,
        home: false,
      });
    }
  };

  const about = () => {
    if (!nav.about) {
      setNav({
        ...nav,
        about: true,
      });
    } else {
      setNav({
        ...nav,
        about: false,
      });
    }
  };

  const contact = () => {
    if (!nav.contact) {
      setNav({
        ...nav,
        contact: true,
      });
    } else {
      setNav({
        ...nav,
        contact: false,
      });
    }
  };

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Nav nav={nav} home={home} about={about} contact={contact} />
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Footer nav={nav} home={home} about={about} contact={contact} />
        </Switch>
      </div>
    </Router>
  );
}
