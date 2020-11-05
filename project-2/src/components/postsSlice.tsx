import { createSlice } from '@reduxjs/toolkit'

const initialState = [

    // postId: 0,
    //         author: "none",
    //         title: "none",
    //         body: "none",
    {postId: '1', author: 'User1', body: 'Hello!'},
    {postId: '2', author: 'second Post!', body: 'Hello again!'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}     
})

export default postSlice.reducer