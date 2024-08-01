import React, { useState } from 'react';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en';
import axios from 'axios';
import { useSelector } from 'react-redux';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const formatVotes = (votes) => {
    if (votes >= 1_000_000) {
      return (votes / 1_000_000).toFixed(1) + 'M';
    } else if (votes >= 1_000) {
      return (votes / 1_000).toFixed(1) + 'K'; 
    } else {
      return votes; 
    }
  };

const SubredditPost = ({ post }) => {

    const { title, author, votes, comments, image, time, text, id } = post;
    const [postComments, setPostComments] = useState([]);
    const [toggleComments, setToggleComments] = useState(false);
    const [numVotes, setNumVotes] = useState(votes);
    const activeSubreddit = useSelector(state => state.post.activeSubreddit)

    const formattedTime = new Date(time * 1000);
    const formattedVotes = formatVotes(votes);

    const [upVoted, setUpVoted] = useState(false);
    const [downVoted, setDownVoted] = useState(false);

    const handleUpvote = () => {
        console.log('You upvoted this post!');
        if(upVoted) {
            setUpVoted(false)
        } else {
            setUpVoted(true);
            setDownVoted(false);
        }

    }

    const handleDownvote = () => {
        console.log('You downvoted this post!');
        if(downVoted) {
            setDownVoted(false)
        } else {
            setUpVoted(false);
            setDownVoted(true);
        }
    }

    const fetchComments = async () => {
        if (toggleComments) {
            setToggleComments(false)
        } else {
            setToggleComments(true);
            console.log("Showing Comments for post!");
            const response = await axios(`https://www.reddit.com/r/${activeSubreddit.name}/comments/${id}/.json`);
            console.log(response.data[1].data.children);

            if (response.data[1].data.children.length > 0) {
                const comments = response.data[1].data.children.map(comment => ({
                    commentAuthor: comment.data.author,
                    commentTime: comment.data.created_utc,
                    commentId: comment.data.id,
                    commentText: comment.data.body
                }))
                setPostComments(comments);
            }
    } 
}

  return (
    <article>
        <div className='post-card'>

            <div className='post-votes-container'>
                <span 
                onClick={handleUpvote} 
                className={`material-symbols-rounded votes up ${upVoted ? "active" : ""}`}>arrow_upward_alt</span>
                <div className='votes'>{formattedVotes}</div>
                <span 
                onClick={handleDownvote} 
                className={`material-symbols-rounded votes down ${downVoted ? "active" : ""}`}>arrow_downward_alt</span>
            </div>

            <div className='post-container'>
                <div className='post-title'>{title}</div>
                <img className='post-image' src={image} />
                { text && (
            <div className='post-text'>{text}</div>
          )}
                
                <div className='post-details-container'>
                    <div className='author'>{author}</div>
                    <div className="time">{timeAgo.format(formattedTime)}</div>
                    <div className='comments'>
                        <span onClick={fetchComments} className="material-symbols-rounded comments">chat</span>
                        <p>{comments}</p>
                    </div>
                </div>

                { toggleComments && 
                    <div className='comment-section'>

                    { postComments.length > 0 && postComments.map(comment => (
                        <div key={comment.commentId} className='comment-container'>
                            <div className='comment-info'>
                                <div className='comment-username'>{comment.commentAuthor}</div>
                                <div className='comment-time'>{timeAgo.format(new Date(comment.commentTime * 1000))}</div>
                            </div>
                            <div className='comment-text'>{comment.commentText}</div>
                        </div>
                        ))       
                    }

                    </div>
                }

            </div>

        </div>
    </article>
  )
}

export default SubredditPost