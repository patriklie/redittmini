import React, { useState } from 'react'

const SubredditPost = ({ post }) => {

    const { title, author, votes, comments, image, time } = post;
    const formattedTime = new Date(time * 1000).toLocaleDateString();

    const [upVoted, setUpVoted] = useState(false);
    const [downVoted, setDownVoted] = useState(false);

    const handleUpvote = () => {
        console.log('You upvoted this post!');
        setUpVoted(true);
        setDownVoted(false);
    }

    const handleDownvote = () => {
        console.log('You downvoted this post!');
        setUpVoted(false);
        setDownVoted(true);
    }

  return (
    <article>
        <div className='post-card'>
            <div className='post-votes-container'>
                <span 
                onClick={handleUpvote} 
                className={`material-symbols-rounded votes up ${upVoted ? "active" : ""}`}>arrow_upward_alt</span>
                <div className='votes'>{votes}</div>
                <span 
                onClick={handleDownvote} 
                className={`material-symbols-rounded votes down ${downVoted ? "active" : ""}`}>arrow_downward_alt</span>
            </div>
            <div className='post-container'>
                <div className='post-title'>{title}</div>
                <img className='post-image' src={image} />
                <div className='post-details-container'>
                    <div className='author'>{author}</div>
                    <div className="time">{formattedTime} hours ago</div>
                    <div className='comments'>
                        <span className="material-symbols-rounded comments">chat</span>
                        <p>{comments}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default SubredditPost