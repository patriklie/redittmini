import React from 'react'

const SubredditPost = () => {
  return (
    <article>
        <div className='post-card'>
            <div className='post-votes-container'>
                <span class="material-symbols-rounded votes up">arrow_upward_alt</span>
                <div className='votes'>45</div>
                <span class="material-symbols-rounded votes down">arrow_downward_alt</span>
            </div>
            <div className='post-container'>
                <div className='post-title'>olympic shooting silver medalist yusuf dikeç reprising his iconic posture</div>
                <img className='post-image' src="https://i.redd.it/zjloz5b9bzfd1.jpeg" />
                <div className='post-details-container'>
                    <div className='author'>Quzubaba</div>
                    <div className="time">7 hours ago</div>
                    <div className='comments'>
                        <span class="material-symbols-rounded comments">chat</span>
                        <p>850</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default SubredditPost