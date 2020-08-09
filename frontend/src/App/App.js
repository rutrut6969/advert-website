import React, { useState } from 'react';
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

  const [toggle, setToggle] = useState({
    home: false,
    about: false,
    contact: false,
  });

  const homeToggle = () => {
    if (!toggle.home) {
      setToggle({
        ...toggle,
        home: true,
      });
    } else {
      setToggle({
        ...toggle,
        home: false,
      });
    }
  };

  const aboutToggle = () => {
    if (!toggle.about) {
      setToggle({
        ...toggle,
        about: true,
      });
    } else {
      setToggle({
        ...toggle,
        about: false,
      });
    }
  };

  const contactToggle = () => {
    if (!toggle.contact) {
      setToggle({
        ...toggle,
        contact: true,
      });
    } else {
      setToggle({
        ...toggle,
        contact: false,
      });
    }
  };

  const home = () => {
    if (!nav.home) {
      setNav({
        ...nav,
        home: true,
        about: false,
        contact: false,
      });
    } else {
      setNav({
        ...nav,
        home: false,
        about: false,
        contact: false,
      });
    }
  };

  const about = () => {
    if (!nav.about) {
      setNav({
        ...nav,
        about: true,
        home: false,
        contact: false,
      });
    } else {
      setNav({
        ...nav,
        about: false,
        home: false,
        contact: false,
      });
    }
  };

  const contact = () => {
    if (!nav.contact) {
      setNav({
        ...nav,
        contact: true,
        about: false,
        home: false,
      });
    } else {
      setNav({
        ...nav,
        contact: false,
        about: false,
        home: false,
      });
    }
  };

  return (
    <Router>
      <div className='App'>
        <Nav
          nav={nav}
          toggle={toggle}
          home={home}
          about={about}
          contact={contact}
          homeToggle={homeToggle}
          aboutToggle={aboutToggle}
          contactToggle={contactToggle}
        />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer
          nav={nav}
          toggle={toggle}
          home={home}
          about={about}
          contact={contact}
          homeToggle={homeToggle}
          aboutToggle={aboutToggle}
          contactToggle={contactToggle}
        />
      </div>
    </Router>
  );
}
