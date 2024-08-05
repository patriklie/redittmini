import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subReddits: ["Home", "AskReddit"],
    activePosts: [],
    activeSubreddit: {
        name: "Home",
        url: "/r/Home/",
        image: "",
        id: "2qs0k"
    },
    searchWord: "",
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addSubredditPosts: (state, action) => {
            state.activePosts = action.payload
            console.log("legger til poster fra aktiv subreddit i reduxstore");
        },
        addActiveSubreddit: (state, action) => {
            console.log('inni redux store: ', action.payload)
            state.activeSubreddit = action.payload;
        },
        addSearch: (state, action) => {
            console.log("Search word added to store: ", action.payload);
            state.searchWord = action.payload;
        }
    }
})

export const { addSubredditPosts, addActiveSubreddit, addSearch } = postSlice.actions;
export default postSlice.reducer;