import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './about.css';

export default function About() {
  const [buttonToggle, setButtonToggle] = useState(false);
  const scale = useSpring({
    transform: buttonToggle ? 'scale(1.1)' : 'scale(1.0)',
    boxShadow: buttonToggle
      ? '10px 10px 60px 10px rgba(0, 0, 0, 0.329)'
      : '0px 0px 0px 0px rgb(0,0,0)',
  });

  const buttonToggled = () => {
    setButtonToggle(!buttonToggle);
  };

  return (
    <div className='About'>
      <h2>Let Me Tell You a Bit About Me</h2>
      <p>
        My name is <span>Isaac Rutledge</span> I'm a solo developer trying to
        just make a living I'm here because I need to supply for my family. I've
        had a lot of business ideas, and every single one of them has failed. So
        I'm here now. Just trying to bring some bread to the table. I'm here to
        do everything I can to make your internet dreams come true. I'm working
        on developing some more skills, and I'm going to be making mobile
        applications and such soon. So I ask you, if you're interested in owning
        your own website, I will include the source code, and I will deploy the
        site for you if you wish. But any revisions you need done will cost a
        small amount. If you're interested in checking out my packages, click
        the button below.
      </p>
      <animated.button
        style={scale}
        onMouseEnter={buttonToggled}
        onMouseLeave={buttonToggled}
        className='button'>
        Packages
      </animated.button>
    </div>
  );
}
