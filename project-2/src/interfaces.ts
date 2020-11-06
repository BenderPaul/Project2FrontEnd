
//------------------- Global types / function parameters / etc for Users -------------
export interface IUser {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
}
export interface IUserState {
    UserState: IUser
}
export interface UserAction {
    type: string
    user: IUser
}
//export type DispatchType = (args: UserAction) => UserAction
//-------------------------------------------------------------------------------------

export interface IPost {
    postId: number
    author: string
    title: string
    body: string
}
export interface PostState {
    posts: IPost[]
}
export interface PostAction {
    type: string
    post: IPost
}
//export type DispatchType = (args: PostAction) => PostAction
//-------------------------------------------------------------------------

export interface IState {
    UserState: IUser,
    PostState: IPost
}
