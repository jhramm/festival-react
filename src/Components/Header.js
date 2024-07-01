import React from 'react'
import NavBar from './NavBar';
import Hero from '../img/boys-with-violin.webp';
import CountdownTimer from './Countdown';

export default function Header() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <img src={Hero} alt="Boys with violin" />
        <div className="hero-content">
          <h1>Registration for our 2024 festival is now closed</h1>
          <div>
            <button type="button">Latest Updates</button>
          </div>
          <p className="countdown" id="countdown"><CountdownTimer /></p>
        </div>
      </div>
    </>
  );
}
