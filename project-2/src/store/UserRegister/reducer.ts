import userEvent from "@testing-library/user-event"
import { IUser, IUserState, UserAction } from "../../type"
import * as actionTypes from "./actionTypes"


//This is the initial state of global users
const initialState: IUser = {

    id: 0,
    username: "none",
    password: "none",
    firstName: "none",
    lastName: "none",
    email: "none",

}
// The reducer function 
    //The reducer function, in this case, alters the global state of Users
export const reducer = (
    state = initialState,
    action: UserAction,
) => {
    //Create a switch statement to alter the reducer between ADD and REMOVE action types
    switch (action.type) {
        //If the action is to add a user, take the User props and concat the new user object onto the global state
        case actionTypes.ADD_USER:
            const newUser: IUser = {
                id: action.user.id,
                username: action.user.username,
                password: action.user.password,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                email: action.user.email,
            }
            return {
                ...state,
                newUser
            }
        // If the action is to remove a user, then remove the user by prop=ID from the global state    
    //     case actionTypes.REMOVE_USER:
    //         const updatedUsers: IUser[] = state.users.filter(
    //             user => user.id !== action.user.id,
    //         )
    //         return {
    //             ...state,
    //             users: updatedUsers,
    //         }
    // }
    //Return the newly updated state
        default:
            return state
    }
}