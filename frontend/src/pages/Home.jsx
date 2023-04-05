import React from 'react';
import JoelHiltonHeadshot from './images/JoelHiltonHeadshot.jpg';

console.log(JoelHiltonHeadshot);

function Home() {
  return (
    <div class="text-center">
      <h1 class="display-3">Welcome to Joel Hilton's webiste</h1>

      <blockquote class="blckquote">
        <p class="mb-0">View Joel Hiltons podcast or his movie list</p>
      </blockquote>

      <br />
      <img src={JoelHiltonHeadshot} class="rounded" alt="JoelHilton"></img>
    </div>
  );
}

export default Home;
