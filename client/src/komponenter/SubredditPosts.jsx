import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SubredditPost from './SubredditPost';

const SubredditPosts = () => {

  const [posts, setPosts] = useState([]);
  const activeSubreddit = useSelector(state => state.post.activeSubreddit);
  console.log("Aktiv subreddit fra store i subreddit komp: ", activeSubreddit);


  useEffect(() => {

    const fetchPostsFromActive = async () => {
      const response = await axios(`https://www.reddit.com/${activeSubreddit.url}.json`)
      console.log("Her er postene til active sub: ", response.data.data.children);
    }
  
    fetchPostsFromActive();

  },[activeSubreddit])


  return (
    <main>
      <SubredditPost />
    </main>
  )
}

export default SubredditPosts