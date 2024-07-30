import React, {useState, useEffect} from 'react';
import Subreddit from './Subreddit.jsx';
import axios from 'axios';


const Subreddits = () => {

  const [popularSubreddits, setPopularSubreddits] = useState([]);
  const [activeSubreddit, setActiveSubreddit] = useState([]);

  useEffect(() => {
    const fetchPopularSubreddits = async () => {
      const response = await axios('https://www.reddit.com/subreddits/popular.json');
      console.log(response.data);
    }

    fetchPopularSubreddits()

  },[])

  return (
    <aside className='subreddits-container'>
      <h2>Subreddits</h2>

      <Subreddit active={false} />
      <Subreddit active={true} />
      <Subreddit active={false} />

    </aside>
  )
}

export default Subreddits