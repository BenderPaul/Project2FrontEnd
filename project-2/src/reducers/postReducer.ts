import { IPost, PostAction, PostState } from "../interfaces"
import * as actionTypes from "../action-mappers/postActionTypes"

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
export const postReducer = (
    state: PostState = initialState,
    action: PostAction,
): PostState => {
    console.log("in post");
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