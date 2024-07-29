import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subReddits: ["Home", "AskReddit"],
    activePosts: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addSubredditPosts: (state, action) => {
            // state.activePosts = action.payload
            console.log("legger til poster fra aktiv subreddit i reduxstore");
        }
    }
})

export const { addSubredditPosts } = postSlice.actions;
export default postSlice.reducer;