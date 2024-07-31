import React, {useState, useEffect} from 'react';
import Subreddit from './Subreddit.jsx';
import axios from 'axios';


const Subreddits = () => {

  const [popularSubreddits, setPopularSubreddits] = useState([]);
  const [activeSubreddit, setActiveSubreddit] = useState([]);

  useEffect(() => {
    const fetchPopularSubreddits = async () => {
      try {
        const response = await axios('https://www.reddit.com/subreddits/popular.json');
        console.log(response.data.data.children);
        const subreddits = response.data.data.children.map(subreddit => ({
          name: subreddit.data.display_name,
          url: subreddit.data.url,
          image: subreddit.data.icon_img,
          id: subreddit.data.id
        }));
        setPopularSubreddits(subreddits);
      } catch (error) {
        console.error('Could not fetch the subreddits', error);
      }
    };

    fetchPopularSubreddits();
  }, []);

  return (
    <aside className='subreddits-container'>
      <h2>Subreddits</h2>

      {
        popularSubreddits.map(sub => {
          return <Subreddit key={sub.id} image={sub.image} subname={sub.name} url={sub.url} />
        })
      }

{/*       <Subreddit active={false} />
      <Subreddit active={true} />
      <Subreddit active={false} /> */}

    </aside>
  )
}

export default Subreddits