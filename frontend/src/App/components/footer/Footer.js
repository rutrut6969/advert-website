import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer nav'>
      <nav>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/about'>
          About
        </Link>
        <Link className='link' to='/contact'>
          Contact
        </Link>
      </nav>
    </div>
  );
}
