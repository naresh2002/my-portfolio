import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/experience">Experience</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/achievements">Achievements</a></li>
          <li><a href="/additional">Additional</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
