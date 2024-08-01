import React, {useState, useEffect} from 'react';
import Subreddit from './Subreddit.jsx';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Subreddits = () => {

  const [popularSubreddits, setPopularSubreddits] = useState([]);
  const activeSub = useSelector(state => state.post.activeSubreddit);

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
    <aside>
      <div className='subreddits-container'>
        <h2>Subreddits</h2>

        {
          popularSubreddits.map(sub => {
            if (sub.id === activeSub.id) {
              return <Subreddit key={sub.id} id={sub.id} active={true} image={sub.image} subname={sub.name} url={sub.url} />
            } else {
              return <Subreddit key={sub.id} id={sub.id} active={false} image={sub.image} subname={sub.name} url={sub.url} />
            }
          })
        }
    </div>
    </aside>
  )
}

export default Subreddits