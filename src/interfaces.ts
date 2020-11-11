
//------------------- Global types / function parameters / etc for Users -------------
export interface IUser {
    id: number
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    occupation: string
    bio: string
    address: string
    dob: string
}

export interface IUserState {
    user: IUser
}

export interface UserAction {
    type: string
    user: IUser
}

export const emptyUser:IUser =  {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    occupation: '',
    bio: '',
    address: '',
    dob: '',
}
//export type DispatchType = (args: UserAction) => UserAction
//-------------------------------------------------------------------------------------

export interface IPost {
    postId: number
    author: string
    title: string
    body: string
    likes: number
}
export interface IPostState {
    posts: IPost[]
}
export interface PostAction {
    type: string
    post: IPost
}
//export type DispatchType = (args: PostAction) => PostAction
//-------------------------------------------------------------------------

export interface IComment {
    commentId: number
    postId: number
    author: string
    comment: string
}

export interface ICommentState {
    comments: IComment[]
}

export interface CommentAction {
    type: string
    comment: IComment
}
//export type DispatchType = (args: CommentAction) => CommentAction
//-------------------------------------------------------------------------

export interface IState {
    UserState: IUser
    PostState: IPostState
    CommentState: ICommentState

}

//base url of the EC2 instance
export const baseUrl = "http://54.201.97.129:8081/StickyDB";