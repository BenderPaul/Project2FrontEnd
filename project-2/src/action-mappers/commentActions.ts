import { CommentAction, IComment } from "../interfaces";
import * as actionTypes from "./commentActionTypes";

export function addComment(comment: IComment) {
    const action: CommentAction = {
        type: actionTypes.ADD_COMMENT,
        comment
    }

    return action;
}

export function removeComment(comment: IComment) {
    const action: CommentAction = {
        type: actionTypes.REMOVE_COMMENT,
        comment
    }

    return action;
}