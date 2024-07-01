import React from 'react'
import MScript from '../img/music-script.webp';
import GroupSingig from '../img/group-singing.webp';
import SingingMic from '../img/singing-with-mic.webp';
import OlderLady from '../img/older-lady.webp';

export default function Cards() {
  return (
    <div className="cards-container">
      <h2>Recent Posts</h2>
      <div className="cards">
        <div className="card">
          <img src={MScript} alt="Music script" />
          <div className="post-content">
            <p>
              The Composition classes at the Stratford & East London Music
              Festival are a new innovation - they only started last year.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>

        <div className="card">
          <img src={GroupSingig} alt="Group singers" />
          <div className="post-content">
            <p>
              We had a fabulous day on Monday 5 February at our annual Choirs,
              Orchestras and Bands Day at St Mary’s Church in South Woodford.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
        <div className="card">
          <img
            src={SingingMic}
            alt="Singing with microphone"
          />
          <div className="post-content">
            <p>
              Stratford & East London Music Festival celebrates 141 years of
              amazing live music and really great live performances.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
        <div className="card">
          <img src={OlderLady} alt="Older lady" />
          <div className="post-content">
            <p class="lst-child">
              Stella Redburn's report on the 2023 Festival highlights
              exceptional performances and the vibrant spirit of the event.
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button type="button">View More News</button>
      </div>
    </div>
  );
}
