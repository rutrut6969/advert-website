import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <div className='nav header'>
      <nav>
        <Link
          className='link'
          to={{
            pathname: '/',
            state: {
              from: 'root',
            },
          }}>
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
