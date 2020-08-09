import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './nav.css';

export default function Nav({
  nav,
  toggle,
  home,
  about,
  contact,
  homeToggle,
  aboutToggle,
  contactToggle,
}) {
  const home_bar = useSpring({
    width: toggle.home ? '100%' : '0px',
  });
  const about_bar = useSpring({
    width: toggle.about ? '100%' : '0px',
  });
  const contact_bar = useSpring({
    width: toggle.contact ? '100%' : '0px',
  });

  return (
    <div className='nav header'>
      <div className='logo'>Logo</div>

      <nav className='links'>
        <div className='home'>
          <Link
            onMouseEnter={homeToggle}
            onMouseLeave={homeToggle}
            onClick={home}
            className={`link ${nav.home ? 'active' : ''}`}
            to={{
              pathname: '/',
              state: {
                from: 'root',
              },
            }}>
            Home
          </Link>
          <animated.div style={home_bar} className='bar' />
        </div>
        <div className='about'>
          <Link
            className={`link ${nav.about ? 'active' : ''}`}
            to='/about'
            onMouseEnter={aboutToggle}
            onMouseLeave={aboutToggle}
            onClick={about}>
            About
          </Link>
          <animated.div style={about_bar} className='bar' />
        </div>
        <div className={'contact'}>
          <Link
            className={`link ${nav.contact ? 'active' : ''}`}
            to='/contact'
            onMouseEnter={contactToggle}
            onMouseLeave={contactToggle}
            onClick={contact}>
            Contact
          </Link>
          <animated.div style={contact_bar} className='bar' />
        </div>
      </nav>
    </div>
  );
}
