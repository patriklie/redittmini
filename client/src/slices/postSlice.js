import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subReddits: ["Home", "AskReddit"],
    activePosts: [],
    activeSubreddit: null,
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addSubredditPosts: (state, action) => {
            // state.activePosts = action.payload
            console.log("legger til poster fra aktiv subreddit i reduxstore");
        },
        addActiveSubreddit: (state, action) => {
            console.log('inni redux store: ', action.payload)
            state.activeSubreddit = action.payload;
        }
    }
})

export const { addSubredditPosts, addActiveSubreddit } = postSlice.actions;
export default postSlice.reducer;