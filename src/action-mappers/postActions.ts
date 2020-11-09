import { IPost, PostAction } from "../interfaces"
import * as actionTypes from "./postActionTypes"


// This action will dispatch an action to create a post
export function addPost(post: IPost) {
    const action: PostAction = {
        type: actionTypes.ADD_POST,
        post,
    }
    //An axios request goes here (to the database?)
    return action;
}

// This action will dispatch an action to delete a post
export function removePost(post: IPost) {
    const action: PostAction = {
        type: actionTypes.REMOVE_POST,
        post,
    }
    //An axios request goes here (to the database?)
    return action;
}