import React from 'react';
import testbilde from '../assets/images/subreddit_test.png'

const Subreddit = ({ active, image, subname = "Name" }) => {

    const subImage = image || testbilde;
    const className = `subreddit ${active ? 'active': ""}`;
    

  return (
    <div className={className}>
        <img className='subreddit-image' src={subImage} alt="subreddit-image" />
        <p>{subname}</p>
    </div>
  )
}

export default Subreddit