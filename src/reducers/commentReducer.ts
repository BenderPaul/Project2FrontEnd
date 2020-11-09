import { CommentAction, IComment, ICommentState } from "../interfaces"

const initialState: ICommentState = {
    comments: [] as IComment[]
}

export const commentReducer = (state = initialState, action: CommentAction) => {
    return state;
}