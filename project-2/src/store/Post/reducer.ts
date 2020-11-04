import { IPost, PostAction, PostState } from "../../type"
import * as actionTypes from "./actionTypes"

//Initial state of global feed
const initialState: PostState = {
    posts: [
        {
            postId: 0,
            author: "none",
            title: "none",
            body: "none",
        },
    ],
}

// The reducer function
    //The reducer function, in this case, alters the global state
const reducer = (
    state: PostState = initialState,
    action: PostAction,
): PostState => {
    switch (action.type) {
    //Switch statement to dictate between adding and removing posts
    case actionTypes.ADD_POST:
        const newPost: IPost = {
            postId: action.post.postId,
            author: action.post.author,
            title: action.post.title,
            body: action.post.body,
        }
        return {
            ...state,
            posts: state.posts.concat(newPost),
        }
    case actionTypes.REMOVE_POST:
        const updatedPosts: IPost[] = state.posts.filter(
            post => post.postId !== action.post.postId
        )
        return {
            ...state,
            posts: updatedPosts,
        }
    }
    return state
}