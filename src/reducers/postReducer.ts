import { IPost, PostAction, IPostState } from "../interfaces"
import * as actionTypes from "../action-mappers/postActionTypes"

//Initial state of global feed
const initialState: IPostState = {
    posts: [
        {
            postId: 0,
            author: "none",
            title: "none",
            body: "none",
            likes: 0
        },
    ],
}

// The reducer function
    //The reducer function, in this case, alters the global state
export const postReducer = (
    state: IPostState = initialState,
    action: PostAction,
): IPostState => {
    console.log("in post reducer");
    switch (action.type) {
    //Switch statement to dictate between adding and removing posts
    case actionTypes.ADD_POST:
        const newPost: IPost = {
            postId: action.post.postId,
            author: action.post.author,
            title: action.post.title,
            body: action.post.body,
            likes: action.post.likes
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