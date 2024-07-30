import React from 'react';
import Navbar from '../komponenter/Navbar.jsx';
import Subreddits from '../komponenter/Subreddits.jsx';

const Home = () => {
  return (
    <div className='site-grid'>
      <Navbar />
      <Subreddits />
    </div>
  )
}

export default Home