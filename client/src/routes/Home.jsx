import React from 'react';
import Navbar from '../komponenter/Navbar.jsx';
import Subreddits from '../komponenter/Subreddits.jsx';
import SubredditPosts from '../komponenter/SubredditPosts.jsx';

const Home = () => {
  return (
    <div className='site-grid'>
      <Navbar />
      <SubredditPosts />
      <Subreddits />
    </div>
  )
}

export default Home