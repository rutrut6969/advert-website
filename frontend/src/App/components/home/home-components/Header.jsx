import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Header() {
  const [toggled, setToggled] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const grow = useSpring({
    width: toggled ? '30%' : '0px',
  });
  const scale = useSpring({
    transform: buttonToggle ? 'scale(1.1)' : 'scale(1.0)',
    boxShadow: buttonToggle
      ? '10px 10px 60px 10px rgba(0, 0, 0, 0.329)'
      : '0px 0px 0px 0px rgb(0,0,0)',
  });

  const toggle = () => {
    setToggled(!toggled);
  };

  const buttonToggled = () => {
    setButtonToggle(!buttonToggle);
  };

  return (
    <div className='header'>
      <div className='hero_image'>
        <h1>Need a New Site?</h1>
        <h6>
          Well Welcome! Check out what I do{' '}
          <div className='wrap'>
            <animated.div style={grow} className='link-bar' />
            <a
              // style={border}
              onMouseEnter={toggle}
              onMouseLeave={toggle}
              href='#middle-content'>
              here!
            </a>
            <animated.div style={grow} className='link-bar' />
          </div>
        </h6>
        <animated.button
          style={scale}
          onMouseEnter={buttonToggled}
          onMouseLeave={buttonToggled}
          className='button'>
          Checkout My Packages!
        </animated.button>
      </div>
    </div>
  );
}
