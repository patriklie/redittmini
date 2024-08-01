import React from 'react';
import testbilde from '../assets/images/subreddit_test.png'
import { addActiveSubreddit } from '../slices/postSlice';
import { useDispatch } from 'react-redux';

const Subreddit = ({ active, image, subname = "Name", url, id }) => {

    const dispatch = useDispatch();
    const subImage = image || testbilde;
    const className = `subreddit ${active ? 'active': ""}`;

    const handleActiveSubreddit = () => {
      console.log("inside handle active subreddit")
      dispatch(addActiveSubreddit({image, name: subname, url, id}))
    }

  return (
    <div onClick={handleActiveSubreddit} className={className}>
        <img className='subreddit-image' src={subImage} alt="subreddit-image" />
        <p>{subname}</p>
    </div>
  )
}

export default Subreddit