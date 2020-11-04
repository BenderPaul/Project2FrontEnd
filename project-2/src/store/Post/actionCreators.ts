import { IPost, PostAction } from "../../type"
import * as actionTypes from "./actionTypes"


// This action will dispatch an action to delete a feed element
export function addPost(post: IPost) {
    const action: PostAction = {
        type: actionTypes.ADD_POST,
        post,
    }
    //An axios request goes here (to the database?)
}

export function removePost(post: IPost) {
    const action: PostAction = {
        type: actionTypes.REMOVE_POST,
        post,
    }
    //An axios request goes here (to the database?)
}