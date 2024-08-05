import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubredditPost from './SubredditPost';
import { addSubredditPosts } from '../slices/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const SubredditPosts = () => {

  const [posts, setPosts] = useState([]);
  const activeSubreddit = useSelector(state => state.post.activeSubreddit);
  const searchWord = useSelector(state => state.post.searchWord);
  console.log("Aktiv subreddit fra store i subreddit komp: ", activeSubreddit);
  const dispatch = useDispatch();


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
        text: post.data.selftext,
      }))
      setPosts(mappedPosts);
      dispatch(addSubredditPosts(mappedPosts));
    }
  
    fetchPostsFromActive();

  },[activeSubreddit]);

  const filteredPosts = searchWord
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        post.author.toLowerCase().includes(searchWord.toLowerCase()) ||
        post.text.toLowerCase().includes(searchWord.toLowerCase())
      )
    : posts;  


  return (
    <main>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <SubredditPost 
            key={post.id} 
            post={post} 
          />
        ))
      ) : <p style={{textAlign: "center"}}>No posts found 😢!</p>
      }
    </main>
  )
}

export default SubredditPosts