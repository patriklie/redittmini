import React from 'react';
import Subreddit from './Subreddit.jsx';

const subreddits = () => {
  return (
    <aside className='subreddits-container'>
      <h2>Subreddits</h2>

      <Subreddit active={false} />
      <Subreddit active={true} />
      <Subreddit active={false} />

    </aside>
  )
}

export default subreddits