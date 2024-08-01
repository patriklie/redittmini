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

      const mappedPosts = response.data.data.children.map(post => ({
        title: post.data.title,
        author: post.data.author,
        id: post.data.id,
        votes: post.data.ups,
        comments: post.data.num_comments,
        image: post.data.url,
        time: post.data.created_utc,
      }))
      setPosts(mappedPosts);
    }
  
    fetchPostsFromActive();

  },[activeSubreddit])


  return (
    <main>
      { posts.length > 0 ? (
        posts.map(post => (
          <SubredditPost 
            key={post.id} 
            post={post} 
          />
        ))
      ) : <p>No posts found.</p>
      }

    </main>
  )
}

export default SubredditPosts