import React from 'react';
import Header from './home-components/Header';
import MiddleContent from './home-components/MiddleContent';
import BottomContent from './home-components/BottomContent';
import './home.css';

export default function home() {
  return (
    <div>
      <Header />
      <MiddleContent />
      <BottomContent />
    </div>
  );
}
